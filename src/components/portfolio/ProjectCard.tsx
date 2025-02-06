"use client";

import Image from "next/image";
import React from "react";
import { Project } from "./projectList";

interface ProjectProp {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProp) {
  return (
    <div className="relative w-52 h-52 border-2 border-white rounded-md overflow-hidden group mt-8">
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        style={{ objectFit: "cover" }}
        className="w-full h-64 object-cover"
      />

      {/* Overlay Text and Button */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">
          {project.title}
        </h3>
        <button
          onClick={() => window.open(project.link, "_blank")}
          className="px-4 py-2 text-sm font-medium text-black bg-white border-2 border-black hover:bg-black hover:text-white transition-all"
        >
          view project
        </button>
      </div>
    </div>
  );
}
