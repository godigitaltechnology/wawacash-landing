"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FAQSection from '@/components/FAQSection';
import FAQCategories from '@/components/FAQCategories'; // Import the new FAQCategories component
import { Phone, MapPin, Mail, Facebook, Linkedin, Instagram, Music, Search } from 'lucide-react';

const allFaqs = [
  {
    question: "Qu'est-ce que Wawa Cash ?",
    answer: "Wawa Cash est une plateforme de transfert d'argent rapide, sécurisée et fiable, vous permettant d'envoyer de l'argent à vos proches partout dans le monde en quelques clics.",
    category: "Général"
  },
  {
    question: "Qu'est-ce que Wawa Send ?",
    answer: "Wawa Send est notre service dédié aux envois d'argent internationaux, garantissant que vos fonds arrivent à destination rapidement et en toute sécurité.",
    category: "Wawa Send"
  },
  {
    question: "Quels pays sont desservis par Wawa Cash ?",
    answer: "Wawa Cash dessert un large éventail de pays à travers le monde. Vous pouvez consulter la liste complète des pays disponibles sur notre page de services.",
    category: "Général"
  },
  {
    question: "Comment créer un compte Wawa Cash ?",
    answer: "Pour créer un compte Wawa Cash, téléchargez notre application mobile depuis le Play Store ou l'App Store, puis suivez les étapes d'inscription simples et rapides.",
    category: "Compte"
  },
  {
    question: "Quels documents sont nécessaires pour ouvrir un compte ?",
    answer: "Pour ouvrir un compte, vous aurez généralement besoin d'une pièce d'identité valide (carte d'identité, passeport) et d'une preuve de résidence. Les exigences peuvent varier selon votre pays.",
    category: "Compte"
  },
  {
    question: "Puis-je envoyer de l'argent sans compte bancaire ?",
    answer: "Oui, Wawa Cash offre des options pour envoyer de l'argent même si vous n'avez pas de compte bancaire, via nos partenaires de paiement locaux.",
    category: "Wawa Send"
  },
  {
    question: "Comment sont calculés les frais de transfert ?",
    answer: "Les frais de transfert sont calculés en fonction du montant envoyé et du pays de destination. Notre grille tarifaire est transparente et affichée avant chaque transaction.",
    category: "Tarifs"
  },
  {
    question: "Est-ce que mes informations personnelles sont sécurisées ?",
    answer: "Absolument. Nous utilisons des protocoles de chiffrement avancés et respectons les normes RGPD pour garantir la confidentialité et la sécurité de vos données.",
    category: "Sécurité"
  },
  {
    question: "Que faire en cas de problème avec un transfert ?",
    answer: "En cas de problème, veuillez contacter notre service client via le formulaire de contact ou par téléphone. Notre équipe d'assistance est disponible pour vous aider.",
    category: "Assistance"
  },
];

const FAQs = () => {
  const categories = ["Tous", "Général", "Wawa Send", "Sécurité", "Compte", "Tarifs", "Assistance"];
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === "Tous" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section for FAQs Page */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-8 overflow-hidden pt-32">
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              FAQs
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Trouvez des réponses rapides à vos questions les plus fréquentes sur Wawa Cash, nos services, la sécurité et bien plus encore.
            </p>
            <div className="relative max-w-lg mx-auto">
              <Input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-blue-200 focus:border-blue-500 focus-visible:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="bg-gray-50 py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FAQCategories
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <FAQSection faqs={filteredFaqs} showTitle={false} />
          </div>
        </section>

        {/* Contactez-nous Section (similar to About page) */}
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

export default FAQs;