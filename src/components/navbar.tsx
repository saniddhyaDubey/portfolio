"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/logs", label: "Logs" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          sd<span className="text-pink-500">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-sm tracking-wide transition-colors group ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-pink-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Resume — desktop only */}
          <Link
            href="https://drive.google.com/file/d/1ryH9HUG-xBzNET6gSTrfbi87Jz2IEBAk/view"
            target="_blank"
            className="hidden md:inline-block font-mono text-sm px-4 py-1.5 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
          >
            Resume
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-mono text-sm tracking-wide py-3 border-b border-black/5 dark:border-white/5 transition-colors ${
                      isActive
                        ? "text-pink-500 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="https://drive.google.com/file/d/1ryH9HUG-xBzNET6gSTrfbi87Jz2IEBAk/view"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm mt-3 px-4 py-2.5 border border-black dark:border-white text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                Resume ↗
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
