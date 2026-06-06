import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Layers, Bolt } from 'lucide-react';

const features = [
  { title: 'AI Code Engine', description: 'Generate production-ready code across frameworks, languages, and APIs.', icon: Sparkles },
  { title: 'Secure Workflows', description: 'Built-in authentication, saved history, and professional project exports.', icon: ShieldCheck },
  { title: 'Premium UI', description: 'Cyberpunk visuals with glassmorphism, neon accents, and advanced motion.', icon: Bolt },
  { title: 'Team Ready', description: 'Scalable dashboard, conversation history, and reusable templates.', icon: Layers },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_22%),linear-gradient(180deg,_#02040b_0%,_#070a10_100%)] px-6 py-10 text-slate-100">
      <header className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20">
              <Sparkles size={16} /> Futuristic AI code assistant
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Build the future of software with <span className="text-cosmic">CodeNova AI</span>.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Generate high-quality code across any language and framework with secure auth, premium workspace design, and lightning-fast AI workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="inline-flex items-center justify-center rounded-3xl bg-cosmic px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
                Start building
              </Link>
              <Link to="/app" className="inline-flex items-center justify-center rounded-3xl border border-white/10 px-6 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                Explore dashboard
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow">
            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cosmic hover:bg-slate-900/95">
                    <div className="flex items-center gap-4">
                      <div className="rounded-3xl bg-cosmic/10 p-3 text-cosmic">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
