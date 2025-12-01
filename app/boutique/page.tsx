import { Breadcrumb } from "@/components/navigation/breadcrumb";
import { ProductGrid } from "@/components/product/product-grid";
import type { Product } from "@/lib/types";

// Sample products data
const sampleProducts: Product[] = [
  {
    id: "bignicled-x200",
    name: "BignicLED Quantum X200",
    reference: "BNL-QX200-FR",
    price: 289.0,
    stock: "available",
    stockCount: 12,
    category: "eclairage",
    image: "/placeholder-product.jpg",
    images: ["/placeholder-product.jpg"],
    description:
      "Lampe LED haute performance pour culture indoor. Spectre complet optimisé.",
    specifications: [
      { label: "Puissance", value: "200", unit: "W" },
      { label: "PPF", value: "520", unit: "µmol/s" },
      { label: "Efficacité", value: "2.6", unit: "µmol/J" },
    ],
    quickSpecs: [
      { label: "Puissance", value: "200W" },
      { label: "Surface", value: "1m²" },
      { label: "PPF", value: "2.6µmol/J" },
    ],
  },
  {
    id: "nft-system-pro",
    name: "Système NFT Pro 120",
    reference: "NFT-PRO-120",
    price: 159.0,
    stock: "available",
    stockCount: 8,
    category: "systemes",
    image: "/placeholder-product.jpg",
    images: ["/placeholder-product.jpg"],
    description: "Système hydroponique NFT professionnel pour 12 plantes.",
    specifications: [
      { label: "Capacité", value: "12", unit: "plantes" },
      { label: "Dimensions", value: "120x60x40", unit: "cm" },
    ],
    quickSpecs: [
      { label: "Type", value: "NFT" },
      { label: "Capacité", value: "12 plantes" },
      { label: "Taille", value: "120cm" },
    ],
  },
  {
    id: "extracteur-tt-150",
    name: "Extracteur TT Silent 150mm",
    reference: "TT-SIL-150",
    price: 89.0,
    stock: "low",
    stockCount: 3,
    category: "climat",
    image: "/placeholder-product.jpg",
    images: ["/placeholder-product.jpg"],
    description: "Extracteur silencieux 150mm avec contrôleur de vitesse intégré.",
    specifications: [
      { label: "Diamètre", value: "150", unit: "mm" },
      { label: "Débit", value: "405", unit: "m³/h" },
    ],
    quickSpecs: [
      { label: "Ø", value: "150mm" },
      { label: "Débit", value: "405m³/h" },
      { label: "Bruit", value: "32dB" },
    ],
  },
  {
    id: "aptus-starter",
    name: "Pack Starter APTUS",
    reference: "APT-START-01",
    price: 65.0,
    stock: "available",
    stockCount: 15,
    category: "nutrition",
    image: "/placeholder-product.jpg",
    images: ["/placeholder-product.jpg"],
    description: "Kit complet d'engrais minéraux pour débutants.",
    specifications: [
      { label: "NPK Base", value: "3-1-6" },
      { label: "Volume", value: "3x250", unit: "ml" },
    ],
    quickSpecs: [
      { label: "Type", value: "Minéral" },
      { label: "Kit", value: "Complet" },
      { label: "Volume", value: "3x250ml" },
    ],
  },
];

export default function BoutiquePage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Boutique", href: "/boutique" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-mono font-bold text-[var(--text-primary)] uppercase mb-2">
              CATALOGUE PRODUITS
            </h1>
            <p className="text-sm text-[var(--text-secondary)] font-mono">
              {sampleProducts.length} produits disponibles
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 bg-[var(--background-surface)] border border-[var(--border-default)] text-[var(--text-primary)] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]">
              <option>Trier par: Pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </div>
        </div>
        <ProductGrid products={sampleProducts} />
      </div>
    </div>
  );
}
