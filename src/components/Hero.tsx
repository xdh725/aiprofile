"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";

export default function Hero() {
  const { t } = useI18n();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = t.hero.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, t.hero.roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10 max-w-4xl">
        {/* Greeting */}
        <p className="text-cyan-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          {t.hero.name}
        </h1>

        {/* Nickname */}
        <p className="text-lg md:text-xl text-gray-500 mb-6 tracking-wider animate-fade-in-up-delay">
          @ {t.hero.nickname}
        </p>

        {/* Typing effect */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl text-cyan-400 font-mono">
            {displayText}
          </span>
          <span className="w-0.5 h-6 md:h-7 bg-cyan-400 animate-blink ml-1" />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay2">
          {t.hero.tagline}
        </p>

        {/* CTA Button */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-300 text-sm tracking-wider group"
        >
          {t.hero.cta}
          <svg
            className="w-4 h-4 group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-1.5 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
