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
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>

        <button type="button" className="site-header__cart" onClick={onOpenCart}>
          Cart
          {totalCount > 0 && <span className="site-header__cart-badge">{totalCount}</span>}
        </button>
      </div>
    </header>
  );
}
