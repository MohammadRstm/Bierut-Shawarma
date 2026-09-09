import type { CSSProperties } from 'react';
import { ProductPhoto } from '../ProductPhoto/ProductPhoto';
import { useLanguage } from '../../hooks/useLanguage';
import type { MenuItem } from '../../types';
import { formatPrice } from '../../utils/currency';
import { AddToCartControl } from './AddToCartControl';
import './MenuItemCard.css';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const { language, strings } = useLanguage();
  const style = { '--index': index } as CSSProperties;

  return (
    <article className="menu-item-card" style={style}>
      <div className="menu-item-card__image">
        <ProductPhoto item={item} />
      </div>
      <div className="menu-item-card__body">
        <div className="menu-item-card__row">
          <h3 className="menu-item-card__name">{language === 'ar' ? item.nameAr : item.name}</h3>
          <span className="menu-item-card__price">{formatPrice(item.price)}</span>
        </div>
        <p className="menu-item-card__desc">{language === 'ar' ? item.descriptionAr : item.description}</p>
      </div>
      <div className="menu-item-card__footer">
        <AddToCartControl
          item={item}
          addLabel={strings.menu.addButton}
          addClassName="btn btn-secondary menu-item-card__add"
        />
      </div>
    </article>
  );
}
