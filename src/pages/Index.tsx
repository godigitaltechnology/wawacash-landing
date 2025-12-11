import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const sampleFaqs = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUs />
        <CallToAction />
        <section className="bg-white py-20 px-8"> {/* Added section for consistent padding */}
          <div className="max-w-4xl mx-auto text-center">
            <FAQSection faqs={sampleFaqs} showTitle={true} />
            <Link to="/faqs" className="inline-flex items-center text-blue-600 hover:underline font-medium mt-8 space-x-2">
              <span>Voir toute la liste</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;