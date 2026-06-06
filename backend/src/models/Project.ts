import { Schema, model, Document, Types } from 'mongoose';

export interface IProject extends Document {
  userId: Types.ObjectId;
  title: string;
  description: string;
  language: string;
  framework?: string;
  code: string;
  tags: string[];
  isPublic: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    language: {
      type: String,
      required: true,
    },
    framework: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IProject>('Project', projectSchema);
