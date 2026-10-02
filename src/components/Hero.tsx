import Image from "next/image";
import { education } from "@/data/education";

const stats = [
  { label: "Journal articles", value: "2" },
  { label: "Preprints", value: "2" },
  { label: "Conference talks", value: "4" },
  { label: "Industry experience", value: "10+ yrs" },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C++", "MATLAB", "SQL / NoSQL"],
  },
  {
    label: "Libraries & tools",
    items: ["NumPy", "SciPy", "pandas", "scikit-learn", "CVXPY", "Plotly", "Databricks"],
  },
  {
    label: "Certifications",
    items: ["CFA Charterholder", "TensorFlow Developer"],
  },
];

const contact = [
  { label: "Email", value: "yaowenlu@outlook.com", href: "mailto:yaowenlu@outlook.com" },
  { label: "GitHub", value: "github.com/yaowenlu", href: "https://github.com/yaowenlu" },
  { label: "LinkedIn", value: "linkedin.com/in/yaowenlu", href: "https://linkedin.com/in/yaowenlu" },
];

export default function Hero() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* — Bio — */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="shrink-0 w-36 h-36 rounded-full overflow-hidden">
            <Image
              src="/linkedin_image_yaowen.png"
              alt="Yaowen Lu"
              width={144}
              height={144}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Yaowen Lu, PhD, CFA
            </h1>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Adjunct Lecturer · The University of Queensland &nbsp;|&nbsp; Quantitative Developer · Jacobi Strategies
            </p>
            <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Yaowen Lu is an Adjunct Lecturer at the University of Queensland&rsquo;s School of Mathematics and
              Physics and a Quantitative Developer at Jacobi Strategies, where he builds economic scenario
              generation models and multi-asset portfolio optimisation tools. He holds a PhD in Computational
              Finance from UQ, with research on numerical methods for guaranteed minimum withdrawal benefits
              published in <em>Numerical Methods for Partial Differential Equations</em> and the{" "}
              <em>SIAM Journal on Scientific Computing</em>. With over a decade of industry experience across
              investment engineering and capital management, he bridges rigorous mathematical research with
              practical financial applications.
            </p>
          </div>
        </div>

        {/* — Quick stats — */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 text-center"
            >
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* — Education — */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={`${e.degree}-${e.institution}`} className="flex flex-col sm:flex-row sm:gap-6">
                <div className="sm:w-44 shrink-0 text-sm text-slate-400 dark:text-slate-500 pt-0.5">
                  {e.period}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {e.degree} · <span className="italic font-normal">{e.field}</span>
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {e.institution} &middot; {e.location}
                  </p>
                  {e.thesis && (
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      Thesis:&nbsp;
                      <a
                        href={e.thesis.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2"
                      >
                        {e.thesis.title}
                      </a>
                    </p>
                  )}
                  {e.notes && (
                    <ul className="mt-1 space-y-0.5">
                      {e.notes.map((n, i) => (
                        <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — Skills — */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">
            Skills & Tools
          </h2>
          <div className="space-y-4">
            {skillGroups.map((g) => (
              <div key={g.label} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="sm:w-44 shrink-0 text-sm text-slate-400 dark:text-slate-500 pt-0.5">
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* — Contact — */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">
            Contact
          </h2>
          <ul className="space-y-2.5">
            {contact.map((c) => (
              <li key={c.label} className="flex items-center gap-4 text-sm">
                <span className="w-16 text-slate-400 dark:text-slate-500">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
