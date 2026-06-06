import { useMemo, useState } from 'react';
import { generateCode, saveProject } from '../services/aiService';
import CodePanel from '../components/CodePanel';
import LoadingSpinner from '../components/LoadingSpinner';

const languages = ['JavaScript', 'TypeScript', 'Python', 'Go', 'Ruby', 'C#', 'Java', 'HTML/CSS'];
const frameworks = ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Flask', 'Vue', 'Svelte', 'Angular', 'None'];

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('Create a responsive signup page with dark cyberpunk UI and validation.');
  const [language, setLanguage] = useState('TypeScript');
  const [framework, setFramework] = useState('React');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('Cyberpunk Signup Form');

  const selectedLanguage = useMemo(() => language, [language]);

  const handleGenerate = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await generateCode({ prompt, language, framework });
      setResult(response.data.code || response.data);
    } catch (err: any) {
      const message = err?.response?.data?.message || err?.message || 'Unable to generate code.';
      setError(message.includes('API key') ? 'Unable to generate code. Please verify your API key and try again.' : message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!result) return;
    try {
      await saveProject({ title, prompt, language, framework, generatedCode: result });
      alert('Project saved to your workspace.');
    } catch {
      alert('Failed to save project. Please sign in and try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">AI generator</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Generate production-ready code in seconds</h2>
          </div>
          <div className="inline-flex flex-wrap items-center gap-3">
            <button type="button" className="rounded-3xl bg-cosmic px-5 py-3 font-semibold text-slate-950 transition hover:opacity-95" onClick={handleGenerate}>
              Generate code
            </button>
            <button type="button" className="rounded-3xl border border-white/10 px-5 py-3 text-slate-200 transition hover:bg-white/5" onClick={handleSave} disabled={!result}>
              Save project
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <label className="block text-sm text-slate-300">
              Project title
              <input value={title} onChange={(event) => setTitle(event.target.value)} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cosmic" />
            </label>
            <label className="block text-sm text-slate-300">
              Language
              <select value={language} onChange={(event) => setLanguage(event.target.value)} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cosmic">
                {languages.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Framework
              <select value={framework} onChange={(event) => setFramework(event.target.value)} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cosmic">
                {frameworks.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-300">
              Prompt
              <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={8} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-sm text-white outline-none transition focus:border-cosmic" />
            </label>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-glow">
            <div className="mb-5 flex items-center justify-between gap-3 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-white">AI Output</h3>
                <p className="text-sm text-slate-500">Live preview with syntax highlighting and code export.</p>
              </div>
              {loading && <LoadingSpinner />}
            </div>
            <CodePanel code={result} language={selectedLanguage} />
            {error && <p className="mt-4 text-sm text-rose-400">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
