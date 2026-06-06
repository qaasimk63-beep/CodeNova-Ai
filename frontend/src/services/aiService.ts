import api from './api';

export interface CodeGenerationRequest {
  prompt: string;
  language: string;
  framework?: string;
  codeStyle?: string;
}

export interface CodeGenerationResponse {
  success: boolean;
  data: {
    code: string;
    language: string;
    explanation: string;
    creditsRemaining: number;
  };
}

export interface HistoryItem {
  _id: string;
  prompt: string;
  language: string;
  framework?: string;
  generatedCode: string;
  status: 'success' | 'failed';
  error?: string;
  creditsUsed: number;
  createdAt: string;
}

export const generateCode = async (
  payload: CodeGenerationRequest
): Promise<CodeGenerationResponse> => {
  const response = await api.post('/ai/generate', payload);
  return response.data;
};

export const getHistory = async (limit = 10, skip = 0) => {
  const response = await api.get('/ai/history', {
    params: { limit, skip },
  });
  return response.data.data;
};

export const deleteHistoryEntry = async (id: string) => {
  const response = await api.delete(`/ai/history/${id}`);
  return response.data;
};

export const clearHistory = async () => {
  const response = await api.delete('/ai/history');
  return response.data;
};

export interface ProjectPayload {
  title: string;
  description: string;
  language: string;
  framework?: string;
  code: string;
  tags?: string[];
  isPublic?: boolean;
}

export interface ProjectResponse {
  _id: string;
  title: string;
  description: string;
  language: string;
  framework?: string;
  code: string;
  tags: string[];
  isPublic: boolean;
  views: number;
  likes: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const createProject = async (payload: ProjectPayload) => {
  const response = await api.post('/projects', payload);
  return response.data.data;
};

export const saveProject = async (payload: ProjectPayload) => {
  return createProject(payload);
};

export const getProjects = async (limit = 10, skip = 0) => {
  const response = await api.get('/projects', {
    params: { limit, skip },
  });
  return response.data.data;
};

export const getProjectById = async (id: string) => {
  const response = await api.get(`/projects/${id}`);
  return response.data.data;
};

export const updateProject = async (id: string, payload: Partial<ProjectPayload>) => {
  const response = await api.patch(`/projects/${id}`, payload);
  return response.data.data;
};

export const deleteProject = async (id: string) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};

export const likeProject = async (id: string) => {
  const response = await api.post(`/projects/${id}/like`);
  return response.data.data;
};
