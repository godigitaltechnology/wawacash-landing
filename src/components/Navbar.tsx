import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Flag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/public/FR-WWC 01.png" alt="WawaCash Logo" className="h-8" /> {/* Integrated logo */}
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-900 hover:text-blue-700 font-medium">Accueil</Link>
        <Link to="/about" className="text-gray-900 hover:text-blue-700 font-medium">À propos</Link>
        <Link to="/services" className="text-gray-900 hover:text-blue-700 font-medium">Services</Link>
        <Link to="/tariffs" className="text-gray-900 hover:text-blue-700 font-medium">Tarifs</Link>
        <Link to="/blog" className="text-gray-900 hover:text-blue-700 font-medium">Blog</Link>
        <Link to="/faqs" className="text-gray-900 hover:text-blue-700 font-medium">FAQs</Link>
        <Link to="/support" className="text-gray-900 hover:text-blue-700 font-medium">Support</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 text-gray-900 hover:text-blue-700">
              <Flag className="h-4 w-4" />
              <span>Français</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;