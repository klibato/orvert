import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price in EUR
export function formatPrice(price: number, includeVAT: boolean = true): string {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(price);

  return includeVAT ? formattedPrice : `${formattedPrice} HT`;
}

// Calculate price without VAT (20% in France)
export function priceWithoutVAT(price: number): number {
  return price / 1.20;
}

// Format technical specifications
export function formatSpec(value: number | string, unit?: string): string {
  if (typeof value === 'number') {
    return unit ? `${value} ${unit}` : value.toString();
  }
  return value;
}
