import { useEffect, useMemo, useReducer, type ReactNode } from 'react';
import type { CartLine, MenuItem } from '../types';
import { CartContext, type CartContextValue } from './cart-context';

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: 'ADD'; item: MenuItem }
  | { type: 'REMOVE'; itemId: string }
  | { type: 'SET_QUANTITY'; itemId: string; quantity: number }
  | { type: 'CLEAR' };

const STORAGE_KEY = 'shawarma-house-cart';

function loadInitialState(): CartState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lines: [] };
    const parsed = JSON.parse(raw) as CartLine[];
    return { lines: parsed };
  } catch {
    return { lines: [] };
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.lines.find((line) => line.item.id === action.item.id);
      if (existing) {
        return {
          lines: state.lines.map((line) =>
            line.item.id === action.item.id ? { ...line, quantity: line.quantity + 1 } : line,
          ),
        };
      }
      return { lines: [...state.lines, { item: action.item, quantity: 1 }] };
    }
    case 'REMOVE':
      return { lines: state.lines.filter((line) => line.item.id !== action.itemId) };
    case 'SET_QUANTITY': {
      if (action.quantity <= 0) {
        return { lines: state.lines.filter((line) => line.item.id !== action.itemId) };
      }
      return {
        lines: state.lines.map((line) =>
          line.item.id === action.itemId ? { ...line, quantity: action.quantity } : line,
        ),
      };
    }
    case 'CLEAR':
      return { lines: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      /* private browsing or full storage — cart just won't persist */
    }
  }, [state.lines]);

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.lines.reduce((sum, line) => sum + line.quantity, 0);
    const totalPrice = state.lines.reduce((sum, line) => sum + line.quantity * line.item.price, 0);
    return {
      lines: state.lines,
      addItem: (item) => dispatch({ type: 'ADD', item }),
      removeItem: (itemId) => dispatch({ type: 'REMOVE', itemId }),
      setQuantity: (itemId, quantity) => dispatch({ type: 'SET_QUANTITY', itemId, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
      totalCount,
      totalPrice,
    };
  }, [state.lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
