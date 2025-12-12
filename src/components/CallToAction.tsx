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
        <p className="text-lg mb-5 text-gray-700">
          Transférer de l'argent à l'étranger n'a jamais été aussi simple. Avec Wawa Cash, envoyez de l'argent en quelques étapes, sans stress ni frais cachés.
        </p>
        <Link to="/faqs" className="inline-flex items-center text-blue-600 hover:underline font-medium p-6 space-x-2">
          <span>Télécharger l'application</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
        <div className="flex justify-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/play_store_light.png" alt="Download on Play Store" className="h-12" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/app_store_light.png" alt="Download on Apple Store" className="h-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;