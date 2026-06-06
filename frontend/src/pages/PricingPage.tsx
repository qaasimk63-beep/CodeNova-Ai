export default function PricingPage() {
  const tiers = [
    { name: 'Starter', price: '$0', description: 'Essential tools for early experimentation.', features: ['5 AI generations / day', 'Community templates', 'Basic support'] },
    { name: 'Pro', price: '$29', description: 'Professional workflows with saved history and export.', features: ['Unlimited generations', 'Project saving', 'Premium templates'] },
    { name: 'Enterprise', price: '$99', description: 'Team-ready AI platform with advanced integrations.', features: ['Team management', 'Custom API access', 'Priority support'] },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Pricing plans</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A plan for every team size</h2>
          </div>
          <p className="mt-4 max-w-xl text-slate-400 md:mt-0">Choose the tier that matches your ambition, from private prototypes to enterprise AI products.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-3xl border border-white/10 bg-slate-900/90 p-7 shadow-glow transition hover:border-cosmic">
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-4xl font-semibold text-cosmic">{tier.price}</p>
              <p className="mt-3 text-slate-400">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button type="button" className="mt-8 w-full rounded-3xl bg-cosmic px-5 py-3 font-semibold text-slate-950 transition hover:opacity-95">
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
