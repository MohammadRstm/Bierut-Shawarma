import { OFFERS } from '../../data/offers';
import { OfferCard } from './OfferCard';
import './OffersSection.css';

export function OffersSection() {
  if (OFFERS.length === 0) return null;

  return (
    <section className="offers-section" id="offers">
      <div className="container">
        <div className="offers-section__header">
          <span className="eyebrow">Special offers</span>
          <h2 className="offers-section__title">Deals worth ordering for.</h2>
        </div>
      </div>

      <div className="offers-section__scroller">
        <ul className="offers-section__list">
          {OFFERS.map((item, index) => (
            <li key={item.id} className="offers-section__item">
              <OfferCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
