const links = [
  {
    label: "Email",
    value: "yaowenlu@outlook.com",
    href: "mailto:yaowenlu@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/yaowenlu",
    href: "https://github.com/yaowenlu",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yaowenlu",
    href: "https://linkedin.com/in/yaowenlu",
  },
];

export default function Contact() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Contact</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
          Feel free to reach out about research, teaching, or industry collaborations.
        </p>
        <ul className="space-y-3">
          {links.map((l) => (
            <li key={l.label} className="flex items-center gap-4 text-sm">
              <span className="w-16 text-slate-400 dark:text-slate-500">{l.label}</span>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {l.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
