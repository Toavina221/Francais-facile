/**
 * FrançaisFacile+ — Mentions légales
 * Style « La Classe Parisienne » : sobre, lisible, conforme aux exigences légales de base.
 */
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EMAIL = "helpscannerapk@gmail.com";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Mentions légales" />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs items={[{ label: "Mentions légales" }]} />

          <p className="chapter-rule">Informations légales</p>
          <h1 className="font-display text-4xl font-semibold text-foreground mt-3 mb-8">
            Mentions légales
          </h1>

          <section className="space-y-8 text-foreground/90">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
              <p>
                Le site <strong>FrançaisFacile+</strong> est un site à vocation éducative et gratuite, destiné
                à l'apprentissage du français langue étrangère.
              </p>
              <p className="mt-2">
                Le site est édité par une personne physique agissant à titre privé, qui assure également la
                fonction de directeur de la publication. Pour toute question, remarque ou demande, vous
                pouvez nous écrire à l'adresse suivante :{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Hébergement</h2>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>, plateforme d'hébergement et de
                déploiement d'applications web, dont le siège social est situé au 340 S Lemon Ave #4133,
                Walnut, CA 91789, United States. Pour toute question relative à l'hébergement ou à la
                disponibilité du site, contactez l'éditeur à l'adresse indiquée ci-dessus, qui transmettra
                votre demande à l'hébergeur.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus publiés sur ce site (textes, leçons, exercices, quiz, illustrations,
                logo et mise en page) est la propriété de l'éditeur ou est utilisé avec les autorisations
                nécessaires. Toute reproduction, représentation ou diffusion, totale ou partielle, à des fins
                commerciales est interdite sans accord préalable écrit de l'éditeur.
              </p>
              <p className="mt-2">
                Une utilisation personnelle, non commerciale, des fiches de révision et des leçons à des fins
                d'apprentissage est expressément autorisée.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                4. Exactitude des contenus
              </h2>
              <p>
                L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
                ce site, dont il se réserve le droit de corriger le contenu à tout moment et sans préavis. Les
                contenus pédagogiques sont fournis à titre informatif et éducatif ; ils ne constituent pas un
                programme officiel certifié par une institution d'examen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Limitation de responsabilité</h2>
              <p>
                L'éditeur ne saurait être tenu responsable des dommages résultant d'une mauvaise utilisation
                des contenus du site, ni de l'indisponibilité temporaire ou définitive de celui-ci. Les
                résultats d'apprentissage dépendent de l'assiduité et des méthodes personnelles de chaque
                apprenant.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales :{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
