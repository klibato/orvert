import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Technical Dashboard Style */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-[var(--accent-primary)] text-xs font-mono text-[var(--accent-primary)] uppercase">
                MATÉRIEL PROFESSIONNEL
              </div>
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-[var(--text-primary)] uppercase leading-tight">
                ÉQUIPEMENT DE CULTURE
                <br />
                <span className="text-[var(--accent-primary)]">HAUTE PRÉCISION</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Systèmes hydroponiques, éclairage LED, contrôle climatique.
                Matériel technique pour cultivateurs exigeants.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/boutique">
                  <Button size="lg">VOIR LE CATALOGUE</Button>
                </Link>
                <Link href="/configurateur">
                  <Button variant="outline" size="lg">
                    CONFIGURATEUR
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Panel */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                    500+
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] font-mono">
                    PRODUITS
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                    24H
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] font-mono">
                    LIVRAISON
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                    3 ANS
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] font-mono">
                    GARANTIE
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] font-mono">
                    CLIENTS
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-mono font-bold text-[var(--text-primary)] uppercase mb-8">
            CATÉGORIES PRINCIPALES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "ÉCLAIRAGE",
                desc: "LED haute efficacité",
                href: "/boutique/eclairage",
                icon: "💡",
              },
              {
                title: "SYSTÈMES HYDRO",
                desc: "NFT, DWC, Aéroponie",
                href: "/boutique/systemes",
                icon: "⚙️",
              },
              {
                title: "NUTRITION",
                desc: "Engrais & additifs",
                href: "/boutique/nutrition",
                icon: "🧪",
              },
              {
                title: "CLIMAT",
                desc: "Extraction, ventilation",
                href: "/boutique/climat",
                icon: "🌡️",
              },
            ].map((category) => (
              <Link key={category.href} href={category.href}>
                <Card className="h-full hover:border-[var(--accent-primary)] transition-colors group">
                  <CardHeader>
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <CardTitle className="text-sm">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-[var(--text-secondary)] font-mono">
                      {category.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold">
                  01
                </div>
                <h3 className="font-mono font-semibold text-[var(--text-primary)] uppercase">
                  EXPERTISE TECHNIQUE
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Conseil personnalisé pour chaque configuration. Guides détaillés
                et support technique inclus.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold">
                  02
                </div>
                <h3 className="font-mono font-semibold text-[var(--text-primary)] uppercase">
                  STOCK PERMANENT
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Inventaire en temps réel. Livraison 24-48h partout en France.
                Emballage discret garanti.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)} font-mono text-sm font-bold">
                  03
                </div>
                <h3 className="font-mono font-semibold text-[var(--text-primary)] uppercase">
                  GARANTIE ÉTENDUE
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                3 ans sur tout l'éclairage LED. SAV réactif. Pièces détachées
                disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-mono font-bold text-[var(--text-primary)] uppercase mb-2">
                    BESOIN D'UNE CONFIGURATION COMPLÈTE ?
                  </h2>
                  <p className="text-[var(--text-secondary)]">
                    Utilisez notre configurateur intelligent pour obtenir une
                    configuration adaptée à votre espace et budget.
                  </p>
                </div>
                <Link href="/configurateur">
                  <Button size="lg">LANCER LE CONFIGURATEUR</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
