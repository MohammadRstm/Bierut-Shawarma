import { SHOP } from '../data/shop';
import type { CartLine } from '../types';
import { formatPrice } from './currency';

export function buildOrderMessage(lines: CartLine[], total: number): string {
  const itemsBlock = lines
    .map((line) => `${line.quantity}x ${line.item.name} — ${formatPrice(line.item.price * line.quantity)}`)
    .join('\n');

  return [`*New order — ${SHOP.name}*`, '', 'Order:', itemsBlock, '', `Total: ${formatPrice(total)}`].join('\n');
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
