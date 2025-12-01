"use client";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice, priceWithoutVAT } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const getStockBars = () => {
    const maxBars = 5;
    const filledBars = Math.min(Math.ceil((product.stockCount / 20) * maxBars), maxBars);
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: maxBars }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2 h-2 border border-[var(--border-default)]",
              i < filledBars ? "bg-[var(--status-available)]" : "bg-transparent"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square bg-[var(--background-surface)] border border-[var(--border-default)]">
          <Image
            src={product.images[currentImage] || product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex items-center gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "relative w-16 h-16 border transition-colors",
                currentImage === index
                  ? "border-[var(--accent-primary)]"
                  : "border-[var(--border-default)]"
              )}
            >
              <Image
                src={image}
                alt={`${product.name} - Vue ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Quick Specs */}
        {product.quickSpecs && product.quickSpecs.length > 0 && (
          <div className="p-4 bg-[var(--background-surface)] border border-[var(--border-default)]">
            <h4 className="font-mono text-xs font-semibold text-[var(--text-secondary)] uppercase mb-3">
              SPECS RAPIDES
            </h4>
            <div className="space-y-2">
              {product.quickSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-[var(--accent-primary)]">•</span>
                  <span className="font-mono text-[var(--text-primary)]">
                    {spec.label} : {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column - Product Info */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-mono text-2xl font-bold text-[var(--text-primary)] uppercase mb-2">
            {product.name}
          </h1>
          <div className="h-px bg-[var(--border-default)] mb-3" />
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <span>Référence: {product.reference}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-mono text-[var(--text-secondary)]">Stock:</span>
            {getStockBars()}
            <span className="text-xs font-mono text-[var(--text-muted)]">
              ({product.stockCount} unités)
            </span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="p-4 bg-[var(--background-surface)] border border-[var(--border-default)]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-mono font-bold text-[var(--text-primary)]">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm font-mono text-[var(--text-secondary)]">
              HT: {formatPrice(priceWithoutVAT(product.price), false)}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center border border-[var(--border-default)]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-[var(--background-elevated)] transition-colors"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center bg-transparent border-x border-[var(--border-default)] py-2 font-mono"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-[var(--background-elevated)] transition-colors"
              >
                +
              </button>
            </div>
            <Button className="flex-1 h-10">AJOUTER AU PANIER</Button>
          </div>
        </div>

        {/* Compatibility */}
        {product.compatibility && product.compatibility.length > 0 && (
          <div>
            <h3 className="text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-2">
              Compatible avec:
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.compatibility.map((item, index) => (
                <Badge key={index} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs.Root defaultValue="description" className="w-full">
          <Tabs.List className="flex border-b border-[var(--border-default)]">
            {["DESCRIPTION", "SPECIFICATIONS", "COMPATIBILITÉ", "GUIDES"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab.toLowerCase()}
                className="px-4 py-3 text-xs font-mono font-medium text-[var(--text-secondary)] border-b-2 border-transparent data-[state=active]:border-[var(--accent-primary)] data-[state=active]:text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Tabs.Content value="description" className="py-4">
            <p className="text-[var(--text-primary)] leading-relaxed">
              {product.description}
            </p>
          </Tabs.Content>

          <Tabs.Content value="specifications" className="py-4">
            <table className="specs-table">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index}>
                    <th className="w-1/2">{spec.label}</th>
                    <td>
                      {spec.value} {spec.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tabs.Content>

          <Tabs.Content value="compatibilité" className="py-4">
            <p className="text-[var(--text-secondary)]">
              Liste de compatibilité à venir...
            </p>
          </Tabs.Content>

          <Tabs.Content value="guides" className="py-4">
            <p className="text-[var(--text-secondary)]">
              Guides d'utilisation à venir...
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
