import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Teaching from "@/components/Teaching";
import Talks from "@/components/Talks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Publications />
      <Research />
      <Experience />
      <Teaching />
      <Talks />
      <Contact />
      <footer className="py-8 px-6 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-600">
        © {new Date().getFullYear()} Yaowen Lu
      </footer>
    </main>
  );
}
