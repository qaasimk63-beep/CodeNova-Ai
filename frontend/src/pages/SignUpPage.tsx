import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/authService';

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      const response = await signUp({ firstName, lastName, email, password });
      localStorage.setItem('codenova_token', response.data.accessToken);
      localStorage.setItem('codenova_user', JSON.stringify(response.data.user));
      navigate('/app');
    } catch (err: any) {
      const message = err?.response?.data?.error || err?.message || 'Registration error. Please confirm your details and try again.';
      setError(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,233,0.12),_transparent_20%),linear-gradient(180deg,_#02040b_0%,_#070a10_100%)] px-6 py-10">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-fuchsia-500/10 backdrop-blur-xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300/80">Create your account</p>
          <h1 className="text-4xl font-semibold text-white">Join CodeNova AI</h1>
          <p className="text-slate-400">Sign up instantly and start generating futuristic code for modern applications.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-slate-300">
              First name
              <input value={firstName} onChange={(event) => setFirstName(event.target.value)} type="text" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cosmic" />
            </label>
            <label className="block text-sm text-slate-300">
              Last name
              <input value={lastName} onChange={(event) => setLastName(event.target.value)} type="text" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4 text-white outline-none transition focus:border-cosmic" />
            </label>
          </div>
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
            Create account
          </button>
          <p className="text-center text-sm text-slate-400">
            Already a member? <Link to="/signin" className="text-cosmic hover:text-white">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
