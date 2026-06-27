/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  Code, Terminal, FileCode, Layout,
  Cpu, Server, Palette, GitBranch,
  Figma as FigmaIcon, Layers, PenTool, Image,
  Zap, Globe, Smartphone, BookOpen, Award
} from "lucide-react";
import { SkillCategory } from "../types";

interface SkillShowcaseProps {
  categories: SkillCategory[];
}

export default function SkillShowcase({ categories }: SkillShowcaseProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return Code;
      case "Terminal":
        return Terminal;
      case "FileCode":
        return FileCode;
      case "Layout":
        return Layout;
      case "Cpu":
        return Cpu;
      case "Server":
        return Server;
      case "Palette":
        return Palette;
      case "GitBranch":
        return GitBranch;
      case "Figma":
        return FigmaIcon;
      case "Layers":
        return Layers;
      case "PenTool":
        return PenTool;
      case "Image":
        return Image;
      case "Zap":
        return Zap;
      case "Globe":
        return Globe;
      case "Smartphone":
        return Smartphone;
      case "BookOpen":
        return BookOpen;
      default:
        return Award;
    }
  };

  return (
    <div id="skills-grid-wrapper" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, catIdx) => (
        <motion.div
          key={cat.category}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: catIdx * 0.05 }}
          className="p-6 bg-[#121212] border border-neutral-800 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-widest mb-4">
              {cat.category}
            </h3>

            <div className="flex flex-col gap-3">
              {cat.items.map((skill, skillIdx) => {
                const Icon = getIconComponent(skill.icon);
                return (
                  <div key={skillIdx} className="flex items-center space-x-2.5 text-sm text-neutral-200">
                    <Icon className="h-4 w-4 text-neutral-500 shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
