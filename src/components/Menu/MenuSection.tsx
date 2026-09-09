import { useMemo, useState } from 'react';
import { CATEGORIES, MENU } from '../../data/menu';
import type { Category } from '../../types';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { MenuItemCard } from './MenuItemCard';
import './MenuSection.css';

export function MenuSection() {
  const [active, setActive] = useState<Category | 'all'>('all');
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  const items = useMemo(() => {
    if (active === 'all') return MENU;
    return MENU.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className={`menu-section__header${visible ? ' is-visible' : ''}`} ref={ref}>
          <span className="eyebrow">Menu</span>
          <h2 className="menu-section__title">Everything made to order.</h2>
        </div>

        <div className="menu-section__filters" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active === category.id}
              className={`menu-filter${active === category.id ? ' menu-filter--active' : ''}`}
              onClick={() => setActive(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {items.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
