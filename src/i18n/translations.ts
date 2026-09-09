export type Language = 'en' | 'ar';

export interface Strings {
  languageToggle: { en: string; ar: string };
  nav: { offers: string; menu: string; visit: string };
  hero: { titleLine1: string; titleLine2: string; subtitleRest: string; viewMenu: string };
  offers: { eyebrow: string; title: string; badge: string; addButton: string };
  menu: {
    eyebrow: string;
    title: string;
    addButton: string;
    categories: { all: string; wraps: string; plates: string; sides: string; desserts: string; drinks: string };
  };
  cart: {
    openAria: string;
    closeAria: string;
    yourOrder: string;
    orderSent: string;
    empty: string;
    total: string;
    sendButton: string;
    sentMessage: string;
    done: string;
    remove: string;
    removeOneAria: (name: string) => string;
    addOneMoreAria: (name: string) => string;
    itemsLabel: (count: number) => string;
    viewOrder: string;
  };
  footer: { title: string; whatsappButton: string };
}

export const translations: Record<Language, Strings> = {
  en: {
    languageToggle: { en: 'EN', ar: 'AR' },
    nav: { offers: 'Offers', menu: 'Menu', visit: 'Visit' },
    hero: {
      titleLine1: 'Shawarma off the spit,',
      titleLine2: 'wrapped while you wait.',
      subtitleRest:
        'Build your order below, send it straight to our WhatsApp, and we will have it ready for pickup or delivery.',
      viewMenu: 'View Menu',
    },
    offers: {
      eyebrow: 'Special offers',
      title: 'Deals worth ordering for.',
      badge: 'Special',
      addButton: 'Add offer',
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Everything made to order.',
      addButton: 'Add to order',
      categories: {
        all: 'All',
        wraps: 'Wraps',
        plates: 'Plates',
        sides: 'Sides & Salads',
        desserts: 'Desserts',
        drinks: 'Drinks',
      },
    },
    cart: {
      openAria: 'Open cart',
      closeAria: 'Close cart',
      yourOrder: 'Your order',
      orderSent: 'Order sent',
      empty: 'Nothing here yet. Add something from the menu.',
      total: 'Total',
      sendButton: 'Send order on WhatsApp',
      sentMessage:
        "WhatsApp should be open with your order ready to send. Tap send there and let us know your name, pickup or delivery, and address if needed — we'll confirm your order on WhatsApp.",
      done: 'Done',
      remove: 'Remove',
      removeOneAria: (name) => `Remove one ${name}`,
      addOneMoreAria: (name) => `Add one more ${name}`,
      itemsLabel: (count) => `${count} item${count === 1 ? '' : 's'}`,
      viewOrder: 'View order',
    },
    footer: { title: 'Come by, or send us the order.', whatsappButton: 'Message us on WhatsApp' },
  },
  ar: {
    languageToggle: { en: 'EN', ar: 'ع' },
    nav: { offers: 'العروض', menu: 'القائمة', visit: 'زورونا' },
    hero: {
      titleLine1: 'شاورما طازجة من السيخ،',
      titleLine2: 'تُلف وأنت تنتظر.',
      subtitleRest: 'جهّز طلبك أدناه وأرسله مباشرة عبر واتساب، وسنجهزه لك للاستلام أو التوصيل.',
      viewMenu: 'عرض القائمة',
    },
    offers: {
      eyebrow: 'عروض خاصة',
      title: 'عروض تستحق الطلب.',
      badge: 'عرض خاص',
      addButton: 'أضف العرض',
    },
    menu: {
      eyebrow: 'القائمة',
      title: 'كل شيء يُحضَّر عند الطلب.',
      addButton: 'أضف إلى الطلب',
      categories: {
        all: 'الكل',
        wraps: 'لفائف',
        plates: 'أطباق',
        sides: 'مقبلات وسلطات',
        desserts: 'حلويات',
        drinks: 'مشروبات',
      },
    },
    cart: {
      openAria: 'فتح السلة',
      closeAria: 'إغلاق السلة',
      yourOrder: 'طلبك',
      orderSent: 'تم إرسال الطلب',
      empty: 'لا شيء هنا بعد. أضف شيئًا من القائمة.',
      total: 'المجموع',
      sendButton: 'إرسال الطلب عبر واتساب',
      sentMessage:
        'من المفترض أن يكون واتساب قد فتح مع طلبك جاهزًا للإرسال. اضغط إرسال هناك وأخبرنا باسمك، وإذا كان الطلب للاستلام أو التوصيل مع العنوان إذا لزم — وسنؤكد طلبك عبر واتساب.',
      done: 'تم',
      remove: 'إزالة',
      removeOneAria: (name) => `إزالة واحدة من ${name}`,
      addOneMoreAria: (name) => `إضافة واحدة أخرى من ${name}`,
      itemsLabel: (count) => (count === 1 ? 'عنصر واحد' : `${count} عناصر`),
      viewOrder: 'عرض الطلب',
    },
    footer: { title: 'مرّوا علينا، أو أرسلوا الطلب.', whatsappButton: 'راسلونا عبر واتساب' },
  },
};
