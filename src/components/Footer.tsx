import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Instagram, Play, Apple } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-1 mb-6">
            <span className="text-3xl font-bold text-white">WAWA</span>
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[25px] border-l-white"></div>
            <span className="text-3xl font-bold text-white">cash</span>
          </Link>
          <div className="flex space-x-6 mb-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              {/* Placeholder for TikTok icon if not available in lucide-react */}
              <span className="text-2xl">🎵</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-white hover:bg-gray-100 text-blue-700 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Play Store</span>
            </Button>
            <Button className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
              <Apple className="h-4 w-4" />
              <span>App Store</span>
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Wawa Cash</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about" className="hover:text-white">À propos</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/tariffs" className="hover:text-white">Tarifs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Assistance & Ressources</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
            <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/policy" className="hover:text-white">Politique de Non & Rec.</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Confidentialité & Sécurité</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/privacy" className="hover:text-white">Politique de Confidentialité & RGPD</Link></li>
            <li><Link to="/kyc" className="hover:text-white">Politique KYC</Link></li>
            <li><Link to="/lcbft" className="hover:text-white">Politique LCBFT</Link></li>
            <li><Link to="/security" className="hover:text-white">Politique de Sécurité des Transactions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Informations légales</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/mentions" className="hover:text-white">Mentions légales</Link></li>
            <li><Link to="/cgu" className="hover:text-white">CGU</Link></li>
            <li><Link to="/cgv" className="hover:text-white">CGV/CGS</Link></li>
            <li><Link to="/charte" className="hover:text-white">Charte d'utilisation responsable</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 text-center">
        <p className="mb-4">
          Ce service t'est proposé par WawaCash, ses différentes entités telles que WawaCash Canada, société enregistrée au Canada sous le numéro d'enregistrement XXXXXXXX, ainsi que ses différents partenaires. Pour plus d'informations, tu peux consulter les conditions générales d'accès à WawaCash et notre politique sur les données personnelles.
        </p>
        <p>© 2025 WawaCash</p>
      </div>
    </footer>
  );
};

export default Footer;