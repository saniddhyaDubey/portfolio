"use client";

interface Skill {
  skill: string;
  percentage: number;
}

import { useEffect, useState } from "react";

export default function SkillContent() {
  const skills: Skill[] = [
    { skill: "API Development", percentage: 70 },
    { skill: "Smart Contract Development", percentage: 40 },
    { skill: "Rust", percentage: 30 },
    { skill: "TypeScript", percentage: 60 },
    { skill: "NextJS", percentage: 50 },
    { skill: "Node.js", percentage: 80 },
    { skill: "Blockchain", percentage: 60 },
  ];
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 py-16">
      {/* Left Column */}
      <div className="lg:w-1/3 pt-10">
        <h2 className="text-3xl font-courier text-black dark:text-white">
          Skills
        </h2>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ skill, percentage }: Skill) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(percentage), 500); // Animate after 500ms
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="space-y-2">
      {/* Skill Name */}
      <div className="flex justify-between">
        <p className="text-lg font-courier text-black dark:text-white">
          {skill}
        </p>
        <span className="text-sm italic font-courier text-black dark:text-white">
          {percentage}%
        </span>
      </div>
      {/* Skill Bar */}
      <div className="w-full h-2 bg-gray-800 rounded-md overflow-hidden">
        <div
          className="h-full bg-pink-500 transition-all duration-1000 ease-in-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
