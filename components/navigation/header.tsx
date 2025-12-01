"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    label: "SYSTÈMES",
    href: "/boutique/systemes",
  },
  {
    label: "ÉCLAIRAGE",
    href: "/boutique/eclairage",
  },
  {
    label: "NUTRITION",
    href: "/boutique/nutrition",
  },
  {
    label: "CLIMAT",
    href: "/boutique/climat",
  },
];

export function Header() {
  const [cartCount, setCartCount] = React.useState(3);
  const [activeFilters, setActiveFilters] = React.useState<string[]>([
    "Hydroponie",
    "Budget 200-500€",
  ]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--background-surface)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background-surface)]/80">
      {/* Main navigation */}
      <div className="flex h-12 items-center px-4 gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="w-6 h-6 bg-[var(--accent-primary)] flex items-center justify-center">
            <span className="text-[var(--background-primary)] font-mono font-bold text-xs">
              LV
            </span>
          </div>
          <span className="font-mono font-semibold text-sm hidden sm:inline-block">
            L'OR VERT
          </span>
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-[var(--border-default)]" />

        {/* Categories */}
        <nav className="flex items-center gap-1 flex-1">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--background-elevated)] transition-colors"
            >
              {category.label}
            </Link>
          ))}
        </nav>

        {/* Search & Cart */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--background-elevated)] transition-colors"
            aria-label="Rechercher"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <Link
            href="/panier"
            className="relative p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--background-elevated)] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent-primary)] text-[var(--background-primary)] text-[10px] font-mono font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Active filters bar */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 px-4 py-2 border-t border-[var(--border-default)] text-xs">
          <span className="text-[var(--text-secondary)] font-mono">
            &gt; Filtres actifs :
          </span>
          <div className="flex items-center gap-2 flex-1">
            {activeFilters.map((filter, index) => (
              <Badge key={index} variant="primary">
                {filter}
              </Badge>
            ))}
          </div>
          <button
            onClick={() => setActiveFilters([])}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono"
          >
            [Effacer]
          </button>
        </div>
      )}
    </header>
  );
}
