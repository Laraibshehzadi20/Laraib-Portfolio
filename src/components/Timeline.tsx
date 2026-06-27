/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, Award } from "lucide-react";
import { Experience } from "../types";

interface TimelineProps {
  experience: Experience[];
}

export default function Timeline({ experience }: TimelineProps) {
  return (
    <div id="experience-timeline" className="relative pl-6 md:pl-8 border-l border-neutral-800 space-y-12">
      {experience.map((exp, idx) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="relative group"
        >
          {/* Timeline node dot */}
          <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center h-4 w-4 rounded-full border-2 border-neutral-800 bg-[#0a0a0a] group-hover:border-white transition-colors duration-300">
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors duration-300" />
          </div>

          {/* Experience Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
            {/* Left metadata column */}
            <div className="lg:col-span-4 space-y-1.5">
              <span className="inline-block text-xs font-mono text-neutral-500 uppercase tracking-widest">
                {exp.period}
              </span>
              <h3 className="text-lg font-medium text-white tracking-tight">
                {exp.role}
              </h3>
              <div className="flex flex-col gap-1 text-sm text-neutral-400">
                <span className="font-medium text-neutral-300">{exp.company}</span>
                <span className="flex items-center text-xs text-neutral-500">
                  <MapPin className="h-3 w-3 mr-1 shrink-0" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Right details column */}
            <div className="lg:col-span-8 space-y-4">
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start text-[14px] text-neutral-400 leading-relaxed">
                    <span className="text-neutral-600 mr-3 select-none">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies utilized row */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skillsGained.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono bg-[#161616] border border-neutral-800 text-neutral-400 px-2.5 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
