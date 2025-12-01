"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GuideSection {
  id: string;
  title: string;
  items: GuideItem[];
}

interface GuideItem {
  id: string;
  title: string;
  href: string;
}

const guideSections: GuideSection[] = [
  {
    id: "fundamentals",
    title: "Fondamentaux",
    items: [
      { id: "ph-ec", title: "pH & EC", href: "/labo/ph-ec" },
      { id: "spectre", title: "Spectres LED", href: "/labo/spectre-led" },
      { id: "cycles", title: "Cycles", href: "/labo/cycles" },
    ],
  },
  {
    id: "methods",
    title: "Par méthode",
    items: [
      { id: "terre", title: "Terre", href: "/labo/terre" },
      { id: "coco", title: "Coco", href: "/labo/coco" },
      { id: "hydroponie", title: "Hydroponie", href: "/labo/hydroponie" },
      { id: "aeroponie", title: "Aéroponie", href: "/labo/aeroponie" },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    items: [
      { id: "carences", title: "Carences", href: "/labo/carences" },
      { id: "parasites", title: "Parasites", href: "/labo/parasites" },
    ],
  },
];

interface GuideViewerProps {
  currentGuideId?: string;
  children: React.ReactNode;
}

export function GuideViewer({ currentGuideId, children }: GuideViewerProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>([
    "fundamentals",
    "methods",
    "troubleshooting",
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
      {/* Navigation Sidebar */}
      <aside className="space-y-1">
        <div className="sticky top-20">
          <h2 className="px-3 py-2 text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase border-b border-[var(--border-default)] mb-2">
            NAVIGATION
          </h2>
          <nav className="space-y-2">
            {guideSections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-mono text-[var(--text-primary)] hover:bg-[var(--background-elevated)] transition-colors"
                >
                  <span className="text-[var(--text-muted)]">
                    {expandedSections.includes(section.id) ? "▼" : "▶"}
                  </span>
                  {section.title}
                </button>
                {expandedSections.includes(section.id) && (
                  <div className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                          "block px-3 py-1.5 text-sm font-mono transition-colors",
                          currentGuideId === item.id
                            ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-elevated)]"
                        )}
                      >
                        • {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <main className="min-w-0">{children}</main>
    </div>
  );
}

interface GuideContentProps {
  title: string;
  children: React.ReactNode;
  relatedProducts?: Array<{ name: string; href: string }>;
}

export function GuideContent({ title, children, relatedProducts }: GuideContentProps) {
  return (
    <article className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-mono font-bold text-[var(--text-primary)] uppercase mb-2">
          {title}
        </h1>
        <div className="h-px bg-[var(--border-default)]" />
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <div className="space-y-4 text-[var(--text-primary)] leading-relaxed">
          {children}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="pt-6 border-t border-[var(--border-default)]">
          <h3 className="text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-3">
            PRODUITS LIÉS
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={product.href}>
                <Button variant="outline" size="sm">
                  {product.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

interface SpecTableProps {
  title: string;
  data: Array<{ label: string; value: string }>;
}

export function SpecTable({ title, data }: SpecTableProps) {
  return (
    <div className="my-6 border border-[var(--border-default)]">
      <div className="px-4 py-2 bg-[var(--background-elevated)] border-b border-[var(--border-default)]">
        <h4 className="text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase">
          {title}
        </h4>
      </div>
      <div className="divide-y divide-[var(--border-default)]">
        {data.map((row, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 px-4 py-2">
            <span className="font-mono text-sm text-[var(--text-secondary)]">
              {row.label}
            </span>
            <span className="font-mono text-sm text-[var(--text-primary)] font-medium">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
