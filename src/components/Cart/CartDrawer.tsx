import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/currency';
import { buildOrderMessage, buildWhatsAppLink } from '../../utils/whatsapp';
import { CartLineRow } from './CartLineRow';
import './CartDrawer.css';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type Step = 'cart' | 'sent';

const TITLES: Record<Step, string> = {
  cart: 'Your order',
  sent: 'Order sent',
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { lines, totalPrice, clear } = useCart();
  const [step, setStep] = useState<Step>('cart');

  function handleClose() {
    onClose();
    window.setTimeout(() => setStep('cart'), 300);
  }

  function handleSend() {
    const message = buildOrderMessage(lines, totalPrice);
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
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

        {step === 'sent' && (
          <div className="cart-drawer__body cart-drawer__sent">
            <p>
              WhatsApp should be open with your order ready to send. Tap send there and let us know your name,
              pickup or delivery, and address if needed — we&apos;ll confirm your order on WhatsApp.
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
            <button type="button" className="btn btn-primary cart-drawer__continue" onClick={handleSend}>
              Send order on WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
