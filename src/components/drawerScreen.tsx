"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "CONTACT" },
];

export default function SlidingDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-black text-white p-4 z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className="mt-16">
          <ul className="space-y-4">
            {links.map((link) => (
              <li className="font-courier" key={link.href}>
                <Link href={link.href} className="text-lg hover:text-pink-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="font-courier absolute bottom-8 left-4 text-sm">
          My Resume
        </div>
      </motion.div>
    </>
  );
}
