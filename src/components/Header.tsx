"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import CtaButton from "./ui/buttons/CtaButton"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#precos", label: "Preços" },
  ]

  return (
    <>
      <motion.header
        className={`fixed bg-slate-900 top-0 left-0 right-0 z-50 transition-all duration-500 ${
          " backdrop-blur-xl shadow-2xl shadow-yellow-400/10 border-b border-yellow-400/20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/Agora-Vai-360-Logomarca-2025-768x262.png"
                  alt="Agora Vai 360"
                  className="h-10 md:h-12 transition-all duration-300 group-hover:brightness-110"
                />
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-white/90 hover:text-yellow-400 transition-all duration-300 font-medium group py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3 ml-6">
                <CtaButton text="Fale Conosco" variant="secondary" size="sm" secondaryIcon={false} />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-2 text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-slate-900 to-gray-900 z-50 lg:hidden border-l border-yellow-400/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-20">
                {/* Mobile Logo */}
                <div className="mb-8 pb-6 border-b border-yellow-400/20">
                  <img src="/Agora-Vai-360-Logomarca-2025-768x262.png" alt="Agora Vai 360" className="h-8" />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  <CtaButton text="Fale Conosco" variant="secondary" size="sm" secondaryIcon={false} />
                </div>

                {/* Contact Info */}
                <motion.div
                  className="mt-8 pt-6 border-t border-yellow-400/20 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-gray-400 text-sm mb-2">São José dos Campos, SP</p>
                  <p className="text-yellow-400 text-sm font-medium">Especialistas em Marketing Digital</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
