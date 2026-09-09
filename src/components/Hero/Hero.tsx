import { SHOP } from '../../data/shop';
import { useLanguage } from '../../hooks/useLanguage';
import heroPhoto from '../../assets/photos/hero.jpg';
import './Hero.css';

export function Hero() {
  const { language, strings } = useLanguage();
  const tagline = language === 'ar' ? SHOP.taglineAr : SHOP.tagline;
  const hours = language === 'ar' ? SHOP.hoursAr : SHOP.hours;
  const address = language === 'ar' ? SHOP.addressAr : SHOP.address;

  return (
    <section className="hero" id="top">
      <img src={heroPhoto} alt="" className="hero__photo" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="eyebrow">{hours}</span>
        <h1 className="hero__title">
          {strings.hero.titleLine1}
          <br />
          {strings.hero.titleLine2}
        </h1>
        <p className="hero__subtitle">
          {tagline} {strings.hero.subtitleRest}
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn-primary">
            {strings.hero.viewMenu}
          </a>
          <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            {address}
          </a>
        </div>
      </div>
    </section>
  );
}
