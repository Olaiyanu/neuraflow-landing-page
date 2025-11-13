"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What AI models does NeuraFlow use?",
    answer:
      "NeuraFlow integrates with leading AI models including GPT-4, Claude, and specialized models for different use cases. We constantly update our model library to ensure you have access to the latest innovations.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular security audits. All data is encrypted in transit and at rest, with strict access controls and audit logs.",
  },
  {
    question: "Can I integrate NeuraFlow with my existing tools?",
    answer:
      "NeuraFlow supports integrations with 500+ popular business tools including Slack, Zapier, Microsoft Teams, Salesforce, HubSpot, and more. We also provide a comprehensive API for custom integrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer tiered support based on your plan: email support for Starter, priority chat & email for Professional, and 24/7 dedicated support for Enterprise. All plans include access to our knowledge base and community.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Sign up for a free trial, configure your first workflow in minutes, and start automating immediately. Our onboarding team will guide you through setup and optimization.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start exploring NeuraFlow AI.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Have questions? We have answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-white/10 rounded-lg overflow-hidden hover:border-indigo-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 px-6 py-4"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
