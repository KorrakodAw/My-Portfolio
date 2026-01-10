import React from "react";
import { ExternalLink, Github } from "lucide-react"; // Optional icons (npm install lucide-react)

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectProps) {
  return (
    <div className="group bg-white rounded-2xl border border-zinc-200 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4 gap-2">
        <h3 className="text-base sm:text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {/* Optional: Small icon indicating a link */}
        <span className="text-zinc-400 group-hover:text-blue-600 flex-shrink-0">
          ↗
        </span>
      </div>

      <p className="text-sm sm:text-base text-zinc-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 sm:px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full border border-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
