/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail, Smartphone, Linkedin, MessageSquare } from "lucide-react";

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentMessages, setSentMessages] = useState<SavedMessage[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("laraib_sent_messages");
      if (saved) {
        setSentMessages(JSON.parse(saved));
      }
    } catch (e) { }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMsg: SavedMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Inquiry",
        message: formData.message,
        timestamp: new Date().toLocaleDateString(),
      };

      const updated = [newMsg, ...sentMessages];
      setSentMessages(updated);
      localStorage.setItem("laraib_sent_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div id="contact-hub-wrapper" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Contact Form */}
      <div className="lg:col-span-7 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name-input" className="text-xs font-mono text-neutral-400 font-medium uppercase tracking-wider">
                Your Name *
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tony Stark"
                className="w-full bg-[#121212] border border-neutral-800 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email-input" className="text-xs font-mono text-neutral-400 font-medium uppercase tracking-wider">
                Email Address *
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tony@stark.io"
                className="w-full bg-[#121212] border border-neutral-800 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label htmlFor="subject-input" className="text-xs font-mono text-neutral-400 font-medium uppercase tracking-wider">
              Subject
            </label>
            <input
              id="subject-input"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Software Engineering Collaboration"
              className="w-full bg-[#121212] border border-neutral-800 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message-input" className="text-xs font-mono text-neutral-400 font-medium uppercase tracking-wider">
              Message *
            </label>
            <textarea
              id="message-input"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full bg-[#121212] border border-neutral-800 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-600 resize-none"
            />
          </div>

          {/* Submission Button and Success Alerts */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send className="h-4 w-4" />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center space-x-2 text-emerald-400 text-sm font-medium"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>

      {/* Directory of Direct Channels */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 bg-[#121212] border border-neutral-800 rounded-xl space-y-6">
          <h3 className="text-sm font-mono font-medium text-neutral-400 uppercase tracking-widest">
            Direct Channels
          </h3>

          <div className="space-y-4">
            {/* Email Link */}
            <a
              href="mailto:laraibsheh123@gmail.com"
              className="flex items-center space-x-4 p-4 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Email</div>
                <div className="text-sm text-neutral-200 truncate">laraibsheh123@gmail.com</div>
              </div>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+923284995635"
              className="flex items-center space-x-4 p-4 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Phone</div>
                <div className="text-sm text-neutral-200">+92 328 4995635</div>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/laraib-shehzadi-b99a6a331/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 p-4 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all"
            >
              <div className="h-10 w-10 flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">LinkedIn</div>
                <div className="text-sm text-neutral-200">Laraib Shehzadi</div>
              </div>
            </a>
          </div>
        </div>

        {/* Local Sent Messages Log (Simple Confirmation) */}
        {sentMessages.length > 0 && (
          <div className="p-6 bg-[#121212] border border-neutral-800 rounded-xl space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400 font-medium uppercase tracking-widest">
              <MessageSquare className="h-4 w-4" />
              <span>Sent Messages History ({sentMessages.length})</span>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
              {sentMessages.map((msg) => (
                <div key={msg.id} className="p-3 bg-neutral-950 border border-neutral-800 rounded text-xs space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>{msg.timestamp}</span>
                    <span>ID: {msg.id}</span>
                  </div>
                  <div className="font-medium text-neutral-300 truncate">{msg.subject}</div>
                  <p className="text-neutral-500 line-clamp-1">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
