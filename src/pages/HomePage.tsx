import ComponentsDemo from "@/components/ComponentsDemo";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import WhatsappButton from "@/components/ui/buttons/WhatsappButton";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header institucional */}
      <ComponentsDemo></ComponentsDemo>
      <ThemeSwitcher></ThemeSwitcher>
      {/* Botão flutuante do WhatsApp */}
      <WhatsappButton />
    </div>
  );
}