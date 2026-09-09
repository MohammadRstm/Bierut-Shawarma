import { useCart } from '../../hooks/useCart';
import { Illustration } from '../Illustration/Illustration';
import { formatPrice } from '../../utils/currency';
import type { CartLine } from '../../types';

export function CartLineRow({ line }: { line: CartLine }) {
  const { setQuantity, removeItem } = useCart();

  return (
    <li className="cart-line">
      <div className="cart-line__image">
        <Illustration kind={line.item.illustration} accent={line.item.accent} />
      </div>
      <div className="cart-line__info">
        <span className="cart-line__name">{line.item.name}</span>
        <span className="cart-line__price">{formatPrice(line.item.price * line.quantity)}</span>
      </div>
      <div className="cart-line__controls">
        <div className="stepper stepper--sm">
          <button
            type="button"
            onClick={() => setQuantity(line.item.id, line.quantity - 1)}
            aria-label={`Remove one ${line.item.name}`}
          >
            −
          </button>
          <span className="stepper__value">{line.quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(line.item.id, line.quantity + 1)}
            aria-label={`Add one more ${line.item.name}`}
          >
            +
          </button>
        </div>
        <button type="button" className="cart-line__remove" onClick={() => removeItem(line.item.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}
