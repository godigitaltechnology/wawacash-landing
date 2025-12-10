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
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
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
              <img src="/public/placeholder.svg" alt="Woman looking at phone" className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="relative bg-blue-50 py-20 px-8 overflow-hidden">
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
              <div className="flex justify-center">
                <PhoneMockup size="medium">
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
                        <Play className="h-5 w-5 mb-1" />
                        <span>Envoyer</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col items-center justify-center h-20 text-green-700 border-green-200">
                        <Apple className="h-5 w-5 mb-1" />
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

            {/* Réception d'argent */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="flex justify-center md:order-2">
                <img src="/public/placeholder.svg" alt="Man looking at phone" className="w-full max-w-md rounded-3xl shadow-lg" />
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
                <PhoneMockup size="medium">
                  <div className="flex items-center justify-between p-4 text-sm text-gray-800">
                    <span>WC-CE022025</span>
                    <span className="text-green-600 flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span>Objectif at</span>
                    </span>
                  </div>
                  <div className="flex-grow p-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Épargner avec Wawa Cash</h4>
                    <p className="text-sm text-gray-600 mb-4">Gérez vos économies et réalisez vos projets en toute simplicité.</p>
                    <div className="bg-blue-100 p-4 rounded-xl flex items-center justify-center">
                      <img src="/public/placeholder.svg" alt="Money bag" className="h-24 w-24" />
                    </div>
                    <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white">
                      Ajouter un projet épargne
                    </Button>
                  </div>
                </PhoneMockup>
              </div>
            </div>

            {/* Gestion de portefeuille */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
              <div className="flex justify-center md:order-2">
                <PhoneMockup size="medium">
                  <div className="flex items-center justify-between p-4 text-sm text-gray-800">
                    <span>Janvier</span>
                    <span className="text-red-500 font-medium">-$20</span>
                  </div>
                  <div className="flex-grow p-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Suivi des entrées et sorties</h4>
                    <p className="text-sm text-gray-600 mb-4">Gardez le contrôle de vos finances au quotidien.</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-blue-100 p-3 rounded-xl text-center">
                        <span className="block text-lg font-bold text-blue-800">$1000</span>
                        <span className="text-xs text-gray-600">Entrées</span>
                      </div>
                      <div className="bg-red-100 p-3 rounded-xl text-center">
                        <span className="block text-lg font-bold text-red-800">$800</span>
                        <span className="text-xs text-gray-600">Sorties</span>
                      </div>
                      <div className="bg-green-100 p-3 rounded-xl text-center">
                        <span className="block text-lg font-bold text-green-800">$250</span>
                        <span className="text-xs text-gray-600">Solde</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-xs">E</div>
                        <span className="text-sm">Avance design de logo</span>
                      </div>
                      <span className="text-gray-600 text-sm">20 Déc 2024</span>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
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
            </div>

            {/* Un réseau qui relie la diaspora à l'Afrique */}
            <div className="text-center mb-20">
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
              <div className="relative w-full h-96 bg-gray-100 rounded-xl mt-12 flex items-center justify-center text-gray-500">
                <p>Illustration du réseau (à remplacer par une image ou un SVG)</p>
                {/* Example avatars - replace with actual images and positioning */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800">US</div>
                <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800">CI</div>
                <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-800">SN</div>
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