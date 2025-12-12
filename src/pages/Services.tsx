import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import PhoneMockup from '@/components/PhoneMockup';
import { Play, Apple } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for Services Page */}
        <section className="relative bg-gradient-to-b from-[#F5F9FF] via-[#D0E3FF] to-[#F5F9FF] from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-blue-700 font-semibold mb-2">Bien plus qu'un transfert</p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
                Une expérience financière complète
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Chez Wawa Cash, nous avons repensé la façon d'envoyer, de recevoir et d'épargner votre argent. Notre solution réunit simplicité, sécurité et liberté pour vous offrir bien plus qu'un service, un véritable compagnon pour gérer votre argent au quotidien.
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                <span>Télécharger l'application</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/public/home_services.png" alt="Woman looking at phone" className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="relative bg-white py-20 px-8 overflow-hidden">
          {/* Background pattern of flying birds - using placeholder for now */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/public/placeholder.svg)', backgroundSize: 'cover', backgroundRepeat: 'repeat' }}></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Des services qui rapprochent les familles
            </h2>
            <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
              Que vous soyez ici ou à l'étranger, Wawa Cash vous rapproche de vos proches. Envoyez, recevez et gérez votre argent en toute confiance, avec une transparence totale à chaque étape.
            </p>

            {/* Transfert d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">

              <div className="flex justify-center">
                <img
                  src="/public/services_1.png"
                  alt="Wawa Cash Services Screenshot"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Transfert d'argent</h3>
                <p className="text-gray-700 mb-4">
                  Envoyez de l'argent depuis la diaspora simplement et sans tracas avec Wawa Cash. Grâce à votre portefeuille Wawa Send, transférez :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Vers un compte Mobile Money (MTN, Moov, Orange, etc.) pour soutenir vos proches,</li>
                  <li>Ou vers un autre portefeuille Wawa Send pour des envois instantanés.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Deux options, une même promesse : simplicité, rapidité et sécurité. Chaque transfert est suivi en temps réel, avec des notifications claires à chaque étape.
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>Télécharger l'application</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Réception d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="flex justify-center md:order-2">
                <img src="/public/services_2.png" alt="Wawa Cash Services Screenshot" className="w-full max-w-md rounded-3xl shadow-lg" />
              </div>
              <div className="md:order-1">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Réception d'argent</h3>
                <p className="text-gray-700 mb-4">
                  Recevez votre argent instantanément et sans complication avec Wawa Cash. Qu'il s'agisse d'un soutien familial ou d'un paiement, tout se fait vite et en toute sécurité. Votre portefeuille Wawa Send vous permet de :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Recevoir depuis un autre compte Wawa Send,</li>
                  <li>Collecter des fonds via Mobile Money,</li>
                  <li>Suivre chaque transaction en temps réel.</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Aucun retard, aucun frais caché. Votre argent reste entre de bonnes mains : les vôtres.
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>Télécharger l'application</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Épargne d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Épargne d'argent</h3>
                <p className="text-gray-700 mb-4">
                  Avec Wawa Cash, épargner devient simple et flexible. Votre portefeuille d'épargne vous permet de mettre de côté à votre rythme, sans formalités.
                </p>
                <p className="text-gray-700 mb-6">
                  Que ce soit pour un projet ou une sécurité personnelle, votre argent est protégé, disponible et transparent. Un vrai coffre-fort numérique, toujours sous votre contrôle.
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>Télécharger l'application</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <img src="/public/services_3.png" alt="Wawa Cash Services Screenshot" className="w-full max-w-md rounded-3xl shadow-lg" />
              </div>
            </div>

            {/* Gestion de portefeuille */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="md:order-1">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Gestion de portefeuille</h3>
                <p className="text-gray-700 mb-4">
                  Avec Wawa Cash, gérez votre argent simplement et en toute sécurité. Suivez vos transferts, contrôlez vos dépenses et gardez le contrôle sur vos finances où que vous soyez.
                </p>
                <p className="text-gray-700 mb-6">
                  Wawa Cash, c'est plus qu'une application. C'est votre outil de gestion financière complet, du transfert à l'épargne.
                </p>
                <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center space-x-2">
                  <span>Télécharger l'application</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src="/public/services_4.png"
                  alt="Wawa Cash Services Screenshot"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>

            {/* Un réseau qui relie la diaspora à l'Afrique */}
            <div className="text-center mb-20 py-20">
              <h3 className="text-4xl font-extrabold text-blue-900 mb-6">
                Un réseau qui relie la diaspora à l'Afrique
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Notre réseau couvre déjà la Côte d'Ivoire, le Mali, le Sénégal, le Bénin, le Cameroun, la Guinée, la RDC, le Niger, le Togo et le Burkina Faso, avec une expansion continue.
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Rejoignez ceux qui nous font confiance pour leurs transferts quotidiens.
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center space-x-2">
                <span>Télécharger l'application</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              {/* Placeholder for the map-like illustration with avatars */}
              <div className="relative w-full h-[32rem] rounded-xl mt-12 flex items-center justify-center">
                <img
                  src="/public/services_groupe.png"
                  alt="Wawa Cash Services Screenshot"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Services;