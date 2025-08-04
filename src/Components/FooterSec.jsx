import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const FooterSec = () => {
  return (
    <>
      {/* Top Divider */}
      <hr className="border mt-[6rem]" />

      {/* App Download Promotion */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:text-[26px] text-center font-bold text-[#02060CBF] flex flex-col md:flex-row items-center gap-4">
            For better experience, download the Swiggy app now
            <img
              src="public/images/app_store.png"
              alt="App Store"
              className="md:h-[55px] h-[40px]"
            />
            <img
              src="public/images/R.png"
              alt="Google Play"
              className="md:h-[200px] h-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Logo & Copyright */}
          <div className="col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-[32px] font-bold text-orange-500">Swiggy</h1>
            </div>
            <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact us</h3>
            <ul className="space-y-1 text-sm">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          {/* Availability Info */}
          <div>
            <h3 className="font-semibold mb-2">Available in:</h3>
            <ul className="space-y-1 text-sm">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <select className="mt-3 border border-gray-300 px-2 py-1 rounded-md text-sm">
              <option>679 cities</option>
            </select>
          </div>

          {/* Life at Swiggy */}
          <div>
            <h3 className="font-semibold mb-2">Life at Swiggy</h3>
            <ul className="space-y-1 text-sm">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
          </div>

          {/* Legal and Social */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm mb-4">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
            <h3 className="font-semibold mb-2">Social Links</h3>
            <div className="flex space-x-3 text-gray-600 text-xl">
              <FaLinkedin />
              <FaInstagram />
              <FaFacebook />
              <FaPinterest />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSec;
