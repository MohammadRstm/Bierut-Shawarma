import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/currency';
import './CartBar.css';

interface CartBarProps {
  onOpen: () => void;
}

export function CartBar({ onOpen }: CartBarProps) {
  const { totalCount, totalPrice } = useCart();

  if (totalCount === 0) return null;

  return (
    <div className="cart-bar">
      <button type="button" className="cart-bar__button" onClick={onOpen}>
        <span>
          {totalCount} item{totalCount > 1 ? 's' : ''}
        </span>
        <span className="cart-bar__divider" aria-hidden="true" />
        <span>{formatPrice(totalPrice)}</span>
        <span className="cart-bar__cta">View order</span>
      </button>
    </div>
  );
}
