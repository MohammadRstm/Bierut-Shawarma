import { SHOP } from '../data/shop';
import type { Language } from '../i18n/translations';
import type { CartLine } from '../types';
import { formatPrice } from './currency';

const LABELS: Record<Language, { newOrder: string; order: string; total: string }> = {
  en: { newOrder: 'New order', order: 'Order:', total: 'Total' },
  ar: { newOrder: 'طلب جديد', order: 'الطلب:', total: 'المجموع' },
};

export function buildOrderMessage(lines: CartLine[], total: number, language: Language): string {
  const labels = LABELS[language];
  const itemsBlock = lines
    .map((line) => {
      const name = language === 'ar' ? line.item.nameAr : line.item.name;
      return `${line.quantity}x ${name} — ${formatPrice(line.item.price * line.quantity)}`;
    })
    .join('\n');

  return [
    `*${labels.newOrder} — ${SHOP.name}*`,
    '',
    labels.order,
    itemsBlock,
    '',
    `${labels.total}: ${formatPrice(total)}`,
  ].join('\n');
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
