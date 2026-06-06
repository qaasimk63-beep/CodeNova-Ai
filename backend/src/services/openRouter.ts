import axios from 'axios';
import { env } from '../config';

export interface CodeGenerationRequest {
  prompt: string;
  language: string;
  framework?: string;
  codeStyle?: string;
}

export interface CodeGenerationResponse {
  code: string;
  language: string;
  explanation: string;
}

if (!env.OPENROUTER_API_KEY) {
  throw new Error('OpenRouter API key is missing. Set OPENROUTER_API_KEY in backend/.env');
}

const client = axios.create({
  baseURL: 'https://openrouter.ai/api/v1',
  headers: {
    'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`,
    'HTTP-Referer': 'https://codenova.ai',
    'X-Title': 'CodeNova AI',
  },
});

export const generateCode = async (
  request: CodeGenerationRequest
): Promise<CodeGenerationResponse> => {
  try {
    const systemPrompt = `You are an expert AI code generator. Generate clean, production-ready code based on user requirements.
    
When generating code:
- Follow best practices and design patterns
- Include proper error handling
- Add meaningful comments
- Use consistent formatting
- Optimize for performance and readability
- Provide clear explanations`;

    const userPrompt = `Generate ${request.language} code${
      request.framework ? ` using ${request.framework}` : ''
    } for the following requirement:

${request.prompt}

Requirements:
- Language: ${request.language}
${request.framework ? `- Framework: ${request.framework}` : ''}
${request.codeStyle ? `- Code Style: ${request.codeStyle}` : ''}

Please provide only the code without markdown formatting.`;

    const response = await client.post('/chat/completions', {
      model: 'openrouter/auto',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 4096,
    });

    const content = response.data.choices[0].message.content;

    // Remove markdown code blocks if present
    let code = content
      .replace(/^```[\w]*\n?/gm, '')
      .replace(/\n?```$/gm, '')
      .trim();

    return {
      code,
      language: request.language,
      explanation: `Generated ${request.language} code for: ${request.prompt}`,
    };
  } catch (error: any) {
    console.error('OpenRouter API Error:', error.response?.data || error.message);
    throw new Error(
      `Failed to generate code: ${error.response?.data?.message || error.message}`
    );
  }
};
