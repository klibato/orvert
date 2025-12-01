import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] py-3 px-4 border-b border-[var(--border-default)]",
        className
      )}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && <span className="text-[var(--text-muted)]">/</span>}
          {index === items.length - 1 ? (
            <span className="text-[var(--text-primary)]">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-[var(--accent-primary)] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
