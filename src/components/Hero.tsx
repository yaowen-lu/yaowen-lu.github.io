import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">
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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:yaowenlu@outlook.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              yaowenlu@outlook.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
