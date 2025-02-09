"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-start pl-36 mt-44">
      {/* Big Heading */}
      <h1 className="font-courier text-3xl font-thin text-black dark:text-white">
        I&apos;m Saniddhya
      </h1>

      {/* Subheading */}
      <div className="mt-2 min-h-[40px]">
        <TypeAnimation
          sequence={[
            "I love coding",
            1500,
            "I build cool stuff",
            1500,
            "I love backend",
            1500,
            "I explore blockchain",
            1500,
          ]}
          wrapper="span"
          speed={5} // Typing speed
          repeat={Infinity} // Loop indefinitely
          className="font-courier text-3xl font-semibold text-gray-900 dark:text-gray-300"
        />
      </div>

      {/* Optional Description */}
      <p className="font-courier text-lg text-black dark:text-gray-400 mt-8">
        A passionate software engineer, enthusiast in backend and blockchain,
        <br />
        based in Charlotte, NC.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <Link href={"/portfolio"}>
          <button className="px-6 py-2 font-courier text-black bg-white border-2 border-black hover:bg-black hover:text-white transition-all dark:text-white dark:bg-black dark:border-white dark:hover:bg-white dark:hover:text-black">
            My Portfolio
          </button>
        </Link>
        <Link href={"/contact"}>
          <button className="px-6 py-2 font-courier text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-all dark:text-black dark:bg-white dark:border-black dark:hover:bg-black dark:hover:text-white">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
