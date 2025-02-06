import ProjectCard from "./ProjectCard";
import { projects } from "./projectList";
import React from "react";

export default function PortfolioSection() {
  return (
    <div className="pl-36 mt-12">
      <div>
        <h1 className="text-5xl font-courier">Portfolio</h1>
        <div className="w-[40rem] h-[1px] bg-gray-500 mt-3"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
