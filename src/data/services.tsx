import {
  Globe,
  PenTool,
  GalleryHorizontalEnd,
  ShoppingCart,
  Building,
  MousePointerClick,
} from "lucide-react"


export const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Desenvolvimento de Sites",
    description: "Sites personalizados de alta conversão, otimizados para dispositivos móveis e mecanismos de busca.",
    features: ["Responsive Design", "SEO Otimizado", "Alta Performance"],
  },

  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Design e UX/UI",
    description: "Design profissional e experiência do usuário que convertem visitantes em clientes.",
    features: ["UI/UX Design", "Prototipagem", "Testes A/B"],
  },

  {
    icon: <MousePointerClick className="h-8 w-8" />,
    title: "Landing Pages",
    description: "Páginas focadas em conversão, criadas para campanhas específicas e com alta taxa de captura de leads.",
    features: ["Velocidade", "Copy persuasiva", "Call to Action eficaz"],
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Site Institucional",
    description: "A presença online essencial para sua marca: profissionalismo, confiança e credibilidade em um só lugar.",
    features: ["Identidade Visual", "Layout Personalizado", "Facilidade de Navegação"],
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Loja Virtual",
    description: "Venda seus produtos online com segurança, desempenho e estrutura preparada para escalar seu negócio.",
    features: ["Integração com Pagamentos", "Catálogo Gerenciável", "Design Responsivo"],
  },
  {
    icon: <GalleryHorizontalEnd className="h-8 w-8" />,
    title: "Vitrine Virtual",
    description: "Exiba seus produtos ou serviços de forma organizada e atrativa, ideal para negócios locais com vendas por WhatsApp ou redes sociais.",
    features: ["Galeria de Produtos", "Links Diretos", "Visual Moderno"],

  },
]