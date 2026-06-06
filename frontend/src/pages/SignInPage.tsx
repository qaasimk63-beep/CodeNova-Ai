import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      const response = await signIn({ email, password });
      localStorage.setItem('codenova_token', response.data.accessToken);
      localStorage.setItem('codenova_user', JSON.stringify(response.data.user));
      navigate('/app');
    } catch (err: any) {
      const message = err?.response?.data?.error || err?.message || 'Sign in failed. Please check your credentials and try again.';
      setError(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_20%),linear-gradient(180deg,_#02040b_0%,_#070a10_100%)] px-6 py-10">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Welcome back</p>
          <h1 className="text-4xl font-semibold text-white">Sign in to CodeNova AI</h1>
          <p className="text-slate-400">Enter your credentials to unlock premium AI code generation and workspace features.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm text-slate-300">
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cosmic" />
          </label>
          <label className="block text-sm text-slate-300">
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required minLength={8} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cosmic" />
          </label>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button type="submit" className="w-full rounded-3xl bg-cosmic px-5 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">
            Sign in
          </button>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <Link to="/forgot-password" className="hover:text-white">Forgot password?</Link>
            <Link to="/signup" className="hover:text-white">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
