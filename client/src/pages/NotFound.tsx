/**
 * FrançaisFacile+ — Page 404
 * Style « La Classe Parisienne » : même univers éditorial que le reste du site
 * (papier crème, encre bleue, bordeaux Marianne, voix du professeur).
 */
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Feather, ArrowLeft, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Page introuvable" />
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-2xl py-20 text-center fade-up">
          <Feather className="size-10 mx-auto mb-6 text-[var(--gold)]" aria-hidden />
          <p className="font-display italic text-[var(--gold)] text-sm mb-4">
            Page introuvable
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Ce chapitre n'existe pas encore.
          </h2>
          <p className="text-foreground/80 max-w-md mx-auto mb-10 leading-relaxed">
            La page que vous cherchez a peut-être été déplacée, renommée — ou
            écrite sur une page qui n'existe pas. Ce n'est pas grave : une
            erreur n'est qu'une leçon qui commence. Revenons au sommaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="quill-btn font-sans">
              <Link href="/">
                <BookOpen className="size-4 mr-1" /> Retourner à l'accueil
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-sans bg-card">
              <Link href="/niveaux">
                <ArrowLeft className="size-4 mr-1" /> Choisir mon niveau
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
