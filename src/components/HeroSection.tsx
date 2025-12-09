import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Apple, Globe, Euro } from 'lucide-react';

const PhoneMockup = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative w-64 h-[400px] bg-white rounded-[3rem] shadow-xl flex items-center justify-center p-2">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div> {/* Notch */}
    <div className="w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col">
      {children}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden">
      {/* Background pattern - simplified with divs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-20"> {/* Added pt-20 here */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            Transférez de l'argent, simplement et en toute sécurité
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            Avec Wawa Cash, envoyez de l'argent à vos proches en quelques clics. Rapide, fiable et sécurisé, notre service vous connecte à ceux qui comptent, où qu'ils se trouvent dans le monde.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-12">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Play Store</span>
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg flex items-center space-x-2">
              <Apple className="h-5 w-5" />
              <span>App Store</span>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto md:mx-0">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="send-amount" className="block text-sm font-medium text-gray-700 mb-1">Vous envoyez</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Input id="send-amount" type="number" defaultValue="100.00" className="border-none focus-visible:ring-0" />
                  <Select defaultValue="EUR">
                    <SelectTrigger className="w-[100px] border-none focus:ring-0">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="receive-amount" className="block text-sm font-medium text-gray-700 mb-1">Il reçoit</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <Input id="receive-amount" type="number" defaultValue="60.000" className="border-none focus-visible:ring-0" />
                  <Select defaultValue="XOF">
                    <SelectTrigger className="w-[100px] border-none focus:ring-0">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XOF">XOF</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Taux quotidien: 1 Euro = 655,90 XOF</p>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end space-x-8">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0">
            <PhoneMockup>
              <div className="flex items-center justify-between p-4 text-sm text-gray-800">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <span className="w-4 h-2 bg-gray-400 rounded-sm"></span>
                  <span className="w-4 h-2 bg-gray-400 rounded-sm"></span>
                  <span className="w-4 h-2 bg-gray-400 rounded-sm"></span>
                  <span className="w-4 h-2 bg-gray-400 rounded-sm"></span>
                  <span className="font-bold">LTE</span>
                  <span className="w-4 h-2 bg-gray-400 rounded-sm"></span>
                </div>
              </div>
              <div className="flex-grow p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium">Bienvenue,</span>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">!</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="bg-blue-100 p-4 rounded-xl mb-4">
                  <p className="text-xs text-gray-600 mb-1">Solde Portefeuille</p>
                  <p className="text-3xl font-bold text-blue-800">$ 5.650</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Button variant="outline" className="flex flex-col items-center justify-center h-20 text-blue-700 border-blue-200">
                    <Globe className="h-5 w-5 mb-1" />
                    <span>Envoyer</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-20 text-green-700 border-green-200">
                    <Euro className="h-5 w-5 mb-1" />
                    <span>Recharger</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-20 text-purple-700 border-purple-200">
                    <span className="text-xl">💰</span>
                    <span>Épargner</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center justify-center h-20 text-orange-700 border-orange-200">
                    <span className="text-xl">⚙️</span>
                    <span>Gérer</span>
                  </Button>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-800">Transactions</p>
                  <Button variant="link" className="text-blue-600 text-sm p-0 h-auto">Voir tout</Button>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs">E</div>
                    <span className="text-sm">Envoie à Mariline Fayet</span>
                  </div>
                  <span className="text-red-500 font-medium">-$20</span>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;