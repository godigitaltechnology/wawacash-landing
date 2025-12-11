import React from 'react';
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
    question: "Comment envoyer de l'argent ?",
    answer: "Pour envoyer de l'argent, téléchargez notre application, créez un compte, choisissez le montant et le destinataire, puis confirmez la transaction. C'est simple et rapide !",
    category: "Wawa Send"
  },
  {
    question: "Mes transactions sont-elles sécurisées ?",
    answer: "Oui, toutes vos transactions sont protégées par les dernières technologies de cryptage et de sécurité pour garantir la confidentialité et l'intégrité de vos fonds.",
    category: "Sécurité"
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
        <FAQSection faqs={sampleFaqs} showTitle={true} />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;