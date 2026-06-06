import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGODB_URI: string;
  JWT_SECRET: string;
  OPENROUTER_API_KEY: string;
  CORS_ORIGIN: string;
}

function getEnvVariable(name: string, defaultValue?: string): string {
  const value = process.env[name];
  if (!value && defaultValue === undefined) {
    console.warn(`Warning: Missing environment variable ${name}`);
    return '';
  }
  return value || defaultValue || '';
}

export const env: Config = {
  NODE_ENV: getEnvVariable('NODE_ENV', 'development'),
  PORT: parseInt(getEnvVariable('PORT', '4174'), 10),
  MONGODB_URI: getEnvVariable('MONGODB_URI', 'mongodb://localhost:27017/codenova-ai'),
  JWT_SECRET: getEnvVariable('JWT_SECRET', 'your-super-secret-jwt-key-change-this-in-production'),
  OPENROUTER_API_KEY: getEnvVariable('OPENROUTER_API_KEY', ''),
  CORS_ORIGIN: getEnvVariable('CORS_ORIGIN', 'http://localhost:4173'),
};
