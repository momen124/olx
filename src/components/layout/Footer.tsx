import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">Dubizzle Clone is your go-to platform for buying and selling anything in your local community.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="/about" className="hover:text-blue-300">About</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Dubizzle Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
