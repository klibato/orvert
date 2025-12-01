import { Breadcrumb } from "@/components/navigation/breadcrumb";
import {
  GuideViewer,
  GuideContent,
  SpecTable,
} from "@/components/labo/guide-viewer";

export default function LaboPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Le Labo", href: "/labo" },
          { label: "pH & EC", href: "/labo/ph-ec" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <GuideViewer currentGuideId="ph-ec">
          <GuideContent
            title="EC & pH EN HYDROPONIE"
            relatedProducts={[
              { name: "Testeur EC", href: "/boutique/testeur-ec" },
              { name: "pH-mètre", href: "/boutique/ph-metre" },
              { name: "Solution Calibration", href: "/boutique/calibration" },
            ]}
          >
            <section>
              <h2 className="text-xl font-mono font-bold text-[var(--text-primary)] uppercase mb-4">
                Comprendre l'EC (Électroconductivité)
              </h2>
              <p className="mb-4">
                L'électroconductivité (EC) mesure la concentration en sels
                minéraux dissous dans votre solution nutritive. Une EC correcte
                garantit que vos plantes reçoivent la quantité optimale de
                nutriments à chaque stade de croissance.
              </p>
              <p className="mb-4">
                L'EC se mesure en milliSiemens par centimètre (mS/cm) ou en
                parties par million (PPM). La conversion approximative est :
                <span className="font-mono text-[var(--accent-primary)] ml-2">
                  1 mS/cm ≈ 640 PPM (échelle 500) ou 700 PPM (échelle 700)
                </span>
              </p>

              <SpecTable
                title="TABLEAU DE RÉFÉRENCE EC"
                data={[
                  { label: "Semis / Boutures", value: "0.4 - 0.6 mS/cm" },
                  { label: "Croissance végétative", value: "1.0 - 1.4 mS/cm" },
                  { label: "Pré-floraison", value: "1.4 - 1.8 mS/cm" },
                  { label: "Floraison", value: "1.6 - 2.0 mS/cm" },
                  { label: "Rinçage final", value: "0.0 - 0.4 mS/cm" },
                ]}
              />
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-mono font-bold text-[var(--text-primary)] uppercase mb-4">
                Gestion du pH
              </h2>
              <p className="mb-4">
                Le pH détermine la disponibilité des nutriments pour vos plantes.
                En hydroponie, la plage optimale se situe entre 5.5 et 6.5, avec
                un idéal autour de 5.8-6.0.
              </p>

              <div className="my-6 p-4 border border-[var(--accent-alert)] bg-[var(--accent-alert)]/5">
                <h4 className="text-sm font-mono font-semibold text-[var(--accent-alert)] uppercase mb-2">
                  ⚠️ IMPORTANT
                </h4>
                <p className="text-sm text-[var(--text-primary)]">
                  Ajustez toujours le pH APRÈS avoir ajouté vos nutriments. Les
                  engrais modifient le pH de la solution, donc mesurer avant
                  donnera des résultats inexacts.
                </p>
              </div>

              <SpecTable
                title="PLAGES DE pH OPTIMALES"
                data={[
                  { label: "Hydroponie (NFT, DWC)", value: "5.5 - 6.0" },
                  { label: "Coco (fiber)", value: "5.8 - 6.2" },
                  { label: "Terre (organique)", value: "6.0 - 6.5" },
                  { label: "Aéroponie", value: "5.5 - 6.0" },
                ]}
              />
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-mono font-bold text-[var(--text-primary)] uppercase mb-4">
                Protocole de Mesure
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 flex-shrink-0 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-[var(--text-primary)] mb-1">
                      Calibration hebdomadaire
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Calibrez vos appareils EC et pH au minimum une fois par
                      semaine avec des solutions de calibration certifiées.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 flex-shrink-0 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-[var(--text-primary)] mb-1">
                      Mesure quotidienne
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Mesurez EC et pH de votre solution nutritive chaque jour,
                      idéalement à la même heure pour des résultats cohérents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 flex-shrink-0 border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-mono text-sm font-bold">
                    03
                  </div>
                  <div>
                    <h4 className="font-mono font-semibold text-[var(--text-primary)] mb-1">
                      Ajustements progressifs
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Faites des ajustements progressifs. Attendez 30 minutes
                      après chaque correction avant de re-mesurer.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </GuideContent>
        </GuideViewer>
      </div>
    </div>
  );
}
