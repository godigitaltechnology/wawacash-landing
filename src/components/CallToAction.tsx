import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Apple } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-blue-700 text-white py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">
          Besoin d'envoyer de l'argent ? Faites-le en toute confiance avec Wawa Cash.
        </h2>
        <p className="text-lg mb-10">
          Transférer de l'argent à l'étranger n'a jamais été aussi simple. Avec Wawa Cash, envoyez de l'argent en quelques étapes, sans stress ni frais cachés.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-full text-lg flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Play Store</span>
          </Button>
          <Button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-lg flex items-center space-x-2">
            <Apple className="h-5 w-5" />
            <span>App Store</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;