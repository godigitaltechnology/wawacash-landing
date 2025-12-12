import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Import Sheet components
import { Menu, ChevronDown, Flag, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/services", label: "Services" },
    { to: "/tariffs", label: "Tarifs" },
    { to: "/blog", label: "Blog" },
    { to: "/faqs", label: "FAQs" },
    { to: "/support", label: "Support" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/public/FR-WWC 01.png" alt="WawaCash Logo" className="h-8" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="text-gray-900 hover:text-blue-700 font-medium">
            {link.label}
          </Link>
        ))}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-700 border-gray-300 bg-white hover:bg-gray-50 h-9 px-3"
            >
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

      {/* Mobile Navigation - Burger Menu */}
      <div className="md:hidden flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-900">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
            <div className="flex flex-col h-full">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img src="/public/FR-WWC 01.png" alt="WawaCash Logo" className="h-8" />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col py-4 flex-grow">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to} 
                    to={link.to} 
                    className="px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Language Selector at the bottom */}
              <div className="p-4 border-t">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Flag className="h-4 w-4" />
                        <span>Français</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Español</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;