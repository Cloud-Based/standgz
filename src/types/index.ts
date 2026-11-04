export type Category =
  | "All"
  | "Best Coffee"
  | "Drinks"
  | "Snacks"
  | "Fruits"
  | "Smoothie";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  price2?: number;
  category: Exclude<Category, "All">;
  image?: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
