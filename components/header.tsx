"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">NF</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            NeuraFlow
          </span>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {["Features", "Pricing", "FAQ", "Resources"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "#6366F1" }}
              className="text-sm font-medium text-muted-foreground hover:text-indigo-500 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            ))}
        </motion.button>
      </div>
    </motion.header>
  )
}
