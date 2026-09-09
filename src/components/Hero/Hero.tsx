import { SHOP } from '../../data/shop';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="eyebrow">{SHOP.hours}</span>
        <h1 className="hero__title">
          Shawarma off the spit,
          <br />
          wrapped while you wait.
        </h1>
        <p className="hero__subtitle">
          {SHOP.tagline} Build your order below, send it straight to our WhatsApp, and we will have it ready for
          pickup or delivery.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn-primary">
            View Menu
          </a>
          <a href="#visit" className="btn btn-secondary">
            {SHOP.address}
          </a>
        </div>
      </div>
    </section>
  );
}
