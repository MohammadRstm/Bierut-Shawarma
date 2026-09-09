import type { CSSProperties } from 'react';
import { useCart } from '../../hooks/useCart';
import { Illustration } from '../Illustration/Illustration';
import type { MenuItem } from '../../types';
import { formatPrice } from '../../utils/currency';
import './MenuItemCard.css';

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const { lines, addItem, setQuantity } = useCart();
  const line = lines.find((entry) => entry.item.id === item.id);
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
        {line ? (
          <div className="stepper">
            <button
              type="button"
              onClick={() => setQuantity(item.id, line.quantity - 1)}
              aria-label={`Remove one ${item.name}`}
            >
              −
            </button>
            <span className="stepper__value">{line.quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(item.id, line.quantity + 1)}
              aria-label={`Add one more ${item.name}`}
            >
              +
            </button>
          </div>
        ) : (
          <button type="button" className="btn btn-secondary menu-item-card__add" onClick={() => addItem(item)}>
            Add to order
          </button>
        )}
      </div>
    </article>
  );
}
