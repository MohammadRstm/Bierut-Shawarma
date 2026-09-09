import type { CSSProperties } from 'react';
import { Illustration } from '../Illustration/Illustration';
import type { MenuItem } from '../../types';
import { formatPrice } from '../../utils/currency';
import { AddToCartControl } from './AddToCartControl';
import './MenuItemCard.css';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const style = { '--index': index } as CSSProperties;

  return (
    <article className="menu-item-card" style={style}>
      <div className="menu-item-card__image">
        <Illustration kind={item.illustration} accent={item.accent} />
      </div>
      <div className="menu-item-card__body">
        <div className="menu-item-card__row">
          <h3 className="menu-item-card__name">{item.name}</h3>
          <span className="menu-item-card__price">{formatPrice(item.price)}</span>
        </div>
        <p className="menu-item-card__desc">{item.description}</p>
      </div>
      <div className="menu-item-card__footer">
        <AddToCartControl item={item} addClassName="btn btn-secondary menu-item-card__add" />
      </div>
    </article>
  );
}
