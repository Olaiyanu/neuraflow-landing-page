"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Newsletter signup:", email)
      setSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl" />
          <div className="absolute inset-0 border border-indigo-500/50 rounded-2xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Stay Updated with NeuraFlow</h2>
              <p className="text-gray-300">
                Get the latest updates on AI features, tips, and exclusive early access to new tools.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitted}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50"
                >
                  {submitted ? "Subscribed!" : "Join Waitlist"}
                </motion.button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-4 text-cyan-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks for subscribing! Check your email.</span>
                </motion.div>
              )}
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center text-sm text-gray-500 mt-4"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
