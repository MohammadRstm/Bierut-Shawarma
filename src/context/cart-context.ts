import { createContext } from 'react';
import type { CartLine, MenuItem } from '../types';

export interface CartContextValue {
  lines: CartLine[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  setQuantity: (itemId: string, quantity: number) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextValue | null>(null);
