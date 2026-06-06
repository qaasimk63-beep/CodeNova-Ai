import { BarChart3, Code2, ClipboardList, Rocket } from 'lucide-react';

const stats = [
  { label: 'Projects generated', value: '128', icon: Rocket },
  { label: 'Saved templates', value: '24', icon: ClipboardList },
  { label: 'Languages supported', value: '42', icon: Code2 },
  { label: 'Active sessions', value: '11', icon: BarChart3 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/70">Workspace Overview</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Your AI command center</h2>
            <p className="mt-4 text-slate-400">Monitor generated code, save mission-critical projects, and keep every prompt history secure.</p>
          </div>
          <div className="inline-flex rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-200 shadow-xl">
            Premium tier active • Next billing 14 days
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow backdrop-blur-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cosmic/10 text-cosmic">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">{stat.value}</h3>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr,_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">AI Pulse</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Next-level prompt intelligence</h3>
            </div>
            <div className="rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200">Live stats</div>
          </div>
          <div className="mt-8 space-y-4 text-slate-300">
            <p>Generate clean architecture snippets, build scaffolded frontend components, or wire backend APIs in one click.</p>
            <p className="text-sm text-slate-400">Your saved history and templates are available in the navigation panel for repeatable productivity.</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#111827]/90 to-slate-950/90 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Latest prompts</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-300">
              <p className="font-semibold">Build a React dashboard with charting and authentication.</p>
              <p className="mt-2 text-sm text-slate-500">JavaScript • React • Tailwind</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-300">
              <p className="font-semibold">Create a Node API with JWT and MongoDB integration.</p>
              <p className="mt-2 text-sm text-slate-500">Node.js • Express • MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
