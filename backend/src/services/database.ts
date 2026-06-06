import mongoose from 'mongoose';
import { env } from '../config';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI, {
      autoIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};
