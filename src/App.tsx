import { useState } from 'react';
import { CartProvider } from './context/CartContext';
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
  );
}

export default App;
