import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useLanguage } from '../../hooks/useLanguage';
import { formatPrice } from '../../utils/currency';
import { buildOrderMessage, buildWhatsAppLink } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { CartLineRow } from './CartLineRow';
import './CartDrawer.css';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type Step = 'cart' | 'sent';

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { lines, totalPrice, clear } = useCart();
  const { language, strings } = useLanguage();
  const [step, setStep] = useState<Step>('cart');

  const titles: Record<Step, string> = {
    cart: strings.cart.yourOrder,
    sent: strings.cart.orderSent,
  };

  function handleClose() {
    onClose();
    window.setTimeout(() => setStep('cart'), 300);
  }

  function handleSend() {
    const message = buildOrderMessage(lines, totalPrice, language);
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    clear();
    setStep('sent');
  }

  return (
    <>
      <div className={`cart-drawer__backdrop${open ? ' is-open' : ''}`} onClick={handleClose} />
      <aside className={`cart-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__header">
          <h2>{titles[step]}</h2>
          <button
            type="button"
            className="cart-drawer__close"
            onClick={handleClose}
            aria-label={strings.cart.closeAria}
          >
            ×
          </button>
        </div>

        {step === 'cart' && (
          <div className="cart-drawer__body">
            {lines.length === 0 ? (
              <p className="cart-drawer__empty">{strings.cart.empty}</p>
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
            <p>{strings.cart.sentMessage}</p>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              {strings.cart.done}
            </button>
          </div>
        )}

        {step === 'cart' && lines.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>{strings.cart.total}</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <button type="button" className="btn btn-primary cart-drawer__continue" onClick={handleSend}>
              <WhatsAppIcon className="btn__icon" />
              {strings.cart.sendButton}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
