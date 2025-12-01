import { Breadcrumb } from "@/components/navigation/breadcrumb";
import { ProductDetail } from "@/components/product/product-detail";
import type { Product } from "@/lib/types";

// This would normally fetch from an API or database
function getProduct(id: string): Product {
  return {
    id: "bignicled-x200",
    name: "BignicLED Quantum X200",
    reference: "BNL-QX200-FR",
    price: 289.0,
    stock: "available",
    stockCount: 12,
    category: "eclairage",
    image: "/placeholder-product.jpg",
    images: [
      "/placeholder-product.jpg",
      "/placeholder-product.jpg",
      "/placeholder-product.jpg",
    ],
    description:
      "La BignicLED Quantum X200 représente le summum de la technologie LED pour la culture indoor. Développée spécifiquement pour les cultivateurs exigeants, cette lampe combine efficacité énergétique exceptionnelle et spectre complet optimisé. Chaque diode Samsung LM301H est soigneusement sélectionnée pour garantir un PPF homogène sur toute la surface de culture. Le système de dissipation thermique passif en aluminium assure une longévité maximale sans ventilateur bruyant.",
    specifications: [
      { label: "Consommation", value: "200", unit: "W ±5%" },
      { label: "Tension d'entrée", value: "220-240", unit: "V AC" },
      { label: "PPF total", value: "520", unit: "µmol/s" },
      { label: "Efficacité", value: "2.6", unit: "µmol/J" },
      { label: "Spectre", value: "Full spectrum + UV/IR" },
      { label: "Diodes", value: "Samsung LM301H" },
      { label: "Surface croissance", value: "120 x 120", unit: "cm" },
      { label: "Surface floraison", value: "100 x 100", unit: "cm" },
      { label: "Dimensions", value: "550 x 500 x 70", unit: "mm" },
      { label: "Poids", value: "4.2", unit: "kg" },
      { label: "Température de couleur", value: "3000-6500", unit: "K" },
      { label: "Indice de rendu des couleurs", value: ">90", unit: "CRI" },
      { label: "Durée de vie", value: "50000", unit: "h" },
      { label: "Garantie", value: "3", unit: "ans" },
      { label: "Certification", value: "CE, RoHS" },
    ],
    quickSpecs: [
      { label: "Puissance", value: "200W" },
      { label: "Surface floraison", value: "1m²" },
      { label: "PPF", value: "520 µmol/s" },
      { label: "Efficacité", value: "2.6 µmol/J" },
      { label: "Spectre", value: "Full + UV/IR" },
    ],
    compatibility: [
      "Tente 100x100",
      "Tente 120x120",
      "Ballast externe non requis",
      "Timer requis",
    ],
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Boutique", href: "/boutique" },
          { label: "Éclairage", href: "/boutique/eclairage" },
          { label: "LED", href: "/boutique/eclairage/led" },
          { label: product.name, href: `/boutique/produit/${product.id}` },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
