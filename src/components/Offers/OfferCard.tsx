import type { CSSProperties } from 'react';
import { ProductPhoto } from '../ProductPhoto/ProductPhoto';
import { AddToCartControl } from '../Menu/AddToCartControl';
import type { MenuItem } from '../../types';
import { formatPrice } from '../../utils/currency';
import './OfferCard.css';

interface OfferCardProps {
  item: MenuItem;
  index: number;
}

export function OfferCard({ item, index }: OfferCardProps) {
  const style = { '--index': index } as CSSProperties;
  const hasSavings = typeof item.originalPrice === 'number' && item.originalPrice > item.price;

  return (
    <article className="offer-card" style={style}>
      <div className="offer-card__image">
        <ProductPhoto item={item} />
        <span className="tag tag--red offer-card__badge">Special</span>
      </div>
      <div className="offer-card__body">
        <h3 className="offer-card__name">{item.name}</h3>
        <p className="offer-card__desc">{item.description}</p>
        <div className="offer-card__footer">
          <div className="offer-card__price">
            <span className="offer-card__price-now">{formatPrice(item.price)}</span>
            {hasSavings && (
              <span className="offer-card__price-was">{formatPrice(item.originalPrice as number)}</span>
            )}
          </div>
          <AddToCartControl
            item={item}
            addLabel="Add offer"
            addClassName="btn btn-primary"
            stepperClassName="stepper stepper--lg"
          />
        </div>
      </div>
    </article>
  );
}
