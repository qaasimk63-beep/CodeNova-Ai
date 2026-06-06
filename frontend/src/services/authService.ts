import api from './api';

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  plan: 'free' | 'pro' | 'enterprise';
  credits: number;
}

export interface AuthResponse {
  success: boolean;
  data: {
    user: User;
    accessToken: string;
  };
}

export const signUp = async (payload: SignUpPayload): Promise<AuthResponse> => {
  const response = await api.post('/auth/signup', payload);
  if (response.data.data?.accessToken) {
    localStorage.setItem('codenova_token', response.data.data.accessToken);
    localStorage.setItem('codenova_user', JSON.stringify(response.data.data.user));
  }
  return response.data;
};

export const signIn = async (payload: SignInPayload): Promise<AuthResponse> => {
  const response = await api.post('/auth/signin', payload);
  if (response.data.data?.accessToken) {
    localStorage.setItem('codenova_token', response.data.data.accessToken);
    localStorage.setItem('codenova_user', JSON.stringify(response.data.data.user));
  }
  return response.data;
};

export const logout = async () => {
  await api.post('/auth/logout');
  localStorage.removeItem('codenova_token');
  localStorage.removeItem('codenova_user');
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get('/auth/me');
  return response.data.data;
};

export const updateProfile = async (payload: {
  firstName?: string;
  lastName?: string;
  avatar?: string;
}) => {
  const response = await api.patch('/auth/profile', payload);
  if (response.data.data) {
    localStorage.setItem('codenova_user', JSON.stringify(response.data.data));
  }
  return response.data.data;
};

export const getStoredUser = (): User | null => {
  const user = localStorage.getItem('codenova_user');
  return user ? JSON.parse(user) : null;
};

export const forgotPassword = async (email: string) => {
  const response = await api.post('/auth/forgot-password', { email });
  return response.data;
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem('codenova_token');
};

