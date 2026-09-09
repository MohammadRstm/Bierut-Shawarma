import type { Category, MenuItem } from '../types';

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'wraps', label: 'Wraps' },
  { id: 'plates', label: 'Plates' },
  { id: 'sides', label: 'Sides & Salads' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

export const MENU: MenuItem[] = [
  // Wraps
  {
    id: 'chicken-shawarma-wrap',
    name: 'Chicken Shawarma Wrap',
    description: 'Marinated chicken thigh, shaved off the spit and rolled in saj bread with garlic sauce and pickles.',
    price: 4.5,
    category: 'wraps',
    illustration: 'wrap',
    accent: 'yellow',
  },

  // Plates
  {
    id: 'chicken-shawarma-plate',
    name: 'Chicken Shawarma Plate',
    description: 'Shaved chicken shawarma over vermicelli rice, with garlic sauce and pickled turnip.',
    price: 8.5,
    category: 'plates',
    illustration: 'plate',
    accent: 'yellow',
  },

  // Sides & Salads
  {
    id: 'hummus',
    name: 'Hummus',
    description: 'Blended chickpeas, tahini and lemon, finished with a swirl of olive oil.',
    price: 4.0,
    category: 'sides',
    illustration: 'dip',
    accent: 'yellow',
  },
  {
    id: 'fattoush',
    name: 'Fattoush',
    description: 'Romaine, radish and tomato with toasted saj bread, tossed in pomegranate molasses.',
    price: 4.75,
    category: 'sides',
    illustration: 'salad',
    accent: 'green',
  },
  {
    id: 'fries',
    name: 'French Fries',
    description: 'Hand-cut potatoes, fried crisp and salted.',
    price: 3.0,
    category: 'sides',
    illustration: 'fries',
    accent: 'yellow',
  },

  // Desserts
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Layered filo pastry with crushed pistachio, soaked in orange blossom syrup.',
    price: 3.5,
    category: 'desserts',
    illustration: 'dessert',
    accent: 'red',
  },

  // Drinks
  {
    id: 'pepsi',
    name: 'Pepsi',
    description: 'Classic 330ml can, ice cold.',
    price: 1.5,
    category: 'drinks',
    illustration: 'can',
    accent: 'blue',
  },
  {
    id: 'mirinda',
    name: 'Mirinda Orange',
    description: 'Orange soda, 330ml can.',
    price: 1.5,
    category: 'drinks',
    illustration: 'can',
    accent: 'yellow',
  },
  {
    id: '7up',
    name: '7Up',
    description: 'Lemon-lime soda, 330ml can.',
    price: 1.5,
    category: 'drinks',
    illustration: 'can',
    accent: 'green',
  },
  {
    id: 'water',
    name: 'Bottled Water',
    description: 'Still water, 500ml.',
    price: 1.0,
    category: 'drinks',
    illustration: 'bottle',
    accent: 'blue',
  },
  {
    id: 'sparkling-water',
    name: 'Sparkling Water',
    description: 'Chilled sparkling water, 330ml.',
    price: 1.75,
    category: 'drinks',
    illustration: 'bottle',
    accent: 'blue',
  },
  {
    id: 'ayran',
    name: 'Ayran',
    description: 'Chilled yogurt drink, lightly salted.',
    price: 2.0,
    category: 'drinks',
    illustration: 'cup',
    accent: 'yellow',
  },
  {
    id: 'limonana',
    name: 'Fresh Lemon Mint',
    description: 'Fresh lemon juice blended with mint, made to order.',
    price: 3.0,
    category: 'drinks',
    illustration: 'glass',
    accent: 'green',
  },
  {
    id: 'jallab',
    name: 'Jallab',
    description: 'Date and grape molasses with rosewater over ice, topped with pine nuts.',
    price: 3.0,
    category: 'drinks',
    illustration: 'cup',
    accent: 'red',
  },
  {
    id: 'orange-juice',
    name: 'Fresh Orange Juice',
    description: 'Squeezed to order, no added sugar.',
    price: 3.5,
    category: 'drinks',
    illustration: 'glass',
    accent: 'yellow',
  },
];
