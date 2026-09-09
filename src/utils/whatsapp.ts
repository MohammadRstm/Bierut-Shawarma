import { SHOP } from '../data/shop';
import type { CartLine, OrderDetails } from '../types';
import { formatPrice } from './currency';

export function buildOrderMessage(lines: CartLine[], details: OrderDetails, total: number): string {
  const itemsBlock = lines
    .map((line) => `${line.quantity}x ${line.item.name} — ${formatPrice(line.item.price * line.quantity)}`)
    .join('\n');

  const parts = [`*New order — ${SHOP.name}*`, '', `Customer: ${details.name.trim()}`];

  if (details.phone.trim()) {
    parts.push(`Phone: ${details.phone.trim()}`);
  }

  parts.push(`Type: ${details.orderType === 'delivery' ? 'Delivery' : 'Pickup'}`);

  if (details.orderType === 'delivery' && details.address.trim()) {
    parts.push(`Address: ${details.address.trim()}`);
  }

  parts.push('', 'Order:', itemsBlock, '', `Total: ${formatPrice(total)}`);

  if (details.notes.trim()) {
    parts.push('', `Notes: ${details.notes.trim()}`);
  }

  return parts.join('\n');
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
