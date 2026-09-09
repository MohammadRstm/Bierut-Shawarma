import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { OffersSection } from './components/Offers/OffersSection';
import { MenuSection } from './components/Menu/MenuSection';
import { CartDrawer } from './components/Cart/CartDrawer';
import { CartBar } from './components/Cart/CartBar';
import { Footer } from './components/Footer/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <LanguageProvider>
      <CartProvider>
        <Header onOpenCart={() => setCartOpen(true)} />
        <main>
          <Hero />
          <OffersSection />
          <MenuSection />
        </main>
        <Footer />
        <CartBar onOpen={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
