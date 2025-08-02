import React, { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { CiDiscount1 } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { TbHelpHexagon } from 'react-icons/tb';
import { CiShoppingCart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchPage from './SearchPage';
import LoginDrawer from './LoginDrawer';

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Search Fullscreen Overlay */}
      {searchMode && (
        <div className="fixed inset-0 bg-white z-[9998] overflow-y-auto">
          <div className="p-4 flex justify-end">
            <button onClick={() => setSearchMode(false)} className="text-2xl font-bold">&times;</button>
          </div>
          <SearchPage />
        </div>
      )}

      {/* Sidebar Overlay */}
      {!searchMode && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-[9997] transition-all duration-300 ${toggleSidebar ? 'visible opacity-100' : 'invisible opacity-0'}`}
          onClick={() => setToggleSidebar(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 left-0 h-full w-[300px] bg-white transform transition-transform duration-300 ${toggleSidebar ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="p-4 h-full overflow-y-auto">
              <div className="flex justify-end">
                <button onClick={() => setToggleSidebar(false)} className="text-2xl font-bold">&times;</button>
              </div>

              <div className="mt-6 shadow-md">
                <input
                  type="text"
                  placeholder="Search for area, street name.."
                  className="w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#fc8019] focus:border-[#fc8019]"
                />
              </div>

              <div className="border mt-6 p-4 flex gap-4 items-start hover:bg-gray-50 cursor-pointer transition">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold">Get current location</div>
                  <div className="text-sm text-gray-500">Using GPS</div>
                </div>
              </div>

              <div className="border mt-4 p-4">
                <div className="text-xs text-gray-500 mb-2 uppercase">Recent Searches</div>
                <div className="flex gap-4 items-start">
                  <span className="text-lg">🕑</span>
                  <div>
                    <div className="font-semibold">Gandhinagar</div>
                    <div className="text-sm text-gray-500">Gujarat, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      {!searchMode && (
        <header className="p-[15px] shadow-xl bg-white sticky top-0 z-[9996] text-[#686b78]">
          <div className="max-w-[1200px] mx-auto flex items-center">
            {/* Logo */}
            <div className="w-[100px]">
              <img src="/images/Swiggy-emblem.png" alt="Swiggy Logo" className="w-full" />
            </div>

            {/* Location */}
            <div className="ml-4 group cursor-pointer flex items-center">
              <span className="font-bold text-black border-b-[3px] border-black group-hover:border-[#fc8019] group-hover:text-[#fc8019]">
                other
              </span>
              <span className="ml-1">Gandhinagar, India</span>
              <RxCaretDown
                onClick={() => setToggleSidebar(true)}
                className="text-[1.3rem] text-[#fc8019] ml-1"
              />
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-10 ml-auto font-semibold text-[16px]">
              <button onClick={() => setSearchMode(true)} className="flex items-center gap-2 hover:text-[#fc8019]">
                <IoIosSearch />
                <span>Search</span>
              </button>

              <button className="flex items-center gap-2 hover:text-[#fc8019]">
                <CiDiscount1 />
                <span>Offers</span>
              </button>

              <button onClick={() => navigate('/help')} className="flex items-center gap-2 hover:text-[#fc8019]">
                <TbHelpHexagon />
                <span>Help</span>
              </button>

              <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 hover:text-[#fc8019]">
                <FaRegUser />
                <span>Sign In</span>
              </button>

              <button onClick={() => navigate('/cart')} className="flex items-center gap-2 hover:text-[#fc8019]">
                <CiShoppingCart />
                <span>Cart ({totalCartCount})</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Login Drawer */}
      {showLogin && <LoginDrawer onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
