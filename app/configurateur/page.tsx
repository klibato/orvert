import { Breadcrumb } from "@/components/navigation/breadcrumb";
import { GrowConfigurator } from "@/components/configurator/grow-configurator";

export default function ConfiguratorPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Configurateur", href: "/configurateur" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-mono font-bold text-[var(--text-primary)] uppercase mb-3">
            CONFIGURATEUR DE CULTURE
          </h1>
          <p className="text-[var(--text-secondary)] max-w-3xl">
            Configurez votre espace de culture complet en quelques clics. Notre
            système vous recommande le matériel adapté à votre espace, méthode de
            culture, budget et niveau d'expérience.
          </p>
        </div>
        <GrowConfigurator />
      </div>
    </div>
  );
}
