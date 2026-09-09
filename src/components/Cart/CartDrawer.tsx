import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/currency';
import { CartLineRow } from './CartLineRow';
import { OrderForm } from './OrderForm';
import './CartDrawer.css';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type Step = 'cart' | 'details' | 'sent';

const TITLES: Record<Step, string> = {
  cart: 'Your order',
  details: 'Your details',
  sent: 'Order sent',
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { lines, totalPrice, clear } = useCart();
  const [step, setStep] = useState<Step>('cart');

  function handleClose() {
    onClose();
    window.setTimeout(() => setStep('cart'), 300);
  }

  function handleSent() {
    clear();
    setStep('sent');
  }

  return (
    <>
      <div className={`cart-drawer__backdrop${open ? ' is-open' : ''}`} onClick={handleClose} />
      <aside className={`cart-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__header">
          <h2>{TITLES[step]}</h2>
          <button type="button" className="cart-drawer__close" onClick={handleClose} aria-label="Close cart">
            ×
          </button>
        </div>

        {step === 'cart' && (
          <div className="cart-drawer__body">
            {lines.length === 0 ? (
              <p className="cart-drawer__empty">Nothing here yet. Add something from the menu.</p>
            ) : (
              <ul className="cart-drawer__lines">
                {lines.map((line) => (
                  <CartLineRow key={line.item.id} line={line} />
                ))}
              </ul>
            )}
          </div>
        )}

        {step === 'details' && <OrderForm onBack={() => setStep('cart')} onSent={handleSent} />}

        {step === 'sent' && (
          <div className="cart-drawer__body cart-drawer__sent">
            <p>
              WhatsApp should be open with your order ready to send. Once you tap send there, we&apos;ll confirm your
              order on WhatsApp.
            </p>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Done
            </button>
          </div>
        )}

        {step === 'cart' && lines.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <button type="button" className="btn btn-primary cart-drawer__continue" onClick={() => setStep('details')}>
              Continue
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
