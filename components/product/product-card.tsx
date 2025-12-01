"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getStockColor = () => {
    switch (product.stock) {
      case 'available':
        return 'led-available';
      case 'low':
        return 'led-low';
      case 'unavailable':
        return 'led-unavailable';
      default:
        return 'led-available';
    }
  };

  const getStockLabel = () => {
    switch (product.stock) {
      case 'available':
        return 'En stock';
      case 'low':
        return 'Stock limité';
      case 'unavailable':
        return 'Rupture';
      default:
        return 'En stock';
    }
  };

  return (
    <Link
      href={`/boutique/produit/${product.id}`}
      className={cn(
        "group block bg-[var(--background-surface)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] transition-all",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-[var(--background-elevated)] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 space-y-2">
        {/* Product Name */}
        <h3 className="font-mono text-sm font-semibold text-[var(--text-primary)] line-clamp-2">
          {product.name}
        </h3>

        {/* Divider */}
        <div className="h-px bg-[var(--border-default)]" />

        {/* Quick Specs */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-secondary)]">
          {product.quickSpecs && product.quickSpecs.length > 0 && (
            <>
              {product.quickSpecs.slice(0, 3).map((spec, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>•</span>}
                  <span>{spec.value}</span>
                </React.Fragment>
              ))}
            </>
          )}
        </div>

        {/* Stock & Price Row */}
        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-default)]">
          {/* Stock Indicator */}
          <div className="flex items-center gap-1.5">
            <span className={cn("led-indicator", getStockColor())} />
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">
              {getStockLabel()}
            </span>
          </div>

          {/* Price & Add Button */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
              className="w-6 h-6 flex items-center justify-center bg-[var(--accent-primary)] text-[var(--background-primary)] hover:bg-[var(--accent-primary-hover)] transition-colors"
              aria-label="Ajouter au panier"
            >
              <span className="text-xs font-bold">+</span>
            </button>
          </div>
        </div>

        {/* Expanded specs on hover */}
        {isHovered && product.specifications && product.specifications.length > 0 && (
          <div className="pt-2 border-t border-[var(--border-default)] space-y-1">
            {product.specifications.slice(0, 3).map((spec, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[10px] font-mono"
              >
                <span className="text-[var(--text-muted)]">{spec.label}</span>
                <span className="text-[var(--text-secondary)]">
                  {spec.value} {spec.unit}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
