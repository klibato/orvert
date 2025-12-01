import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplifié */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-[1400px] mx-auto px-8 py-24">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 mb-8 border border-[var(--accent-primary)]">
              <span className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider">
                MATÉRIEL PROFESSIONNEL
              </span>
            </div>
          </div>

          <h1 className="text-6xl font-mono font-bold text-[var(--text-primary)] uppercase mb-6 leading-tight">
            ÉQUIPEMENT DE CULTURE
          </h1>
          <h2 className="text-6xl font-mono font-bold text-[var(--accent-primary)] uppercase mb-12 leading-tight">
            HAUTE PRÉCISION
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl leading-relaxed">
            Systèmes hydroponiques, éclairage LED, contrôle climatique.<br />
            Matériel technique pour cultivateurs exigeants.
          </p>

          <div className="flex gap-4 mb-20">
            <Link href="/boutique">
              <Button size="lg" className="px-8 py-6 text-base">
                VOIR LE CATALOGUE
              </Button>
            </Link>
            <Link href="/configurateur">
              <Button variant="outline" size="lg" className="px-8 py-6 text-base">
                CONFIGURATEUR
              </Button>
            </Link>
          </div>

          {/* Stats - Inline horizontale */}
          <div className="grid grid-cols-4 gap-6">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                  500+
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                  Produits
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                  24H
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                  Livraison
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                  3 ANS
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                  Garantie
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-mono font-bold text-[var(--accent-primary)] mb-2">
                  10K+
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                  Clients
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-[var(--border-default)] bg-[var(--background-surface)]">
        <div className="max-w-[1400px] mx-auto px-8 py-20">
          <h2 className="text-2xl font-mono font-bold text-[var(--text-primary)] uppercase mb-12 tracking-wider">
            CATÉGORIES PRINCIPALES
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <Link href="/boutique/eclairage" className="group">
              <Card className="h-full hover:border-[var(--accent-primary)] transition-all border-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">💡</div>
                  <h3 className="text-base font-mono font-bold text-[var(--text-primary)] uppercase mb-3 tracking-wide">
                    ÉCLAIRAGE
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                    LED haute efficacité
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/boutique/systemes" className="group">
              <Card className="h-full hover:border-[var(--accent-primary)] transition-all border-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">⚙️</div>
                  <h3 className="text-base font-mono font-bold text-[var(--text-primary)] uppercase mb-3 tracking-wide">
                    SYSTÈMES HYDRO
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                    NFT, DWC, Aéroponie
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/boutique/nutrition" className="group">
              <Card className="h-full hover:border-[var(--accent-primary)] transition-all border-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">🧪</div>
                  <h3 className="text-base font-mono font-bold text-[var(--text-primary)] uppercase mb-3 tracking-wide">
                    NUTRITION
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                    Engrais & additifs
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/boutique/climat" className="group">
              <Card className="h-full hover:border-[var(--accent-primary)] transition-all border-2">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">🌡️</div>
                  <h3 className="text-base font-mono font-bold text-[var(--text-primary)] uppercase mb-3 tracking-wide">
                    CLIMAT
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-mono leading-relaxed">
                    Extraction, ventilation
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-[var(--border-default)]">
        <div className="max-w-[1400px] mx-auto px-8 py-20">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--accent-primary)] font-mono text-base font-bold">01</span>
                </div>
                <h3 className="font-mono font-bold text-[var(--text-primary)] uppercase text-base tracking-wide">
                  EXPERTISE TECHNIQUE
                </h3>
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed pl-16">
                Conseil personnalisé pour chaque configuration. Guides détaillés et support technique inclus.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--accent-primary)] font-mono text-base font-bold">02</span>
                </div>
                <h3 className="font-mono font-bold text-[var(--text-primary)] uppercase text-base tracking-wide">
                  STOCK PERMANENT
                </h3>
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed pl-16">
                Inventaire en temps réel. Livraison 24-48h partout en France. Emballage discret garanti.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--accent-primary)] font-mono text-base font-bold">03</span>
                </div>
                <h3 className="font-mono font-bold text-[var(--text-primary)] uppercase text-base tracking-wide">
                  GARANTIE ÉTENDUE
                </h3>
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed pl-16">
                3 ans sur tout l'éclairage LED. SAV réactif. Pièces détachées disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[var(--border-default)] bg-[var(--background-surface)]">
        <div className="max-w-[1400px] mx-auto px-8 py-20">
          <Card className="border-2">
            <CardContent className="p-12">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-mono font-bold text-[var(--text-primary)] uppercase mb-4 tracking-wide">
                    BESOIN D'UNE CONFIGURATION COMPLÈTE ?
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                    Utilisez notre configurateur intelligent pour obtenir une configuration adaptée à votre espace et budget.
                  </p>
                </div>
                <Link href="/configurateur">
                  <Button size="lg" className="px-8 py-6 text-base whitespace-nowrap ml-8">
                    LANCER LE CONFIGURATEUR
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
