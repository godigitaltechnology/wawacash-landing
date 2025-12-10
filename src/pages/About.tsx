import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import CallToAction from '@/components/CallToAction';
import { Lock, FileText, Clock, Phone, MapPin, Mail, Facebook, Linkedin, Instagram, Music } from 'lucide-react';

// Reusable FeatureCard for the "Une entreprise agréée" section
const AboutFeatureCard = ({ icon: Icon, title, description, iconBgColor, iconTextColor }: { icon: React.ElementType, title: string, description: string, iconBgColor: string, iconTextColor: string }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className={`p-3 rounded-full ${iconBgColor} ${iconTextColor}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
                À propos de WawaCash
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-lg mx-auto md:mx-0">
                Wawa Cash est une solution de paiement pensée pour la diaspora africaine. Notre mission : <span className="font-semibold text-blue-700">rendre les transferts d'argent vers l'Afrique simples, rapides et sécurisés.</span>
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Chaque jour, des milliers d'Africains soutiennent leurs familles ou investissent au pays. Wawa Cash simplifie ces envois grâce à une plateforme moderne, fiable et accessible à tous.
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                <span>Télécharger l'application</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/public/placeholder.svg" alt="Team WawaCash" className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Une entreprise agréée, gage de confiance */}
        <section className="relative bg-white py-20 px-8 overflow-hidden">
          {/* Background pattern of blue arrows */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/public/placeholder.svg)', backgroundSize: '100px', backgroundRepeat: 'repeat' }}>
            {/* Remplacez /public/placeholder.svg par votre image de motif de flèches réelle */}
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
              Une entreprise agréée, gage de confiance
            </h2>
            <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
              Derrière Wawa Cash, se trouve une entreprise certifiée, respectant les normes internationales de sécurité financière. Nous plaçons la sécurité et la transparence au cœur de tout.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <AboutFeatureCard
                icon={Lock}
                title="Sécurité maximale"
                description="Vos transactions sont protégées par des protocoles de chiffrement avancés pour garantir la confidentialité de vos données."
                iconBgColor="bg-purple-50"
                iconTextColor="text-purple-800"
              />
              <AboutFeatureCard
                icon={FileText}
                title="Conformité garantie"
                description="Nos systèmes sont audités régulièrement afin d'assurer une totale conformité et fiabilité de nos services."
                iconBgColor="bg-orange-50"
                iconTextColor="text-orange-800"
              />
              <AboutFeatureCard
                icon={Clock}
                title="Suivi en temps réel"
                description="Gardez le contrôle sur chaque envoi grâce à un suivi instantané, du clic d'envoi jusqu'à la réception des fonds."
                iconBgColor="bg-green-50"
                iconTextColor="text-green-800"
              />
            </div>
          </div>
        </section>

        {/* Notre vision : rapprocher les communautés */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-blue-900 leading-tight mb-6">
                Notre vision : rapprocher les communautés
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Chaque transfert est plus qu'une transaction — c'est un lien, un acte d'amour et de solidarité. Notre ambition est claire : faire de Wawa Cash le pont entre la diaspora africaine et leurs familles, grâce à une expérience fluide et accessible.
              </p>
              <Link to="#" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                <span>Télécharger l'application</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/public/placeholder.svg" alt="Happy family" className="w-full max-w-md rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Call To Action Section - Reusing existing component */}
        <CallToAction />

        {/* Contactez-nous Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Contactez-nous</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Chez Wawa Cash, nous restons à votre écoute. Une question, un besoin d'assistance ou un retour ? Notre équipe est là pour vous.
              </p>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="h-6 w-6 text-blue-700" />
                  <span>+1 215 909 1311</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <MapPin className="h-6 w-6 text-blue-700" />
                  <span>220 Laurel Rd, Sharon Hill, PA 19079, USA</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="h-6 w-6 text-blue-700" />
                  <span>customer@wawacash.com</span>
                </div>
              </div>
              <div className="mt-10 text-center md:text-left">
                <h3 className="font-semibold text-xl text-blue-900 mb-4">Centre d'aide</h3>
                <p className="text-gray-700 mb-4">
                  Consultez notre FAQ 24h/24, 7j/7 pour trouver des réponses rapides à vos questions.
                </p>
                <Link to="/faqs" className="text-blue-600 hover:underline font-medium flex items-center justify-center md:justify-start space-x-2">
                  <span>Allez au FAQs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Remplissez le formulaire</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Entrez votre nom" />
                </div>
                <div>
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input id="firstname" placeholder="Entrez votre prénom" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Saisissez votre message" rows={5} />
                </div>
                <p className="text-xs text-gray-500">
                  En soumettant ce formulaire, vous acceptez que Wawa Cash utilise vos données pour répondre à votre demande. Consultez notre <Link to="/privacy" className="text-blue-600 hover:underline">politique de confidentialité</Link> et nos <Link to="/cgu" className="text-blue-600 hover:underline">conditions</Link> pour plus d'informations.
                </p>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                  Envoyez
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Suivez Wawa Cash Section */}
        <section className="bg-white py-20 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Suivez Wawa Cash</h2>
            <p className="text-lg text-gray-700 mb-10">
              Soyez les premiers informés des nouveautés sur Wawa Cash, des dernières mises à jour de nos produits et bien plus encore en nous suivant sur nos réseaux sociaux.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Music className="h-8 w-8" /> {/* Using Music icon for TikTok */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default About;