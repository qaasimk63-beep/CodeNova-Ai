import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../services/authService';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await forgotPassword(email);
      setMessage(response.data.message || 'A recovery email has been sent if your account exists.');
    } catch {
      setError('Unable to process your request. Please try again later.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,233,0.12),_transparent_20%),linear-gradient(180deg,_#02040b_0%,_#070a10_100%)] px-6 py-10">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Trouble signing in?</p>
          <h1 className="text-4xl font-semibold text-white">Recover your account</h1>
          <p className="text-slate-400">Enter your email and we’ll send a secure password recovery link.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm text-slate-300">
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cosmic" />
          </label>
          {message && <p className="text-sm text-emerald-400">{message}</p>}
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button type="submit" className="w-full rounded-3xl bg-cosmic px-5 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">
            Send recovery email
          </button>
          <p className="text-center text-sm text-slate-400">
            Remembered your password? <Link to="/signin" className="text-cosmic hover:text-white">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
