"use client"

import { motion } from "framer-motion"
import { Brain, Zap, BarChart3, Workflow } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Analytics",
    description:
      "Leverage advanced machine learning algorithms to gain deep insights into your data and make smarter decisions.",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate repetitive tasks and workflows with intelligent automation powered by cutting-edge AI.",
  },
  {
    icon: Workflow,
    title: "Smart Workflows",
    description: "Create intelligent, self-optimizing workflows that adapt and improve over time.",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description: "Monitor your operations in real-time with live dashboards and actionable intelligence.",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Powerful Features for </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to harness the power of AI without complexity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
