import { useTranslations } from "next-intl";
import { personalInfo, skills, projects } from "../../data/portfolio";
import { MapPin, Mail, Github, Cpu, Code2, ArrowUpRight } from "lucide-react";

export default function Home() {
  const tHero = useTranslations("Hero");
  const tNav = useTranslations("Nav");
  const tAbout = useTranslations("About");
  const tSkills = useTranslations("Skills");
  const tProjects = useTranslations("Projects");

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-hidden text-zinc-800">
      {/* --- HEADER (Updated: Dark Background + White Text) --- */}
      <header className="fixed top-0 w-full bg-zinc-900 border-b border-zinc-800 z-50 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
            {personalInfo.name}.
          </span>

          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <div className="hidden sm:flex gap-1 sm:gap-2">
              <a
                href="#about"
                className="hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md transition-all"
              >
                {tNav("about")}
              </a>
              <a
                href="#skills"
                className="hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md transition-all"
              >
                {tNav("skills")}
              </a>
              <a
                href="#projects"
                className="hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md transition-all"
              >
                {tNav("projects")}
              </a>
            </div>

            {/* Language Switcher (Updated colors) */}
            <div className="flex gap-2 border-l border-zinc-700 pl-3 sm:pl-4 ml-2">
              <a
                href="/en"
                className="hover:text-white hover:bg-zinc-800 px-2 py-1 rounded transition-all font-bold"
              >
                EN
              </a>
              <a
                href="/th"
                className="hover:text-white hover:bg-zinc-800 px-2 py-1 rounded transition-all font-bold"
              >
                TH
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 space-y-16 sm:space-y-24 md:space-y-32 relative">
        {/* --- Background Blobs --- */}
        <div className="absolute top-0 -left-20 sm:-left-32 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob -z-10"></div>
        <div className="absolute top-0 -right-20 sm:-right-32 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 -z-10"></div>

        {/* --- HERO SECTION --- */}
        <section className="space-y-6 sm:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium border border-indigo-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {tHero("badge")}
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-300"
            dangerouslySetInnerHTML={{
              __html: tHero
                .raw("title")
                .replace(
                  "<highlight>",
                  '<span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500">'
                )
                .replace("</highlight>", "</span>"),
            }}
          />

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
            {tHero("description", {
              role: personalInfo.role,
              location: personalInfo.location,
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a
              href="mailto:your.email@example.com"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all flex justify-center items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" /> {tHero("contact")}
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-zinc-200 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-50 transition-all flex justify-center items-center shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm sm:text-base"
            >
              {tHero("work")}
            </a>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="scroll-mt-20 sm:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-zinc-200">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />{" "}
            {tAbout("title")}
          </h2>

          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed whitespace-pre-line font-normal">
              {tAbout("description")}
            </p>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <span className="block text-xs font-bold uppercase text-zinc-500 tracking-wider mb-1">
                  {tAbout("locationLabel")}
                </span>
                <span className="font-semibold text-zinc-900">
                  {personalInfo.location}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase text-zinc-500 tracking-wider mb-1">
                  {tAbout("interestsLabel")}
                </span>
                <span className="font-semibold text-zinc-900">
                  {tAbout("interests")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="scroll-mt-20 sm:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-zinc-200">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            {tSkills("title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-zinc-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
              >
                <h3 className="font-bold text-base sm:text-lg mb-4 text-zinc-900 group-hover:text-indigo-700 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 sm:px-3 py-1.5 bg-zinc-100 text-zinc-800 text-xs sm:text-sm rounded-md font-medium border border-zinc-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="scroll-mt-20 sm:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 text-zinc-200">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            {tProjects("title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-indigo-50/0 to-indigo-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 relative gap-2">
                  <h3 className="text-base sm:text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-zinc-400 hover:text-indigo-600 transition-colors flex-shrink-0"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>

                <p className="text-sm sm:text-base text-zinc-700 mb-4 sm:mb-6 flex-grow leading-relaxed relative">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto relative">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-2.5 py-1 bg-indigo-50 text-indigo-800 text-xs font-semibold rounded border border-indigo-100 group-hover:bg-indigo-100 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER (Updated: Dark Background + Light Text) --- */}
      <footer className="border-t border-zinc-800 py-6 sm:py-8 bg-zinc-900 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-400 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              className="hover:text-white transition-colors flex items-center gap-1 font-medium text-zinc-400"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
