"use client";

import { useState } from "react";
import { publications, type Publication } from "@/data/publications";

function Badge({ status }: { status: Publication["status"] }) {
  return status === "journal" ? (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
      Published
    </span>
  ) : (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
      Preprint
    </span>
  );
}

function PubCard({ pub, index }: { pub: Publication; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`rounded-lg border p-5 transition-colors ${
      pub.featured
        ? "border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/60"
        : "border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900"
    }`}>
      <div className="flex gap-3 items-start">
        <span className="mt-0.5 text-slate-300 dark:text-slate-600 font-mono text-sm shrink-0 w-6 text-right">
          [{index + 1}]
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge status={pub.status} />
            {pub.featured && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                Featured
              </span>
            )}
          </div>

          {pub.url ? (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug"
            >
              {pub.title}
            </a>
          ) : (
            <span className="font-medium text-slate-900 dark:text-white leading-snug">{pub.title}</span>
          )}

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{pub.authors}</p>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            <em>{pub.venue}</em>{pub.status === "journal" ? `, ${pub.year}` : ""}
          </p>
          {pub.doi && (
            <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500 font-mono">doi:{pub.doi}</p>
          )}

          {pub.abstract && (
            <div className="mt-2">
              <button
                onClick={() => setOpen((v) => !v)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center gap-1"
              >
                <svg className={`w-3 h-3 transition-transform ${open ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {open ? "Hide abstract" : "Show abstract"}
              </button>
              {open && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                  {pub.abstract}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Publications() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Publications</h1>
        <ul className="space-y-3">
          {publications.map((p, i) => (
            <PubCard key={i} pub={p} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
