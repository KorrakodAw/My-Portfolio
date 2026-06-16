"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl"; // 👈 อิมพอร์ต Hook แปลภาษาของคุณเข้ามา (ตัวอย่างเป็นของ next-intl)

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const tProjects = useTranslations("Projects");

  const projectData = [
    {
      id: 1,
      title: "Hr Manager Webpage",
      description: tProjects("hrManager.description"),
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      link: "https://hr-manager-webpage.vercel.app",
      image: [
        "/images/hr-manager/1.png",
        "/images/hr-manager/2.png",
        "/images/hr-manager/3.png",
        "/images/hr-manager/4.png",
      ],
    },
    {
      id: 2,
      title: "Nomnoey Webpage",
      description: tProjects("nomnoey.description"),
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://nomnoey-web-page.vercel.app/th",
      image: ["/images/nomnoey/1.png", "/images/nomnoey/2.png"],
    },
    {
      id: 3,
      title: "PLOCLO Management System",
      description: tProjects("ploclo.description"),
      tech: ["Next.js", "Express", "PostgreSQL"],
      link: "https://ploclo-cms.zercoms.com",
      image: [
        "/images/ploclo/1.png",
        "/images/ploclo/2.png",
        "/images/ploclo/3.png",
      ],
    },
  ];

  const project = projectData.find((p) => String(p.id) === String(params.id));

  // ─── ⚡ ระบบ Auto-Play Slider State ───
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imagesArray = project
    ? Array.isArray(project.image)
      ? project.image
      : project.image // ถ้าดึงมาเป็น string รูปเดี่ยว (หรือเผื่อคีย์เก่าหลงเหลือ)
        ? [project.image]
        : (project as any).image // เผื่อกรณีบาง ID ยังเขียนคีย์ image แบบไม่มี s
          ? [(project as any).image]
          : []
    : [];

  useEffect(() => {
    // ถ้ามีรูปภาพมากกว่า 1 ใบ และผู้ใช้ไม่ได้ Hover เมาส์อยู่ ให้รันฟังก์ชันเปลี่ยนรูปอัตโนมัติ
    if (imagesArray.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
      }, 3000); // ⏱️ ตั้งเวลาเปลี่ยนรูปทุก ๆ 3 วินาที (ปรับเปลี่ยนตัวเลขได้ครับ)

      return () => clearInterval(interval);
    }
  }, [imagesArray.length, isHovered]);

  // ฟังก์ชันกดเปลี่ยนรูปเองแบบ Manual
  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % imagesArray.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex(
      (prev) => (prev - 1 + imagesArray.length) % imagesArray.length,
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-xl font-bold mb-4">Project not found</h1>
        <button
          onClick={() => router.back()}
          className="text-sm text-indigo-400 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* ปุ่มย้อนกลับ */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {tProjects("backToPort")}
        </button>

        {/* 🖼️ [UPDATED] กล่องสไลเดอร์รูปภาพอัจฉริยะ (Auto-Play Carousel) */}
        {imagesArray.length > 0 && (
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900/30 mb-8 shadow-2xl group/slider select-none"
            onMouseEnter={() => setIsHovered(true)} // ⏸️ เมาส์ชี้เข้า -> หยุดเล่นออโต้
            onMouseLeave={() => setIsHovered(false)} // ▶️ เมาส์ออก -> เล่นออโต้ต่อ
          >
            {/* ตัวรูปภาพสไลด์เปลี่ยนแผ่นแบบนุ่มนวล (Fade Transition) */}
            <img
              src={imagesArray[currentIndex]}
              alt={`${project.title} preview ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />

            {/* ปุ่มกดลูกศร ซ้าย-ขวา (จะโผล่มาเฉพาะตอนเมาส์ Hover บนคอม หรือโชว์ถาวรบนมือถือ) */}
            {imagesArray.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800 text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-zinc-950 hover:text-indigo-400 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-zinc-800 text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-zinc-950 hover:text-indigo-400 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* จุดกลม ๆ ด้านล่างบอกจำนวนและลำดับรูปภาพ (Dots Indicators) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {imagesArray.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "w-6 bg-indigo-400"
                          : "w-1.5 bg-zinc-500/50 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* ส่วนข้อมูลรายละเอียดโปรเจกต์ */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 border-b border-zinc-900 pb-6">
          {/* ฝั่งซ้าย: ชื่อโปรเจกต์ และ Tech Stack */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 flex items-center gap-2.5">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 shrink-0" />
              <span className="break-words">{project.title}</span>
            </h1>

            {/* กลุ่มป้ายสัญลักษณ์เทคโนโลยี */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-[11px] px-2.5 py-1 rounded-xl font-medium shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ฝั่งขวา: ปุ่ม Visit Live Project ย้ายขึ้นมาด้านบนและปรับโฉมให้พรีเมียม */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl px-4 py-2.5 sm:py-3 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 active:scale-95 group/btn shrink-0 overflow-hidden
                /* 📱 บนมือถือ: ขยายปุ่มเต็มความกว้างขอบจอ | 💻 บนคอม: ขนาดกะทัดรัดพอดีปุ่ม */
                w-full sm:w-auto"
            >
              {/* เอฟเฟกต์แสงวาบวิ่งผ่านตัวปุ่มเวลา Hover */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1s_ease-in-out]" />

              <span>Visit Live Project</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </a>
          )}
        </div>

        {/* ส่วนเนื้อหารายละเอียดโปรเจกต์ */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-3">
            About the project
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>
    </main>
  );
}
