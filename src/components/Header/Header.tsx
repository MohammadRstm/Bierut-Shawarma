import { SHOP } from '../../data/shop';
import { useCart } from '../../hooks/useCart';
import './Header.css';

interface HeaderProps {
  onOpenCart: () => void;
}

export function Header({ onOpenCart }: HeaderProps) {
  const { totalCount } = useCart();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand">
          <span className="site-header__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32">
              <path d="M7 23 Q16 5 25 23" stroke="var(--ink)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              <circle cx="16" cy="9" r="2.6" fill="var(--accent-yellow-text)" />
            </svg>
          </span>
          {SHOP.name}
        </a>

        <nav className="site-header__nav">
          <a href="#offers">Offers</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>

        <button type="button" className="site-header__cart" onClick={onOpenCart} aria-label="Open cart">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M2.5 3h2l2.4 12.2a1.8 1.8 0 0 0 1.8 1.5h8.6a1.8 1.8 0 0 0 1.75-1.4L21 8H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.4" fill="currentColor" />
            <circle cx="17" cy="20" r="1.4" fill="currentColor" />
          </svg>
          {totalCount > 0 && <span className="site-header__cart-badge">{totalCount}</span>}
        </button>
      </div>
    </header>
  );
}
