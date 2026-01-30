"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-light-300 text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:ankitrajchoudhari@gmail.com"
                    className="flex items-center gap-4 p-4 bg-dark-100 rounded-lg hover:bg-dark-200 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-light-300">Email</p>
                      <p className="text-light-100">ankitrajchoudhari@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-raj-choudhari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-100 rounded-lg hover:bg-dark-200 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-light-300">LinkedIn</p>
                      <p className="text-light-100">Ankit Raj Choudhari</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/25f3003058-afk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-100 rounded-lg hover:bg-dark-200 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-light-300">GitHub</p>
                      <p className="text-light-100">github.com/25f3003058-afk</p>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-light-200 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-100 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-100 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-100 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-light-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-light-100 text-sm"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
