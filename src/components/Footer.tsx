"use client";

import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative py-8 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">{"</>"}</span>
          <span>Donghua Xie &copy; {new Date().getFullYear()}</span>
        </div>
        <div>
          {t.footer.built} · Next.js · Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
