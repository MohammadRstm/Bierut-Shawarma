import { SHOP } from '../../data/shop';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { useLanguage } from '../../hooks/useLanguage';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import './Footer.css';

export function Footer() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  const { language, strings } = useLanguage();
  const address = language === 'ar' ? SHOP.addressAr : SHOP.address;
  const hours = language === 'ar' ? SHOP.hoursAr : SHOP.hours;

  return (
    <footer className={`site-footer${visible ? ' is-visible' : ''}`} id="visit" ref={ref}>
      <div className="container site-footer__inner">
        <div className="site-footer__copy">
          <h2 className="site-footer__title">{strings.footer.title}</h2>
          <a className="site-footer__text site-footer__link" href={SHOP.mapsUrl} target="_blank" rel="noreferrer">
            {address}
          </a>
          <p className="site-footer__text">{hours}</p>
        </div>
        <a
          className="btn btn-primary"
          href={`https://wa.me/${SHOP.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="btn__icon" />
          {strings.footer.whatsappButton}
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
