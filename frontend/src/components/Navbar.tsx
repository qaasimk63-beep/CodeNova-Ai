import { Link } from 'react-router-dom';
import { Search, Moon, SunMedium } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../hooks/useTheme';

function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-glow backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="rounded-3xl bg-gradient-to-br from-electric to-neon p-3 text-slate-950 shadow-xl">
          <Search size={18} />
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-[0.28em]">Quick search</p>
          <p className="font-semibold">Find insights, templates, or AI prompts</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 transition hover:bg-slate-800"
        >
          {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
        <Link to="/signin" className="rounded-2xl bg-gradient-to-r from-cosmic to-electric px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
          Sign out
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
