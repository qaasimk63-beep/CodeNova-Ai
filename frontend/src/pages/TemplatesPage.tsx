export default function TemplatesPage() {
  const templates = [
    { title: 'Authentication API', subtitle: 'Secure login and registration endpoints for backend services.' },
    { title: 'AI Prompt Shell', subtitle: 'Reusable prompt template for multi-language code generation.' },
    { title: 'Responsive Dashboard', subtitle: 'Modern dashboard layout with analytics cards and chart placeholders.' },
    { title: 'OpenRouter Integration', subtitle: 'Ready-to-use API integration for AI completion workflows.' },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Smart templates</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Ready-to-use AI prompt recipes</h2>
          </div>
          <button type="button" className="rounded-3xl bg-cosmic px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
            Create custom template
          </button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {templates.map((template) => (
            <article key={template.title} className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 transition hover:border-cosmic hover:bg-slate-950/95">
              <h3 className="text-xl font-semibold text-white">{template.title}</h3>
              <p className="mt-3 text-slate-400">{template.subtitle}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
