"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">NF</span>
              </div>
              <span className="text-lg font-bold text-white">NeuraFlow</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering teams with next-generation AI automation and intelligence.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Security", "Roadmap"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © 2025 NeuraFlow AI. All rights reserved.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            {[
              { icon: Twitter, href: "#" },
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: "#6366F1" }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
