"use client";

import { useI18n } from "@/i18n/context";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 text-sm tracking-wider">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Contact cards */}
        <div
          className={`grid md:grid-cols-2 gap-6 max-w-lg mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Email */}
          <a
            href="mailto:xdh725@gmail.com"
            className="group p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-cyan-500/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="text-xs text-gray-500 mb-1 tracking-wider">
              {t.contact.email}
            </div>
            <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
              xdh725@gmail.com
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/xdh725"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-cyan-500/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500 mb-1 tracking-wider">
              {t.contact.github}
            </div>
            <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
              @xdh725
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
