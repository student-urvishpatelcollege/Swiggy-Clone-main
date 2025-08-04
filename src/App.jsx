import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import HelpSupportPage from './Components/HelpSupportPage';
import LoginDrawer from './Components/LoginDrawer';
import CartPage from './pages/CartPage';
import Category from './Components/Category';
import Toprest from './Components/Toprest';
import OnlineDelivery from './Components/OnlineDelivery';
import BestCity from './Components/BestCity';
import Cuisines from './Components/Cuisines';
import ExploreRestaurants from './components/ExploreRestaurants';
import FooterSec from './Components/FooterSec';

function HomePage() {
  return (
    <>
      <Category />
      <Toprest />
      <OnlineDelivery />
      <div>
        <img
          src="public/images/swiggy_download_banner.avif"
          className="md:h-[350px] h-[200px] w-full pt-10 mb-[2rem]"
          alt="Swiggy App Banner"
        />
      </div>
      <BestCity />
      <Cuisines />
      <ExploreRestaurants />
    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter basename="/Swiggy-Clone-main">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/help" element={<HelpSupportPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <FooterSec />

      {/* Global Sign-In Button */}
      <button
        onClick={() => setShowLogin(true)}
        className="fixed top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded z-[100]"
      >
        Sign In
      </button>

      {showLogin && <LoginDrawer onClose={() => setShowLogin(false)} />}
    </BrowserRouter>
  );
}

export default App;
