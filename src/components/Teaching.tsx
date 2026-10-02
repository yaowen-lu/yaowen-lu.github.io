import { teaching } from "@/data/teaching";

export default function Teaching() {
  return (
    <section id="teaching" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Teaching</h2>
        <div className="space-y-8">
          {teaching.map((item) => (
            <div key={item.role} className="flex flex-col sm:flex-row sm:gap-6">
              <div className="sm:w-40 shrink-0 text-sm text-slate-400 dark:text-slate-500 pt-0.5">
                {item.period}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                <div className="mt-3 space-y-3">
                  {item.courses.map((c) => (
                    <div key={c.title}>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
