const topics = [
  {
    title: "Guaranteed Minimum Withdrawal Benefits (GMWB)",
    description:
      "Pricing variable annuity contracts with guaranteed minimum withdrawal features using impulse control formulations, Fourier methods, and semi-Lagrangian discretisation under jump-diffusion and stochastic interest rate models.",
  },
  {
    title: "Numerical Methods for Finance",
    description:
      "Development of convergent, monotone numerical schemes — including ε-monotone Fourier methods and deep neural network approaches — for high-dimensional stochastic optimal control problems arising in financial mathematics.",
  },
  {
    title: "Stochastic Volatility & Multi-factor Models",
    description:
      "Extension of withdrawal benefit pricing frameworks to include stochastic volatility, multiple sub-accounts, and guaranteed lifelong withdrawal benefits under realistic multi-factor dynamics.",
  },
  {
    title: "Economic Scenario Generation",
    description:
      "Applied research in stochastic and regime-switching frameworks for simulating asset returns, yield curves, and macroeconomic variables for use in portfolio stress-testing and optimisation.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Research</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-slate-200 dark:border-slate-700 p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
