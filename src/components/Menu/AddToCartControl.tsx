import { useCart } from '../../hooks/useCart';
import type { MenuItem } from '../../types';

interface AddToCartControlProps {
  item: MenuItem;
  addLabel?: string;
  addClassName?: string;
  stepperClassName?: string;
}

export function AddToCartControl({
  item,
  addLabel = 'Add to order',
  addClassName = 'btn btn-secondary',
  stepperClassName = 'stepper',
}: AddToCartControlProps) {
  const { lines, addItem, setQuantity } = useCart();
  const line = lines.find((entry) => entry.item.id === item.id);

  if (line) {
    return (
      <div className={stepperClassName}>
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
    );
  }

  return (
    <button type="button" className={addClassName} onClick={() => addItem(item)}>
      {addLabel}
    </button>
  );
}
