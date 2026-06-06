import { Request, Response } from 'express';
import Project from '../models/Project';
import { success, failure } from '../utils/response';

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, language, framework, code, tags, isPublic } = req.body;

    if (!title || !language || !code) {
      return res.status(400).json(failure('Title, language, and code are required'));
    }

    const project = new Project({
      userId: (req as any).user?.userId,
      title,
      description,
      language,
      framework,
      code,
      tags: tags || [],
      isPublic: isPublic || false,
    });

    await project.save();
    res.status(201).json(success(project));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { limit = 10, skip = 0 } = req.query;
    const projects = await Project.find({ userId: (req as any).user?.userId })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip(parseInt(skip as string));

    const total = await Project.countDocuments({ userId: (req as any).user?.userId });

    res.json(success({
      projects,
      total,
      limit: parseInt(limit as string),
      skip: parseInt(skip as string),
    }));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json(failure('Project not found'));
    }

    // Check if user has access
    if (project.userId.toString() !== (req as any).user?.userId && !project.isPublic) {
      return res.status(403).json(failure('Access denied'));
    }

    // Increment views
    project.views += 1;
    await project.save();

    res.json(success(project));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, language, framework, code, tags, isPublic } = req.body;

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json(failure('Project not found'));
    }

    if (project.userId.toString() !== (req as any).user?.userId) {
      return res.status(403).json(failure('Access denied'));
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description, language, framework, code, tags, isPublic },
      { new: true }
    );

    res.json(success(updatedProject));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json(failure('Project not found'));
    }

    if (project.userId.toString() !== (req as any).user?.userId) {
      return res.status(403).json(failure('Access denied'));
    }

    await Project.findByIdAndDelete(id);
    res.json(success(null));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};

export const likeProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.json(success(project));
  } catch (error) {
    res.status(500).json(failure((error as Error).message));
  }
};
