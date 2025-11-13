"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-animate opacity-60" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Animated glowing orbs */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-white">Introducing NeuraFlow AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Empowering Teams with </span>
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Next-Generation AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Unlock the power of intelligent automation, real-time analytics, and smart workflows. Transform your business
          with cutting-edge AI technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#6366F1" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10"
        >
          {[
            { label: "Companies", value: "500+" },
            { label: "AI Models", value: "200+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
