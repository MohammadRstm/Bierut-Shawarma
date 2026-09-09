import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../hooks/useLanguage';
import { ProductPhoto } from '../ProductPhoto/ProductPhoto';
import { formatPrice } from '../../utils/currency';
import type { CartLine } from '../../types';

export function CartLineRow({ line }: { line: CartLine }) {
  const { setQuantity, removeItem } = useCart();
  const { language, strings } = useLanguage();
  const name = language === 'ar' ? line.item.nameAr : line.item.name;

  return (
    <li className="cart-line">
      <div className="cart-line__image">
        <ProductPhoto item={line.item} />
      </div>
      <div className="cart-line__info">
        <span className="cart-line__name">{name}</span>
        <span className="cart-line__price">{formatPrice(line.item.price * line.quantity)}</span>
      </div>
      <div className="cart-line__controls">
        <div className="stepper stepper--sm">
          <button
            type="button"
            onClick={() => setQuantity(line.item.id, line.quantity - 1)}
            aria-label={strings.cart.removeOneAria(name)}
          >
            −
          </button>
          <span className="stepper__value">{line.quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(line.item.id, line.quantity + 1)}
            aria-label={strings.cart.addOneMoreAria(name)}
          >
            +
          </button>
        </div>
        <button type="button" className="cart-line__remove" onClick={() => removeItem(line.item.id)}>
          {strings.cart.remove}
        </button>
      </div>
    </li>
  );
}
