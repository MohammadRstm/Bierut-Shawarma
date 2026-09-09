export type Category = 'wraps' | 'plates' | 'sides' | 'desserts' | 'drinks' | 'offers';

export type IllustrationKind =
  | 'wrap'
  | 'plate'
  | 'salad'
  | 'dip'
  | 'fries'
  | 'dessert'
  | 'can'
  | 'bottle'
  | 'glass'
  | 'cup';

export type Accent = 'red' | 'blue' | 'green' | 'yellow';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  illustration: IllustrationKind;
  accent: Accent;
}

export interface CartLine {
  item: MenuItem;
  quantity: number;
}
