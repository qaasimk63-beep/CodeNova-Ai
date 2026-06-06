import { Schema, model, Document, Types } from 'mongoose';

export interface IHistory extends Document {
  userId: Types.ObjectId;
  prompt: string;
  language: string;
  framework?: string;
  generatedCode: string;
  creditsUsed: number;
  status: 'success' | 'failed';
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}

const historySchema = new Schema<IHistory>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    framework: {
      type: String,
    },
    generatedCode: {
      type: String,
      required: true,
    },
    creditsUsed: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: ['success', 'failed'],
      default: 'success',
    },
    error: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IHistory>('History', historySchema);
