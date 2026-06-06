import { Request, Response } from 'express';
import { generateCode } from '../services/openRouter';
import User from '../models/User';
import History from '../models/History';
import { success, failure } from '../utils/response';

export const generateCodeHandler = async (req: Request, res: Response) => {
  try {
    const { prompt, language, framework, codeStyle } = req.body;

    if (!prompt || !language) {
      return res.status(400).json(failure('Prompt and language are required'));
    }

    const user = await User.findById((req as any).user?.userId);
    if (!user) {
      return res.status(404).json(failure('User not found'));
    }

    // Check credits (1 credit per generation)
    if (user.credits < 1) {
      return res.status(402).json(failure('Insufficient credits'));
    }

    // Generate code
    const result = await generateCode({
      prompt,
      language,
      framework,
      codeStyle,
    });

    // Deduct credits
    user.credits -= 1;
    await user.save();

    // Save to history
    const historyEntry = new History({
      userId: (req as any).user?.userId,
      prompt,
      language,
      framework,
      generatedCode: result.code,
      creditsUsed: 1,
      status: 'success',
    });
    await historyEntry.save();

    res.json(success({
      code: result.code,
      language: result.language,
      explanation: result.explanation,
      creditsRemaining: user.credits,
    }));
  } catch (error) {
    console.error('Code generation error:', error);

    // Save failed attempt to history
    if ((req as any).user?.userId) {
      const { prompt, language, framework } = req.body;
      const historyEntry = new History({
        userId: (req as any).user.userId,
        prompt: prompt || 'Unknown',
        language: language || 'Unknown',
        framework,
        generatedCode: '',
        creditsUsed: 0,
        status: 'failed',
        error: (error as Error).message,
      });
      await historyEntry.save();
    }

    res.status(500).json(failure((error as Error).message));
  }
};

export const getHistory = async (req: Request, res: Response) => {
  try {
    const { limit = 10, skip = 0 } = req.query;
    const history = await History.find({ userId: (req as any).user?.userId })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip(parseInt(skip as string));

    const total = await History.countDocuments({ userId: (req as any).user?.userId });

    res.json(success({
      history,
      total,
      limit: parseInt(limit as string),
      skip: parseInt(skip as string),
    }));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const deleteHistoryEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await History.findByIdAndDelete(id);
    res.json(success(null));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const clearHistory = async (req: Request, res: Response) => {
  try {
    await History.deleteMany({ userId: (req as any).user?.userId });
    res.json(success(null));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};
