"use client";

import { useI18n } from "@/i18n/context";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              {t.about.description}
            </p>
          </div>

          {/* Right: Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {t.about.stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack bar */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "AI/ML",
            "Docker",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs tracking-wider text-gray-400 border border-gray-800 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
