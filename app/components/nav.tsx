"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/", label: "Professional" },
  { href: "/personal", label: "Personal" },
];

function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("theme-preference", dark ? "dark" : "light");
  window.dispatchEvent(new Event("themeChanged"));
}

export default function Nav() {
  const pathname = usePathname();
  const active = pathname.startsWith("/personal") ? "/personal" : "/";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "t" && !e.metaKey && !e.ctrlKey && !e.altKey) toggleTheme();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 p-5">
      <div>
        <Link href="/" className="wordmark block">
          {["NELSON NICOLΛS", "HIGUERΛ RUIZ"].map((line) => (
            <span key={line} className="block">
              {[...line].map((ch, i) =>
                ch === " " ? " " : <span key={i}>{ch}</span>,
              )}
            </span>
          ))}
        </Link>
        <p className="tagline">neurosymbolic ai researcher</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          title="theme [t]"
          aria-label="Toggle theme"
          className="theme-toggle"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2a10 10 0 0 0 0 20z" fill="currentColor" />
          </svg>
        </button>
        <nav className="nav-pill">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.href === active ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
