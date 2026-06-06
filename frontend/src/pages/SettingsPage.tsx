import ThemeToggle from '../components/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../hooks/useTheme';

export default function SettingsPage() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Product settings</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Fine-tune your experience</h2>
          <p className="mt-3 text-slate-400">Manage preferences for theme, notifications, and integrations.</p>
        </div>
        <div className="mt-8 space-y-5 rounded-3xl border border-white/10 bg-slate-900/90 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Appearance</p>
              <p className="text-sm text-slate-500">Toggle the interface style across the workspace.</p>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </section>
    </div>
  );
}
