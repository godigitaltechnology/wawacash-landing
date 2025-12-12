import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Apple } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F9FF] via-[#D0E3FF] to-[#F5F9FF] py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">
          Besoin d'envoyer de l'argent ? Faites-le en toute confiance avec Wawa Cash.
        </h2>
        <p className="text-lg mb-10 text-gray-700">
          Transférer de l'argent à l'étranger n'a jamais été aussi simple. Avec Wawa Cash, envoyez de l'argent en quelques étapes, sans stress ni frais cachés.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/public/play_store_61a380beb1 1.png" alt="Download on Play Store" className="h-12" />
            </a>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg flex items-center space-x-2">
              <Apple className="h-5 w-5" />
              <span>App Store</span>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;