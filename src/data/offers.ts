import type { MenuItem } from '../types';

export const OFFERS: MenuItem[] = [
  {
    id: 'lunch-deal',
    name: 'Lunch Deal',
    description: 'Chicken tawouk wrap, fries and a can of your choice. Served every day until 5pm.',
    price: 7.0,
    originalPrice: 8.75,
    category: 'offers',
    illustration: 'wrap',
    accent: 'yellow',
  },
  {
    id: 'duo-wrap-combo',
    name: 'Duo Wrap Combo',
    description: 'Any two wraps, mixed and matched, with two cans of soda on the side.',
    price: 9.0,
    originalPrice: 11.0,
    category: 'offers',
    illustration: 'wrap',
    accent: 'red',
  },
  {
    id: 'family-feast',
    name: 'Family Feast',
    description: 'Mixed grill plate for four, with hummus, fattoush, fries and warm bread.',
    price: 28.0,
    originalPrice: 34.0,
    category: 'offers',
    illustration: 'plate',
    accent: 'blue',
  },
  {
    id: 'date-night-duo',
    name: 'Date Night Duo',
    description: 'Two mixed grill plates with two fresh lemon mints, table for two.',
    price: 23.0,
    originalPrice: 27.0,
    category: 'offers',
    illustration: 'glass',
    accent: 'green',
  },
];
