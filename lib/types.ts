// Product types
export type StockLevel = 'available' | 'low' | 'unavailable';

export interface Product {
  id: string;
  name: string;
  reference: string;
  price: number;
  stock: StockLevel;
  stockCount: number;
  category: string;
  subcategory?: string;
  image: string;
  images: string[];
  description: string;
  specifications: Specification[];
  compatibility?: string[];
  quickSpecs?: QuickSpec[];
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export interface QuickSpec {
  icon?: string;
  label: string;
  value: string;
}

// Configurator types
export type CultivationMethod = 'terre' | 'coco' | 'hydro' | 'aero';
export type ExperienceLevel = 'debutant' | 'confirme' | 'expert';

export interface ConfiguratorState {
  spaceSize: string;
  method: CultivationMethod;
  budget: number;
  level: ExperienceLevel;
}

export interface ConfigurationItem {
  product: Product;
  required: boolean;
  alternatives?: Product[];
}

// Navigation types
export interface NavCategory {
  label: string;
  href: string;
  subcategories?: NavSubcategory[];
}

export interface NavSubcategory {
  label: string;
  href: string;
}

// Guide types
export interface Guide {
  id: string;
  title: string;
  category: string;
  content: string;
  relatedProducts?: string[];
}
