import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Github,
  Mail,
  Award,
  Heart,
  FileText,
  ChevronDown,
  Briefcase,
  GraduationCap,
  ExternalLink,
  MapPin,
  X,
  Download,
  Printer,
  ChevronRight
} from "lucide-react";

import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import SkillShowcase from "./components/SkillShowcase";
import ContactSection from "./components/ContactSection";

import {
  projectsData,
  experienceData,
  skillsData,
  leadershipData,
  certificationsData
} from "./types";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans antialiased selection:bg-neutral-800 selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0a0a0a]/80 border-b border-neutral-900 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="h-8 w-8 rounded bg-white flex items-center justify-center text-black font-semibold text-xs transition-transform duration-300 group-hover:scale-105">
              LS
            </div>
            <div>
              <span className="text-sm font-medium text-white tracking-tight block">
                Laraib Shehzadi
              </span>
              <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block">
                Software Engineer
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setResumeOpen(true)}
              className="px-4.5 py-1.5 rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950 hover:bg-neutral-900 text-xs font-medium text-white transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <FileText className="h-3.5 w-3.5 text-neutral-400" />
              <span>Resume</span>
            </button>

            <a
              href="https://www.linkedin.com/in/laraib-shehzadi-b99a6a331/"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32 md:space-y-44">
        {/* HERO */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span className="text-[10px] font-mono tracking-widest font-medium uppercase">
                  Available for Internships & Roles
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-none">
                  Laraib Shehzadi
                </h1>
                <p className="text-lg md:text-2xl font-mono text-neutral-400">
                  Software Engineering Student | AI Enthusiast
                </p>
              </div>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl">
                Software Engineering student with a growing focus on Generative AI, prompt engineering, UI/UX Design and intelligent web applications. Passionate about combining modern software engineering practices with AI-powered experiences to build useful and accessible digital products.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white hover:bg-neutral-200 text-black px-6 py-2.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 text-white px-5 py-2.5 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <FileText className="h-4 w-4 text-neutral-400" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>

            {/* Simple Graphic Specifications Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-neutral-800 bg-[#121212] p-6 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase font-medium">
                    Profile Highlights
                  </span>
                  <Award className="h-4 w-4 text-neutral-500" />
                </div>

                <div className="space-y-4 text-sm">
                  {/* Highlight 1 */}
                  <div className="flex items-start space-x-3.5">
                    <div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-mono text-xs font-semibold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white">B.S. Software Engineering</h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">LCWU (2025 – 2029 Expected)</p>
                    </div>
                  </div>

                  {/* Highlight 2 */}
                  <div className="flex items-start space-x-3.5">
                    <div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-mono text-xs font-semibold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white">Framer & UI/UX Specialist</h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">Translating visual systems</p>
                    </div>
                  </div>

                  {/* Highlight 3 */}
                  <div className="flex items-start space-x-3.5">
                    <div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 font-mono text-xs font-semibold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-white">Certified</h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">Generative AI Fundamentals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Scroll Indicator */}
          <div className="flex justify-center pt-15">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-500 hover:text-white transition-colors flex flex-col items-center space-y-1.5 cursor-pointer"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase">Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="space-y-5 scroll-mt-12">
          <div className="border-l border-neutral-700 pl-4 space-y-1">
            <h2 className="text-2xl font-medium text-white tracking-tight">
              About & Journey
            </h2>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Laraib Shehzadi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-5 text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                I am a Software Engineering student at Lahore College for Women University with a strong interest in <strong> Generative AI, prompt engineering, and modern web development.</strong> My academic journey has allowed me to explore both software engineering fundamentals and emerging AI technologies.
              </p>
              <p>
                Through my Web Development Internship at DevShieldx, I gained practical experience building responsive web interfaces and collaborating with designers to improve user experiences. Alongside web development, I actively explore AI-powered solutions and have developed projects that apply artificial intelligence to e-commerce, digital heritage preservation, and interactive user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-5 scroll-mt-12">
          <div className="border-l border-neutral-700 pl-4 space-y-1">
            <h2 className="text-2xl font-medium text-white tracking-tight">
              Skills
            </h2>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              My Technical Stack & Core Tooling
            </p>
          </div>

          <SkillShowcase categories={skillsData} />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-5 scroll-mt-12">
          <div className="border-l border-neutral-700 pl-4 space-y-1">
            <h2 className="text-2xl font-medium text-white tracking-tight">
              Work History
            </h2>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Professional Timeline
            </p>
          </div>

          <Timeline experience={experienceData} />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-5 scroll-mt-12">
          <div className="border-l border-neutral-700 pl-4 space-y-1">
            <h2 className="text-2xl font-medium text-white tracking-tight">
              Case Studies & Projects
            </h2>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Recent Engineering Work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {projectsData.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        {/* LEADERSHIP & VOLUNTEERING */}
        <section id="leadership" className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l border-neutral-700 pl-4 space-y-1">
              <h2 className="text-2xl font-medium text-white tracking-tight">
                Leadership & Volunteering
              </h2>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Community & Outreach Work
              </p>
            </div>

            <div className="space-y-4">
              {leadershipData.map((lead) => (
                <div
                  key={lead.id}
                  className="p-6 rounded-xl border border-neutral-800 bg-[#121212] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400 font-medium uppercase tracking-wider">
                      {lead.role}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {lead.period}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white">
                    {lead.organization}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Side-by-side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l border-neutral-700 pl-4 space-y-1">
              <h2 className="text-2xl font-medium text-white tracking-tight">
                Education & Certs
              </h2>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Academic Background & Credentials
              </p>
            </div>

            <div className="space-y-4">
              {/* LCWU Card */}
              <div className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-400 font-medium tracking-wider uppercase">
                  <GraduationCap className="h-4 w-4 text-neutral-500" />
                  <span>Academic Degree Studies</span>
                </div>
                <h4 className="text-sm font-medium text-white">Lahore College for Women University</h4>
                <p className="text-xs text-neutral-400">
                  B.S. in Software Engineering (Sep 2025 - Expected graduation 2029) focusing on data structures, algorithmic systems, and object-oriented architectures.
                </p>
              </div>

              {/* Certifications Map */}
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl border border-neutral-800 bg-[#121212] flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <h3 className="text-xs font-medium text-white">
                      {cert.name}
                    </h3>
                    <p className="text-[10px] text-neutral-500">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-10 scroll-mt-24">
          <div className="border-l border-neutral-700 pl-4 space-y-1">
            <h2 className="text-2xl font-medium text-white tracking-tight">
              Contact
            </h2>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Start a Conversation
            </p>
          </div>

          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-[#070707] py-5 text-center font-mono text-xs text-neutral-500 relative">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/laraib-shehzadi-b99a6a331/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Laraibshehzadi20"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:laraibsheh123@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
          <div className="text-[10px] text-neutral-600">
            &copy; {new Date().getFullYear()} Laraib Shehzadi. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white text-black w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal controls */}
              <div className="bg-[#121212] text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-neutral-400" />
                  <span className="text-sm font-medium tracking-tight">Interactive Resume</span>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <button
                    onClick={handlePrintResume}
                    className="px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Print / Save PDF</span>
                  </button>
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="p-1 rounded bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Resume Body */}
              <div id="resume-print-area" className="flex-1 overflow-y-auto p-8 md:p-12 font-sans text-neutral-800 bg-white leading-relaxed">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="border-b-2 border-neutral-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">LARAIB SHEHZADI</h1>
                      <p className="text-md font-mono tracking-widest text-neutral-500 uppercase mt-1">Software Engineering Student</p>
                    </div>
                    <div className="text-xs md:text-right space-y-0.5 font-mono text-neutral-600">
                      <p>Lahore, Pakistan</p>
                      <p>laraibsheh123@gmail.com</p>
                      <p>+92 328 4995635</p>
                      <p>linkedin.com/in/laraibshehzadi-b99a6a331</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-neutral-300 pb-1 text-black">Professional Summary</h2>
                    <p className="text-xs leading-relaxed text-neutral-700">
                      Analytical and goal-oriented Software Engineering student with a robust background in crafting responsive, beautiful, and highly modular front-end layout components using React, Vite, and Tailwind CSS. Proven track record managing client-facing issues, optimizing system workflows, and implementing collaborative version control histories. Eager to contribute high-fidelity visual design and standard-compliant software development inside progressive modern engineering teams.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-neutral-300 pb-1 text-black">Education</h2>
                    <div className="flex justify-between items-start text-xs text-neutral-700">
                      <div>
                        <h3 className="font-bold text-black">Lahore College for Women University (LCWU)</h3>
                        <p>B.S. in Software Engineering</p>
                      </div>
                      <div className="text-right font-mono text-[11px]">
                        <p>Expected 2029</p>
                        <p>Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-4">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-neutral-300 pb-1 text-black">Professional Experience</h2>

                    {/* Experience 1 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <h3 className="font-bold text-black">Web Development Intern</h3>
                          <p className="text-neutral-500 font-medium">DevShieldx</p>
                        </div>
                        <div className="text-right font-mono text-[11px] text-neutral-600">
                          <p>Mar 2026 – Apr 2026</p>
                          <p>Lahore, Pakistan</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-4 text-xs text-neutral-700 space-y-1">
                        <li>Built fully responsive, modular client interfaces using semantic HTML5, utility-first CSS (Tailwind), and ES6+ JavaScript.</li>
                        <li>Collaborated closely with visual designers, translating detailed Figma mockups into pixel-perfect, accessible React components.</li>
                        <li>Diagnosed and optimized rendering bottlenecks, improving overall Lighthouse performance scores by 20%+.</li>
                        <li>Maintained clean version histories via Git and conducted structured PR reviews on GitHub.</li>
                      </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <h3 className="font-bold text-black">Customer Support Representative (SSA & MENA Regions)</h3>
                          <p className="text-neutral-500 font-medium">Mindbridge (Uber Support Account)</p>
                        </div>
                        <div className="text-right font-mono text-[11px] text-neutral-600">
                          <p>Nov 2024 – Nov 2025</p>
                          <p>Lahore, Pakistan</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-4 text-xs text-neutral-700 space-y-1">
                        <li>Managed and resolved critical driver-partner and user inquiries in high-pressure SLA environments across Middle East & Sub-Saharan Africa.</li>
                        <li>Sustained CSAT satisfaction rates averaging 95%+ monthly through high-empathy communication and dispute analysis.</li>
                        <li>Collaborated across internal logistics teams to process complex payment reconciliations and safety escalations.</li>
                      </ul>
                    </div>

                    {/* Experience 3 */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <h3 className="font-bold text-black">Teaching Specialist</h3>
                          <p className="text-neutral-500 font-medium">Govt. Girls High School, Bucha Kalan</p>
                        </div>
                        <div className="text-right font-mono text-[11px] text-neutral-600">
                          <p>Apr 2022 – Sep 2022</p>
                          <p>Sargodha, Pakistan</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-4 text-xs text-neutral-700 space-y-1">
                        <li>Taught introductory computer sciences, deconstructing technical programming concepts into accessible, easy-to-learn modules.</li>
                        <li>Paced educational goals and designed classroom projects, boosting test scores and class comprehension by 40%.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Skills Grid for Print */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-neutral-300 pb-1 text-black">Key Skills Matrix</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-700">
                      <div>
                        <h4 className="font-bold text-black mb-1">Languages</h4>
                        <p>TypeScript / JavaScript (ES6+)</p>
                        <p>Python</p>
                        <p>C / C++</p>
                        <p>HTML5 & CSS3</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">Libraries & Frameworks</h4>
                        <p>React 18 / 19</p>
                        <p>Vite</p>
                        <p>FastAPI</p>
                        <p>Tailwind CSS</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">Design & UX</h4>
                        <p>Figma Mockups</p>
                        <p>Wireframing</p>
                        <p>Design Systems</p>
                        <p>Adobe Photoshop</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">Tools & Core</h4>
                        <p>Git / GitHub</p>
                        <p>RESTful APIs</p>
                        <p>Web Performance</p>
                        <p>Cross-Device Quality Assurance</p>
                      </div>
                    </div>
                  </div>

                  {/* Volunteering & Leadership */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider border-b border-neutral-300 pb-1 text-black">Volunteering & Leadership</h2>
                    <div className="text-xs space-y-1 text-neutral-700">
                      <p><strong className="text-black">TEDxLCWU Ambassador (2025 - Present)</strong> — Leading outreach pipelines and local event logistics to promote speaking platforms.</p>
                      <p><strong className="text-black">Alkhidmat Foundation Volunteer Lead (2023 - Active)</strong> — Coordinating disaster aid fundraising and local digital literacy workshops.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
