import { Request, Response } from 'express';
import User from '../models/User';
import { generateTokens } from '../services/jwtService';
import { success, failure } from '../utils/response';

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Validation
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json(failure('Missing required fields'));
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json(failure('Email already registered'));
    }

    // Create new user
    const user = new User({
      email,
      password,
      firstName,
      lastName,
    });

    await user.save();

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens({
      userId: user._id.toString(),
      email: user.email,
    });

    // Set refresh token cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(success({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        plan: user.plan,
        credits: user.credits,
      },
      accessToken,
    }));
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json(failure((error as Error).message));
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(failure('Email and password required'));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json(failure('Invalid credentials'));
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json(failure('Invalid credentials'));
    }

    const { accessToken, refreshToken } = generateTokens({
      userId: user._id.toString(),
      email: user.email,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json(success({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        plan: user.plan,
        credits: user.credits,
      },
      accessToken,
    }));
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json(failure((error as Error).message));
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('refreshToken');
  res.json(success({ message: 'Logged out successfully' }));
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json(failure('Email is required'));
    }

    // Placeholder response for password recovery flow.
    res.json(success({ message: 'If this email exists, a recovery link has been sent.' }));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById((req as any).user?.userId).select('-password');
    if (!user) {
      return res.status(404).json(failure('User not found'));
    }

    res.json(success(user));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      (req as any).user?.userId,
      { firstName, lastName, avatar },
      { new: true }
    ).select('-password');

    res.json(success(user));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};
