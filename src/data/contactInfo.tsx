import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa"

export const contactInfo = {
    name: "Nome da Empresa",
    alternativeName: "Nome Alternativo",
    slogan: "Slogan",
    description: "Descrição",
    site: "link do site",
    email: "email da empresa",
    address: {
        city: "cidade",
        state: "SP",
        street: "Rua dos arredores",
        number: "00",
        complement: ""
    },
    instagram: "https://www.instagram.com/empresa",
    facebook: "https://www.facebook.com/empresa",
    youtube: "https://www.youtube.com/@empresa",
    tiktok: "https://vm.tiktok.com/ZM8N6VJML/",
    linkedin: "https://www.linkedin.com/company/empresa/",
    whatsapp: "5512999999999",
    phone: "(12) 99999-9999",
    website: "https://www.empresa.com",
    maps: "https://www.google.com.br/maps",
    placeId: "google_place_id"
}

export const socials = [
    {icon: <FaFacebook size={20} />, profile:contactInfo.facebook},
    {icon: <FaInstagram size={20} />, profile: contactInfo.instagram},
    {icon: <FaLinkedin size={20} />, profile: contactInfo.linkedin},
    {icon: <FaYoutube size={20} />, profile: contactInfo.youtube},
    {icon: <FaTiktok size={20} />, profile: contactInfo.tiktok},
    {icon: <FaGlobe size={20} />, profile: contactInfo.site},
]