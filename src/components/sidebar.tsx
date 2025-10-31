"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiDevpost } from "react-icons/si";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-y-4 m-1 z-10">
      <Link
        href="https://leetcode.com/u/0Bugs/"
        className="cursor-pointer"
        target="_blank"
      >
        <SiLeetcode className="text-primary" size={18} />
      </Link>
      <Link
        href="https://codeforces.com/profile/bugFixed"
        className="cursor-pointer"
        target="_blank"
      >
        <SiCodeforces className="text-primary" size={18} />
      </Link>
      <Link
        href="https://devpost.com/sdubey5"
        className="cursor-pointer"
        target="_blank"
      >
        <SiDevpost className="text-primary" size={18} />
      </Link>
      <Link
        href="https://x.com/saniddhya_10"
        className="cursor-pointer"
        target="_blank"
      >
        <FaTwitter />
      </Link>
      <Link
        href="https://github.com/saniddhyaDubey/"
        className="cursor-pointer"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/saniddhyadubey/"
        className="cursor-pointer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>

      <div className="w-[2px] h-16 bg-black dark:bg-white m-2"></div>
      <div className="-rotate-90 mt-6 font-mono">PROFILES</div>
    </div>
  );
}
