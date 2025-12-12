import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {/* Nouvelle section de texte après le menu */}
        <section className="bg-white py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              Oups, vous êtes un peu perdu ?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Il semble que vous ayez pris un chemin inattendu. Pas de panique, nous sommes là pour vous guider vers la bonne direction.
            </p>
          </div>
        </section>

        {/* Section 404 centrée */}
        <section className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="text-center bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
            <Frown className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-6xl font-extrabold text-blue-900 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">
              Oups ! La page que vous recherchez est introuvable.
            </p>
            <p className="text-md text-gray-600 mb-8">
              Il semblerait que vous ayez suivi un lien brisé ou que la page ait été déplacée.
            </p>
            <div className="flex flex-col space-y-4">
              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg text-lg font-semibold">
                <Link to="/">Retour à l'accueil</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 py-3 rounded-lg text-lg font-semibold">
                <Link to="/faqs">Consulter les FAQs</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 py-3 rounded-lg text-lg font-semibold">
                <Link to="/support">Contacter le support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default NotFound;