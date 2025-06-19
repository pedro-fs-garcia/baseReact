import { Mail, MapPin, Phone } from "lucide-react"
import { contactInfo } from "../data/contactInfo"
import { formatAddress } from "@/utils/contactInfoUtils"
import { services } from "@/data/services"
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Agora Vai 360</h3>
                        <p className="mb-4">
                            {contactInfo.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                <FaYoutube size={20} />
                            </a>
                            <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition-colors">
                                <FaTiktok size={20} />
                            </a>
                            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" aria-label="website" className="hover:text-white transition-colors">
                                <FaGlobe size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Serviços</h3>
                        <ul className="space-y-2">
                            {services.slice(0, 6).map((service) => (
                                <li>
                                    <a href="#servicos" className="hover:text-white transition-colors">
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-white transition-colors">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:text-white transition-colors">
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a href="#depoimentos" className="hover:text-white transition-colors">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a href="#precos" className="hover:text-white transition-colors">
                                    Preços
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                                <a href={contactInfo.maps} target="_blank" rel="noopener noreferrer" >
                                    <span>{formatAddress()}</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href={`tel: ${contactInfo.phone}`} className="hover:text-white transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href={`mailto: ${contactInfo.email}`} className="hover:text-white transition-colors">
                                    {contactInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {currentYear} Agora Vai 360. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        Desenvolvido por Pedro Garcia
                    </div>
                </div>
            </div>
        </footer>
    )
}
