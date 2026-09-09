import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../hooks/useLanguage';
import type { MenuItem } from '../../types';

interface AddToCartControlProps {
  item: MenuItem;
  addLabel?: string;
  addClassName?: string;
  stepperClassName?: string;
}

export function AddToCartControl({
  item,
  addLabel,
  addClassName = 'btn btn-secondary',
  stepperClassName = 'stepper',
}: AddToCartControlProps) {
  const { lines, addItem, setQuantity } = useCart();
  const { language, strings } = useLanguage();
  const line = lines.find((entry) => entry.item.id === item.id);
  const name = language === 'ar' ? item.nameAr : item.name;

  if (line) {
    return (
      <div className={stepperClassName}>
        <button
          type="button"
          onClick={() => setQuantity(item.id, line.quantity - 1)}
          aria-label={strings.cart.removeOneAria(name)}
        >
          −
        </button>
        <span className="stepper__value">{line.quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity(item.id, line.quantity + 1)}
          aria-label={strings.cart.addOneMoreAria(name)}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button type="button" className={addClassName} onClick={() => addItem(item)}>
      {addLabel ?? strings.menu.addButton}
    </button>
  );
}
