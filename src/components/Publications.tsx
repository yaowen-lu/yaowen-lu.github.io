import { publications } from "@/data/publications";

export default function Publications() {
  const journals = publications.filter((p) => p.status === "journal");
  const preprints = publications.filter((p) => p.status === "preprint");

  return (
    <section id="publications" className="py-16 px-6 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Publications</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Journal Articles
            </h3>
            <ol className="space-y-5 list-none">
              {journals.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 text-slate-300 dark:text-slate-600 font-mono text-sm shrink-0">
                    [{journals.length - i}]
                  </span>
                  <div>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {p.title}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-900 dark:text-white">{p.title}</span>
                    )}
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {p.authors} &mdash; <em>{p.venue}</em>, {p.year}
                    </p>
                    {p.doi && (
                      <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500 font-mono">
                        doi:{p.doi}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Preprints
            </h3>
            <ol className="space-y-5 list-none">
              {preprints.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 text-slate-300 dark:text-slate-600 font-mono text-sm shrink-0">
                    [{preprints.length - i}]
                  </span>
                  <div>
                    <span className="font-medium text-slate-900 dark:text-white">{p.title}</span>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {p.authors} &mdash; <em>{p.venue}</em>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
