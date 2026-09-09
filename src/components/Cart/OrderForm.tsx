import { useState, type FormEvent } from 'react';
import { useCart } from '../../hooks/useCart';
import { buildOrderMessage, buildWhatsAppLink } from '../../utils/whatsapp';
import type { OrderDetails, OrderType } from '../../types';

interface OrderFormProps {
  onBack: () => void;
  onSent: () => void;
}

type Errors = Partial<Record<keyof OrderDetails, string>>;

function validate(details: OrderDetails): Errors {
  const errors: Errors = {};
  if (!details.name.trim()) {
    errors.name = 'Let us know your name.';
  }
  if (details.orderType === 'delivery' && !details.address.trim()) {
    errors.address = 'Add a delivery address.';
  }
  return errors;
}

const INITIAL_DETAILS: OrderDetails = {
  name: '',
  phone: '',
  orderType: 'pickup',
  address: '',
  notes: '',
};

const ORDER_TYPES: { id: OrderType; label: string }[] = [
  { id: 'pickup', label: 'Pickup' },
  { id: 'delivery', label: 'Delivery' },
];

export function OrderForm({ onBack, onSent }: OrderFormProps) {
  const { lines, totalPrice } = useCart();
  const [details, setDetails] = useState<OrderDetails>(INITIAL_DETAILS);
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof OrderDetails>(key: K, value: OrderDetails[K]) {
    setDetails((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(details);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = buildOrderMessage(lines, details, totalPrice);
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    onSent();
  }

  return (
    <form className="order-form" onSubmit={handleSubmit} noValidate>
      <div className="cart-drawer__body">
        <label className="order-form__field">
          <span>Name</span>
          <input
            type="text"
            value={details.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Your name"
          />
          {errors.name && <span className="order-form__error">{errors.name}</span>}
        </label>

        <label className="order-form__field">
          <span>Phone (optional)</span>
          <input
            type="tel"
            value={details.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="+961 xx xxx xxx"
          />
        </label>

        <div className="order-form__field">
          <span>Order type</span>
          <div className="order-form__toggle">
            {ORDER_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`order-form__toggle-btn${details.orderType === type.id ? ' is-active' : ''}`}
                onClick={() => update('orderType', type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {details.orderType === 'delivery' && (
          <label className="order-form__field">
            <span>Delivery address</span>
            <input
              type="text"
              value={details.address}
              onChange={(event) => update('address', event.target.value)}
              placeholder="Building, street, area"
            />
            {errors.address && <span className="order-form__error">{errors.address}</span>}
          </label>
        )}

        <label className="order-form__field">
          <span>Notes (optional)</span>
          <textarea
            value={details.notes}
            onChange={(event) => update('notes', event.target.value)}
            placeholder="Extra garlic sauce, no pickles, etc."
            rows={3}
          />
        </label>
      </div>

      <div className="cart-drawer__footer">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="btn btn-primary cart-drawer__continue">
          Send order on WhatsApp
        </button>
      </div>
    </form>
  );
}
