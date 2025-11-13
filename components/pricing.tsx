"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for exploring AI automation",
    features: [
      "Up to 1,000 AI tasks/month",
      "Basic analytics dashboard",
      "Email support",
      "Community access",
      "99.5% uptime SLA",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Ideal for growing teams",
    features: [
      "Up to 50,000 AI tasks/month",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "Custom integrations",
      "99.9% uptime SLA",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "For large-scale operations",
    features: [
      "Unlimited AI tasks",
      "Full analytics suite with AI insights",
      "24/7 phone & dedicated support",
      "Custom integrations & API",
      "99.99% uptime SLA",
      "Dedicated infrastructure",
      "Custom training & onboarding",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Simple, Transparent </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Choose the plan that fits your needs</p>

          {/* Pricing toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 p-2 rounded-full bg-white/10 border border-white/20"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                !isYearly ? "bg-indigo-500 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isYearly ? "bg-indigo-500 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly <span className="text-cyan-400 text-sm ml-1">(20% off)</span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={plan.highlighted ? { y: -10 } : {}}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
                  : "bg-white/10 border-white/20"
              } border`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">
                    ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">per month</span>
                </div>
                {isYearly && <p className="text-sm text-cyan-400 mt-2">Billed ${plan.yearlyPrice}/year</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-indigo-500/30"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                Get Started
              </motion.button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
