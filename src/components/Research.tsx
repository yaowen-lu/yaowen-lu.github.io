import { researchProjects } from "@/data/research";
import { talks } from "@/data/talks";

export default function Research() {
  const current = researchProjects.filter((r) => r.status === "current");
  const past = researchProjects.filter((r) => r.status === "past");

  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* — Research — */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Research</h1>

          <div className="space-y-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Current Focus
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {current.map((r) => (
                  <div key={r.title} className="rounded-lg border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">{r.title}</h3>
                      <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">{r.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{r.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.methods.map((m) => (
                        <span key={m} className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                Past Research
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {past.map((r) => (
                  <div key={r.title} className="rounded-lg border border-slate-200 dark:border-slate-700/60 p-5 bg-slate-50/50 dark:bg-slate-800/30">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-snug">{r.title}</h3>
                      <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">{r.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{r.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.methods.map((m) => (
                        <span key={m} className="px-2 py-0.5 rounded-full text-xs bg-slate-200/70 dark:bg-slate-700/50 text-slate-500 dark:text-slate-500">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* — Talks — */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Talks & Presentations</h2>
          <ul className="space-y-5">
            {talks.map((t, i) => (
              <li key={i} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="sm:w-12 shrink-0 text-sm font-mono text-slate-400 dark:text-slate-500">{t.year}</span>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{t.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.event} &middot; {t.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
