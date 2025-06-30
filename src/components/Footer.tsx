import { Mail, MapPin, Phone } from "lucide-react"
import { contactInfo, socials } from "../data/contactInfo"
import { formatAddress } from "@/utils/contactInfoUtils"
import { services } from "@/data/services"


const socialMediaIcons = "hover:text-white transition-colors"

const footerNavigation = [
    {route: "#", label:"início"},
    {route: "#servicos", label:"serviços"},
    {route: "#portfolio", label:"portfólio"},
    {route: "#depoimentos", label:"depoimentos"},
    {route: "#precos", label:"preços"},
    {route: "#contato", label:"contato"},
    {route: "#sobre", label:"sobre"},
]

const contactIconsClass = "h-5 w-5 mr-2 flex-shrink-0"
const contactRoutes = [
    { route: contactInfo.maps, label : formatAddress(), icon: <MapPin className={contactIconsClass} />},
    { route: `tel:${contactInfo.phone}`, label: contactInfo.phone, icon: <Phone className={contactIconsClass} /> },
    { route: `mailto:${contactInfo.email}`, label: contactInfo.email, icon: <Mail className={contactIconsClass} /> },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{contactInfo.name}</h3>
                        <p className="mb-4">
                            {contactInfo.description}
                        </p>
                        <div className="flex space-x-4">
                            {socials.map((social) => (
                                social.profile.length > 0 && (
                                    <a href={social.profile} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialMediaIcons}>
                                        {social.icon}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Serviços</h3>
                        <ul className="space-y-2">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.title}>
                                    <a href="#servicos" className={socialMediaIcons}>
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {footerNavigation.map((navItem) => (
                                <li key={navItem.route}>
                                    <a href={navItem.route} className={socialMediaIcons}>
                                        {navItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
                        <ul className="space-y-4">
                            {contactRoutes.map((item) => (
                                <li className="flex items-center" key={item.route}>
                                    {item.icon}
                                    <a href={item.route} target="_blank" rel="noopener noreferrer">
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {currentYear} {contactInfo.name}. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        Desenvolvido por Pedro Garcia
                    </div>
                </div>
            </div>
        </footer>
    )
}
