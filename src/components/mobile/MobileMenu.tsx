import { AnimatePresence, motion } from "framer-motion";
import CtaButton from "../ui/buttons/CtaButton";

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: CallableFunction
}

const navItems = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#precos", label: "Preços" },
]

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: Props) {
    return (
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
    )
}