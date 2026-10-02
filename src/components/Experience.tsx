import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={`${item.role}-${item.org}`} className="flex flex-col sm:flex-row sm:gap-6">
              <div className="sm:w-40 shrink-0 text-sm text-slate-400 dark:text-slate-500 pt-0.5">
                {item.period}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.org} &middot; {item.location}
                </p>
                <ul className="mt-2 space-y-1">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
