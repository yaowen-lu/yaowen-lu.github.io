import { talks } from "@/data/talks";

export default function Talks() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Talks & Presentations</h1>
        <ul className="space-y-5">
          {talks.map((t, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:gap-6">
              <span className="sm:w-12 shrink-0 text-sm font-mono text-slate-400 dark:text-slate-500">
                {t.year}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{t.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.event} &middot; {t.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
