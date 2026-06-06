import { Link, useLocation } from 'react-router-dom';
import { FileCode2, Terminal, Sparkles, History, Settings, DollarSign, Home, LogIn, UserPlus } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', path: '/app', icon: Home },
  { label: 'AI Generator', path: '/app/generator', icon: Sparkles },
  { label: 'Templates', path: '/app/templates', icon: FileCode2 },
  { label: 'History', path: '/app/history', icon: History },
  { label: 'Pricing', path: '/app/pricing', icon: DollarSign },
  { label: 'Settings', path: '/app/settings', icon: Settings },
];

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden xl:flex xl:w-80 xl:flex-col gap-8 p-6 rounded-3xl glow-panel border border-white/10 shadow-glow">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-3">
          <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-cosmic to-electric flex items-center justify-center shadow-lg">
            <Terminal className="text-white" size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">CodeNova AI</p>
            <h2 className="text-xl font-semibold">AI Lab</h2>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-6">Launch premium code generation pipelines with a futuristic workspace built for developers and teams.</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path || (item.path === '/app' && pathname === '/app');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition ${active ? 'bg-slate-800 text-white shadow-glow' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-white/10 bg-slate-950/80 p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Account</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-cosmic">CN</div>
          <div>
            <p className="font-semibold">Neon Architect</p>
            <p className="text-xs text-slate-500">Paid plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
