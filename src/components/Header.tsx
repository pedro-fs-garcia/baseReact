import { useState } from "react"
import { motion } from "framer-motion"
import CtaButton from "./ui/buttons/CtaButton"
import MobileMenuButton from "./mobile/MobileMenuButton"
import MobileMenu from "./mobile/MobileMenu"
import { contactInfo } from "@/data/contactInfo"

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
                  alt={`${contactInfo.name}`}
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

            <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></MobileMenuButton>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}></MobileMenu>
    </>
  )
}
