import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../hooks/useLanguage';
import { formatPrice } from '../../utils/currency';
import './CartBar.css';

interface CartBarProps {
  onOpen: () => void;
}

export function CartBar({ onOpen }: CartBarProps) {
  const { totalCount, totalPrice } = useCart();
  const { strings } = useLanguage();

  if (totalCount === 0) return null;

  return (
    <div className="cart-bar">
      <button type="button" className="cart-bar__button" onClick={onOpen}>
        <span>{strings.cart.itemsLabel(totalCount)}</span>
        <span className="cart-bar__divider" aria-hidden="true" />
        <span>{formatPrice(totalPrice)}</span>
        <span className="cart-bar__cta">{strings.cart.viewOrder}</span>
      </button>
    </div>
  );
}
