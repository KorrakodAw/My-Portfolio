"use client";

import { useTranslations } from "next-intl";
import {
  MapPin,
  Mail,
  Github,
  Cpu,
  Code2,
  ArrowUpRight,
  Calendar,
  Sparkles,
  ImageIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  GraduationCap,
} from "lucide-react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs, // 👈 เพิ่ม Node.js
  SiExpress, // 👈 เพิ่ม Express
  SiPostgresql, // 👈 เพิ่ม PostgreSQL
  SiGit, // 👈 เพิ่ม Git
  SiDocker, // 👈 เพิ่ม Docker
  SiFigma, // 👈 เพิ่ม Figma
  SiPostman, // 👈 เพิ่ม Postman
} from "react-icons/si";
import { useState, useEffect } from "react";

import Aurora from "@/components/Aurora";

export default function Home() {
  const tNav = useTranslations("Nav");
  const tHero = useTranslations("Hero");
  const tAbout = useTranslations("About");
  const tSkills = useTranslations("Skills");
  const tProjects = useTranslations("Projects");
  const tActivities = useTranslations("Activities");
  const tEducation = useTranslations("Education");

  const techLogos = [
    // ─── Frontend ───
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },

    // ─── Backend & Database ───
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },

    // ─── Tools & Others ───
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  ];

  // ==========================================
  // 👇 แก้ไขข้อมูลส่วนตัวของคุณตรงนี้ได้เลยครับ 👇
  // ==========================================
  const myPersonalInfo = {
    name: "Korrakod Anuwan", // ชื่อของคุณ
    role: "Full Stack Developer",
    location: "Lamphun, Thailand",
    email: "your.email@example.com",
    github: "https://github.com/KorrakodAw",
    profileImage: "/profile.png", // ใส่ path รูปโปรไฟล์ของคุณในโฟลเดอร์ public
  };

  const mySkills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "Figma", "Postman"],
    },
  ];

  // 👈 ตรวจสอบให้แน่ใจว่าคุณมีการเรียกใช้งาน hook เช่น const tProjects = useTranslations("projects") ไว้ด้านบนแล้วนะครับ
  const myProjects = [
    {
      id: 1,
      title: tProjects("hrManager.title"),
      description: tProjects("hrManager.description"),
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      link: "https://hr-manager-webpage.vercel.app",
    },
    {
      id: 2,
      title: tProjects("nomnoey.title"),
      description: tProjects("nomnoey.description"),
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://nomnoey-web-page.vercel.app/th",
    },
    {
      id: 3,
      title: tProjects("ploclo.title"),
      description: tProjects("ploclo.description"),
      tech: ["Next.js", "Express", "PostgreSQL"],
      link: "https://ploclo-cms.zercoms.com",
    },
  ];

  // 👈 อย่าลืมเรียกใช้งาน hook คุมภาษา เช่น const tEducation = useTranslations("education")
  const myEducation = [
    {
      id: "nu",
      university: tEducation("edu-nu.university"),
      degree: tEducation("edu-nu.degree"),
      date: tEducation("edu-nu.duration"),
      gpa: tEducation("edu-nu.gpa"),
      logo: "/images/university.png",
    },
    {
      id: "highschool",
      // ดึงข้อมูลผ่าน Key ของสถาบันที่ 2 (edu-highschool)
      university: tEducation("edu-highschool.university"),
      degree: tEducation("edu-highschool.degree"),
      date: tEducation("edu-highschool.duration"),
      gpa: tEducation("edu-highschool.gpa"),
      // 💡 ฝังพาร์ทโลโก้ของสถาบันที่ 2 ไว้ที่ ID นี้โดยตรง (อย่าลืมเตรียมไฟล์ภาพไว้นะครับ)
      logo: "/images/highschool.png",
    },
    {
      id: "middleschool",
      university: tEducation("edu-middleschool.university"),
      degree: tEducation("edu-middleschool.degree"),
      date: tEducation("edu-middleschool.duration"),
      gpa: tEducation("edu-middleschool.gpa"),
      logo: "/images/middleschool.png",
    },
  ];

  const myActivities = [
    {
      id: "act-gear-production",
      title: tActivities("nuProduction.title"),
      date: tActivities("nuProduction.date"),
      description: tActivities("nuProduction.description"),
      images: [
        "/images/gearnu1.jpg", // 👈 พาร์ทรูปภาพประกาศความยินดีรูปนี้
      ],
    },
    {
      id: "act-nu-hackathon",
      title: tActivities("nuHackathon.title"),
      date: tActivities("nuHackathon.date"),
      description: tActivities("nuHackathon.description"),
      images: ["/images/hackathon1.jpg", "/images/hackathon2.jpg"],
    },
  ];
  // ==========================================

  // 👈 วางไว้ด้านบนสุดในฟังก์ชันหลักของ Page
  const [activePhotoId, setActivePhotoId] = useState<string | number | null>(
    null,
  );
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // ปุ่มจะแสดงขึ้นมาเมื่อผู้ใช้เลื่อนหน้าจอลงมาเกิน 400 พิกเซล
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // เลื่อนขึ้นไปบนสุดแบบนุ่มนวล ไม่กระตุกตัดฉับ
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-indigo-600 selection:text-white relative">
      {/* 👇 [แก้ไข] เปลี่ยนมาใช้ inset-0 w-full h-full เพื่อบังคับกางแสง Aurora ถาวร ไม่ให้หายไป 👇 */}
      <div className="fixed inset-0 z-50 w-full h-full opacity-25 mix-blend-screen pointer-events-none overflow-hidden">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* --- HEADER NAVIGATION (Dark Glassmorphism) --- */}
      <header className="fixed top-0 left-0 w-full bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900 z-50 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {myPersonalInfo.name}.
          </span>
          <nav className="flex items-center gap-1 sm:gap-4 text-sm font-medium text-zinc-400">
            <div className="hidden md:flex gap-1">
              <a
                href="#about"
                className="hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-lg transition-all"
              >
                {tNav("about")}
              </a>
              <a
                href="#skills"
                className="hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-lg transition-all"
              >
                {tNav("skills")}
              </a>
              <a
                href="#projects"
                className="hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-lg transition-all"
              >
                {tNav("projects")}
              </a>
              <a
                href="#activities"
                className="hover:text-white hover:bg-zinc-900 px-3 py-2 rounded-lg transition-all"
              >
                {tNav("activities")}
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex gap-1 border-l border-zinc-800 pl-4 ml-2">
              <a
                href="/en"
                className="hover:bg-zinc-900 hover:text-white px-2.5 py-1 rounded-md text-xs font-bold transition-all"
              >
                EN
              </a>
              <a
                href="/th"
                className="hover:bg-zinc-900 hover:text-white px-2.5 py-1 rounded-md text-xs font-bold transition-all"
              >
                TH
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-24 sm:space-y-32 relative">
        {/* Background Ambient Lights (Neon Glow Effect) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 from-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none" />

        {/* --- 1. HERO SECTION --- */}
        <section className="relative flex flex-col-reverse sm:flex-row items-center justify-between gap-8 pt-4 sm:pt-8 min-h-[60vh] sm:min-h-[50vh]">
          {/* Left Side: Text Details */}
          <div className="space-y-6 text-center sm:text-left flex-1 relative z-10 transition-all duration-700 transform translate-y-0 opacity-100">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              {tHero("badge")}
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight"
              dangerouslySetInnerHTML={{
                __html: tHero
                  .raw("title")
                  .replace(
                    "<highlight>",
                    '<span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">',
                  )
                  .replace("</highlight>", "</span>"),
              }}
            />

            <p className="text-lg sm:text-xl text-zinc-300 max-w-xl font-medium leading-relaxed">
              {tHero("description", {
                role: myPersonalInfo.role,
                location: myPersonalInfo.location,
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start pt-2">
              <a
                href={`mailto:${myPersonalInfo.email}`}
                className="px-6 py-3.5 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 text-sm"
              >
                <Mail className="w-4 h-4" /> {tHero("contact")}
              </a>
              <a
                href="#projects"
                className="px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center shadow-sm hover:-translate-y-0.5 text-sm"
              >
                {tHero("work")}
              </a>
            </div>
          </div>

          {/* Right Side: คลีนเหลือแค่รูปภาพทรงกลม ไม่มีเส้นขอบกวนใจ */}
          <div className="shrink-0 w-90 h-90 relative group z-10">
            {/* 👇 เพิ่มเลเยอร์แสงเรืองรองจาง ๆ ไว้ด้านหลัง เพื่อสร้าง Contrast กับพื้นหลัง Aurora 👇 */}
            <div className="absolute inset-2 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="w-full h-full rounded-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={myPersonalInfo.profileImage}
                alt={myPersonalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* --- 2. ABOUT ME SECTION --- */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 text-white border-b border-zinc-900 pb-3">
            <MapPin className="w-5 h-5 text-indigo-400" /> {tAbout("title")}
          </h2>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-md">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
              {tAbout("description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-zinc-800 text-sm">
              <div>
                <span className="block font-bold text-zinc-500 uppercase tracking-wider text-xs mb-1">
                  {tAbout("locationLabel")}
                </span>
                <span className="font-semibold text-zinc-200">
                  {myPersonalInfo.location}
                </span>
              </div>
              <div>
                <span className="block font-bold text-zinc-500 uppercase tracking-wider text-xs mb-1">
                  {tAbout("interestsLabel")}
                </span>
                <span className="font-semibold text-zinc-200">
                  {tAbout("interests")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="Education" className="scroll-mt-24">
          {/* หัวข้อเซกชันประวัติการศึกษา */}
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 text-white border-b border-zinc-900 pb-3">
            <GraduationCap className="w-5 h-5 text-indigo-400" />{" "}
            {tEducation("title")}
          </h2>

          {/* โครงสร้างแกน Timeline */}
          <div className="relative border-l-2 border-zinc-800 ml-3 pl-6 space-y-8">
            {myEducation.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* จุดวงกลมเรืองแสงสีกรมท่า-คราม ล็อกตำแหน่งตรงแกนเส้นเวลา */}
                <div className="absolute -left-7.75 top-1.5 bg-zinc-950 border-2 border-indigo-400 w-4 h-4 rounded-full group-hover:bg-indigo-400 transition-colors duration-200 shadow-[0_0_8px_rgba(129,140,248,0.5)] z-10" />

                {/* 📦 [UPDATED UI] ส่วนแสดงโลโก้คู่กับเนื้อหาประวัติการศึกษา */}
                {/* ส่วนแสดงโลโก้คู่กับเนื้อหาประวัติการศึกษา */}
                {/* 📱💻 ทุกหน้าจอ (รวมถึงมือถือ): ใช้ flex-row เพื่อล็อกให้ โลโก้อยู่ซ้าย และ ข้อความอยู่ทางขวา เสมอ ไม่ตกไปอยู่ด้านล่าง */}
                <div className="flex flex-row items-start gap-4">
                  {/* 🎓 กล่องรูปภาพโลโก้: อยู่ทางซ้ายมือเสมอตลอดเวลาทุกขนาดหน้าจอ */}
                  {edu.logo && (
                    <div className="w-24 h-24 sm:w-24 sm:h-24 shrink-0 rounded-xl  bg-amber-50 p-2 flex items-center justify-center overflow-hidden shadow-md group-hover:border-zinc-700 transition-colors duration-300">
                      <img
                        src={edu.logo}
                        alt={`${edu.university} logo`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* 📝 กล่องข้อความรายละเอียดข้อมูลการศึกษา: อยู่ทางขวาของโลโก้เสมอ ไม่ตกไปอยู่ข้างล่างแล้ว */}
                  <div className="flex-1 min-w-0">
                    {/* ชื่อมหาวิทยาลัย และ ช่วงปีที่ศึกษา */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5 mb-1.5">
                      <h3 className="font-bold text-base sm:text-lg text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300 tracking-wide break-words">
                        {edu.university}
                      </h3>
                      <span className="text-xs font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800/60 px-2.5 py-1 rounded-full w-fit shrink-0 select-none">
                        {edu.date}
                      </span>
                    </div>

                    {/* วุฒิการศึกษาและสาขา */}
                    <p className="text-sm sm:text-base text-zinc-400 font-medium mb-3 tracking-wide">
                      {edu.degree}
                    </p>

                    {/* เกรดเฉลี่ยสะสม (GPAX Badge) */}
                    {/* <div className="inline-flex items-center gap-1.5 text-xs bg-indigo-500/5 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-xl font-medium shadow-sm select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                      {edu.gpa}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. SKILLS SECTION --- */}
        <section id="skills" className="scroll-mt-24">
          {/* Header ส่วนหัวของ Skills */}
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 text-white border-b border-zinc-900 pb-3">
            <Cpu className="w-5 h-5 text-indigo-400" /> {tSkills("title")}
          </h2>

          {/* ส่วนการ์ดแสดงกลุ่มสกิล (Grid 3 คอลัมน์) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mySkills.map((group) => (
              <div
                key={group.category}
                className="group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-900 rounded-2xl p-6 shadow-lg hover:border-zinc-800/80 hover:bg-zinc-900/60 transition-all duration-300"
              >
                {/* เอฟเฟกต์แสงสะท้อนจาง ๆ ด้านหลังการ์ดเวลา Hover (ทำให้มิติตื้นลึกดูพรีเมียมขึ้น) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* หัวข้อกลุ่มสกิล: จะเปลี่ยนเป็นสีขาวสว่างและมีความสมูทเวลาเมาส์ชี้ */}
                <h3 className="font-bold text-zinc-300 group-hover:text-white mb-4 text-base tracking-wide transition-colors duration-300 flex items-center justify-between">
                  {group.category}
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-indigo-400 transition-colors duration-300" />
                </h3>

                {/* รายการสกิลย่อยภายในหมวดหมู่ */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-zinc-950/80 text-zinc-400 border border-zinc-800/60 text-xs px-3 py-1.5 rounded-xl font-medium tracking-wide shadow-sm hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-200 hover:scale-[1.03] cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 👇 [ปรับปรุง UI] กล่องครอบ LogoLoop: จัดให้โลโก้อยู่กึ่งกลางแนวตั้ง-แนวนอนสวยงาม 👇 */}
          <div
            className="w-full relative overflow-hidden mt-10 rounded-2xl  bg-zinc-900/10 flex items-center justify-center"
            style={{
              height: "100px", // กระชับพื้นที่ความสูงลงมาเล็กน้อยให้ดูโมเดิร์น ไม่ โย่ง เกินไป
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={40}
              direction="right"
              logoHeight={50}
              gap={50}
              hoverSpeed={10}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#09090b" // ใช้สี Zinc-950 เพื่อให้ขอบเบลอกลืนหายไปกับความมืด Aurora ด้านหลัง
              ariaLabel="Technology tools"
            />
          </div>
        </section>

        {/* --- 4. PROJECTS SECTION --- */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 text-white border-b border-zinc-900 pb-3">
            <Code2 className="w-5 h-5 text-indigo-400" /> {tProjects("title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {myProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-indigo-400 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. ACTIVITIES SECTION --- */}
        <section id="activities" className="scroll-mt-24">
          {/* หัวข้อกิจกรรม */}
          <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2.5 text-white border-b border-zinc-900 pb-3">
            <Calendar className="w-5 h-5 text-indigo-400" />{" "}
            {tActivities("title")}
          </h2>

          {/* แกน Timeline */}
          <div className="relative border-l-2 border-zinc-800 ml-3 pl-6 space-y-8">
            {myActivities.map((act) => {
              const isPhotosOpen = activePhotoId === act.id;

              // ตรวจสอบเช็คอาร์เรย์รูปภาพให้เสถียร
              const imagesArray = Array.isArray(act.images)
                ? act.images
                : act.images
                  ? [act.images]
                  : [];

              return (
                <div key={act.id} className="relative group">
                  {/* 📍 [FIXED UI] จุดวงกลม Timeline: ใช้ -left-[31px] เพื่อให้อยู่กึ่งกลางเส้นแกนซ้ายพอดีเป๊ะ */}
                  <div className="absolute -left-[31px] top-1.5 bg-zinc-950 border-2 border-indigo-400 w-4 h-4 rounded-full group-hover:bg-indigo-400 transition-colors duration-200 shadow-[0_0_8px_rgba(129,140,248,0.5)] z-10" />

                  {/* ชื่อและวันที่ */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-indigo-400 transition-colors">
                      {act.title}
                    </h3>
                    <span className="text-xs font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-full w-fit shrink-0">
                      {act.date}
                    </span>
                  </div>

                  {/* คำอธิบาย */}
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-3">
                    {act.description}
                  </p>

                  {/* ปุ่มกดเปิดแกลเลอรีรูปภาพ */}
                  {imagesArray.length > 0 && (
                    <div className="pt-1">
                      <button
                        onClick={() => {
                          setActivePhotoId(isPhotosOpen ? null : act.id);
                          if (typeof setCurrentImgIndex === "function")
                            setCurrentImgIndex(0);
                        }}
                        className={`inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl border select-none transition-all duration-300 active:scale-95 ${
                          isPhotosOpen
                            ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.15)]"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-800/50 hover:shadow-sm"
                        }`}
                      >
                        {/* ไอคอนรูปภาพ: เติมแอนิเมชันให้เอียงและขยับเบา ๆ เวลาเมาส์ชี้กลุ่มปุ่ม */}
                        <ImageIcon
                          className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-6 ${isPhotosOpen ? "text-indigo-400" : ""}`}
                        />

                        {/* ข้อความแสดงผล */}
                        <span className="font-medium tracking-wide">
                          {isPhotosOpen
                            ? "Hide Photos"
                            : `View Photos (${imagesArray.length})`}
                        </span>

                        {/* ลูกศรชี้ลง: หมุน 180 องศาแบบนุ่มนวลเมื่อเปิด และเพิ่มระยะห่างช่องไฟเล็กน้อย */}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isPhotosOpen
                              ? "rotate-180 text-indigo-400"
                              : "text-zinc-500"
                          }`}
                        />
                      </button>

                      {/* 🖼️ [FIXED UI] ลบชั้นที่ซ้อนกันออก เหลือกล่องอนิเมชัน Smooth Slide ชั้นเดียวคลีน ๆ */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                          isPhotosOpen
                            ? "grid-rows-[1fr] mt-4 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden min-h-0">
                          {/* กล่อง Grid แสดงรูปภาพทั้งหมดพร้อมกันกางออก 2 คอลัมน์บนจอใหญ่ */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl bg-zinc-900/20 p-3 rounded-2xl border border-zinc-900/60 shadow-inner">
                            {imagesArray.map((imgUrl, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 group/img aspect-[4/3] w-full"
                              >
                                {/* 🖼️ [FIXED UI] ปรับให้รูปขยายเต็มพื้นที่กรอบสี่เหลี่ยมสัดส่วน 4:3 เท่ากันทุกใบ ไม่ยืดไม่เบี้ยว */}
                                <img
                                  src={imgUrl}
                                  alt={`${act.title} gallery photo ${imgIndex + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 🚀 ปุ่ม Scroll to Top แบบ Responsive & Dynamic Interaction */}
        {/* 🚀 ปุ่ม Scroll to Top เวอร์ชันเส้นแสงวิ่งรอบขอบแบบ Responsive */}
        <button
          onClick={scrollToTop}
          className={`fixed z-50 rounded-xl flex items-center justify-center p-[2px] overflow-hidden select-none shadow-2xl transition-all duration-500 active:scale-95 group/topbtn
    /* 📱 Responsive Space: บนมือถือกระชับพื้นที่ จอคอมขยับสเปซสวยงาม */
    bottom-6 right-4 sm:bottom-16 sm:right-6
    ${
      showTopButton
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
          aria-label="Scroll to top"
        >
          {/* ⚡ 1. เลเยอร์เส้นแสงวิ่งวนรอบขอบด้านหลัง (Border Light Loop) */}
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#818cf8_0%,#c084fc_50%,#818cf8_100%)] opacity-40 group-hover/topbtn:opacity-100 group-hover/topbtn:animate-[spin_2s_linear_infinite] transition-all duration-500" />

          {/* 🔒 2. กล่องเนื้อหาด้านใน (ตัวกั้นสีมืดทับเส้นแสง เพื่อให้เหลือเฉพาะขอบที่เรืองแสง) */}
          <div
            className="w-full h-full rounded-[10px] bg-zinc-950/95 backdrop-blur-md text-zinc-400 group-hover/topbtn:text-white transition-colors duration-300
    /* 📱 Responsive Sizing: บนมือถือขนาดกะทัดรัด จอคอมขนาดปกติ */
    p-2.5 sm:p-3"
          >
            {/* ไอคอนลูกศรขยับขึ้นลงเบา ๆ */}
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 animate-[bounce_3s_infinite]" />
          </div>
        </button>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-sm text-zinc-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {myPersonalInfo.name}. All rights
            reserved.
          </p>
          <a
            href={myPersonalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white font-medium transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
