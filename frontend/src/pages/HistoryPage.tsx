const historyItems = [
  { prompt: 'Build a Next.js blog with SEO and dark mode.', date: 'Today', language: 'TypeScript' },
  { prompt: 'Create a RESTful API with JWT auth and MongoDB.', date: 'Yesterday', language: 'Node.js' },
  { prompt: 'Design a futuristic landing page with glassmorphism.', date: '2 days ago', language: 'HTML/CSS' },
];

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Conversation history</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Recent AI sessions</h2>
          </div>
          <button type="button" className="rounded-3xl border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/5">
            Export history
          </button>
        </div>
        <div className="mt-8 space-y-4">
          {historyItems.map((item) => (
            <div key={item.prompt} className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 transition hover:border-cosmic">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-semibold text-white">{item.prompt}</h3>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">{item.date}</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">Language: {item.language}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
