import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, X } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Utilisez le hook useTranslation

  const languages = {
    fr: { name: t('francais'), flag: "/flag/fr.png" },
    en: { name: t('english'), flag: "/flag/en.png" },
    es: { name: t('espanol'), flag: "/flag/es.png" },
  };

  const currentLanguage = languages[i18n.language as keyof typeof languages] || languages.fr;

  const navLinks = [
    { to: "/", label: t("accueil") },
    { to: "/about", label: t("a_propos") },
    { to: "/services", label: t("services") },
    { to: "/tariffs", label: t("tarifs") },
    { to: "/blog", label: t("blog") },
    { to: "/faqs", label: t("faqs") },
    { to: "/support", label: t("support") },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-4 px-8">
      <div className="container mx-auto max-w-8xl flex justify-between items-center md:grid md:grid-cols-3">

        {/* Col 1 — Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="WawaCash Logo" className="h-10" />
          </Link>
        </div>

        {/* Col 2 — Menu à gauche + Langue à droite */}
        <div className="hidden md:flex items-center justify-between gap-6 whitespace-nowrap">

          {/* Menu aligné à gauche */}
          <div className="flex items-center space-x-11">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-900 hover:text-blue-700 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Langue alignée à droite */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-gray-900 hover:text-blue-700 border-gray-300 bg-white hover:bg-gray-50 h-9 px-3"
                >
                  <span>{currentLanguage.name}</span>
                  <img
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    className="h-4 w-4 rounded-sm"
                  />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(languages).map(([code, lang]) => (
                  <DropdownMenuItem key={code} onClick={() => i18n.changeLanguage(code)}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Col 3 — Burger (mobile) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] p-6 flex flex-col">
              <div className="flex justify-end mb-4">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-900">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col space-y-4 mb-8">
                {navLinks.map((link) => (
                  <SheetTrigger asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="text-lg font-medium text-gray-900 hover:text-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>
              <div className="mt-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-between space-x-2 text-gray-900 border-gray-300 bg-white hover:bg-gray-50 h-10 px-4"
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={currentLanguage.flag}
                          alt={currentLanguage.name}
                          className="h-4 w-4 rounded-sm"
                        />
                        <span>{currentLanguage.name}</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[calc(100%-3rem)]">
                    {Object.entries(languages).map(([code, lang]) => (
                      <DropdownMenuItem key={code} onClick={() => { i18n.changeLanguage(code); setIsOpen(false); }}>
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;