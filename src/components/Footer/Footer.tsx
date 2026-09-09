import { SHOP } from '../../data/shop';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import './Footer.css';

export function Footer() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <footer className={`site-footer${visible ? ' is-visible' : ''}`} id="visit" ref={ref}>
      <div className="container site-footer__inner">
        <div className="site-footer__copy">
          <h2 className="site-footer__title">Come by, or send us the order.</h2>
          <p className="site-footer__text">{SHOP.address}</p>
          <p className="site-footer__text">{SHOP.hours}</p>
        </div>
        <a
          className="btn btn-primary"
          href={`https://wa.me/${SHOP.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          Message us on WhatsApp
        </a>
      </div>
      <div className="container site-footer__meta">
        <span>
          © {new Date().getFullYear()} {SHOP.name}
        </span>
        <span>{SHOP.phoneDisplay}</span>
      </div>
    </footer>
  );
}
