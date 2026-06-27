/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  key?: string;
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-xl border border-neutral-800 bg-[#121212] hover:bg-[#161616] hover:border-neutral-700 transition-all duration-300 overflow-hidden"
    >
      {/* Product Image / Visual Placeholder */}
      <div className="relative h-60 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 group-hover:scale-102"
        />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[10px] font-mono tracking-widest font-medium uppercase bg-neutral-900/90 text-neutral-300 border border-neutral-700/60 px-3 py-1 rounded-full backdrop-blur-md">
            {project.category === "web" ? "Software Engineering" : "UI/UX Architecture"}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-medium text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-neutral-500 mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            {project.problem}
          </p>

          <div className="flex items-center justify-between">
            {/* Technology badges */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex space-x-2 mt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all"
                >
                  <Github className="h-3 w-3" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
