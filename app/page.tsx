import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl mb-12">
            <div className="inline-block px-3 py-1 mb-6 border border-[var(--accent-primary)] text-xs font-mono text-[var(--accent-primary)] uppercase">
              MATÉRIEL PROFESSIONNEL
            </div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-[var(--text-primary)] uppercase leading-[1.1] mb-6">
              ÉQUIPEMENT DE CULTURE<br />
              <span className="text-[var(--accent-primary)]">HAUTE PRÉCISION</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              Systèmes hydroponiques, éclairage LED, contrôle climatique. Matériel technique pour cultivateurs exigeants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/boutique">
                <Button size="lg">VOIR LE CATALOGUE</Button>
              </Link>
              <Link href="/configurateur">
                <Button variant="outline" size="lg">CONFIGURATEUR</Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-1">500+</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase">Produits</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-1">24H</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase">Livraison</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-1">3 ANS</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase">Garantie</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-mono font-bold text-[var(--accent-primary)] mb-1">10K+</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase">Clients</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-mono font-bold text-[var(--text-primary)] uppercase mb-8">
            CATÉGORIES PRINCIPALES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "ÉCLAIRAGE", desc: "LED haute efficacité", href: "/boutique/eclairage", icon: "💡" },
              { title: "SYSTÈMES HYDRO", desc: "NFT, DWC, Aéroponie", href: "/boutique/systemes", icon: "⚙️" },
              { title: "NUTRITION", desc: "Engrais & additifs", href: "/boutique/nutrition", icon: "🧪" },
              { title: "CLIMAT", desc: "Extraction, ventilation", href: "/boutique/climat", icon: "🌡️" },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href}>
                <Card className="h-full hover:border-[var(--accent-primary)] transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <h3 className="text-sm font-mono font-bold text-[var(--text-primary)] uppercase mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] font-mono">{cat.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "EXPERTISE TECHNIQUE",
                desc: "Conseil personnalisé pour chaque configuration. Guides détaillés et support technique inclus.",
              },
              {
                num: "02",
                title: "STOCK PERMANENT",
                desc: "Inventaire en temps réel. Livraison 24-48h partout en France. Emballage discret garanti.",
              },
              {
                num: "03",
                title: "GARANTIE ÉTENDUE",
                desc: "3 ans sur tout l'éclairage LED. SAV réactif. Pièces détachées disponibles.",
              },
            ].map((feature) => (
              <div key={feature.num} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold flex-shrink-0">
                    {feature.num}
                  </div>
                  <h3 className="font-mono font-bold text-[var(--text-primary)] uppercase text-sm">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-xl font-mono font-bold text-[var(--text-primary)] uppercase mb-3">
                    BESOIN D'UNE CONFIGURATION COMPLÈTE ?
                  </h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Utilisez notre configurateur intelligent pour obtenir une configuration adaptée à votre espace et budget.
                  </p>
                </div>
                <Link href="/configurateur" className="flex-shrink-0">
                  <Button size="lg" className="whitespace-nowrap">LANCER LE CONFIGURATEUR</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
