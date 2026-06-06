import { Moon, SunMedium } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/95 px-4 py-2 text-sm text-slate-200 shadow-glow transition hover:bg-slate-800"
    >
      {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
      {isDark ? 'Switch to light' : 'Switch to dark'}
    </button>
  );
}
