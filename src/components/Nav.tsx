"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Teaching", href: "#teaching" },
  { label: "Talks", href: "#talks" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
          Yaowen Lu
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-600 dark:text-slate-300"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-slate-900 dark:hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
