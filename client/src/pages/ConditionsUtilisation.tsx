/**
 * FrançaisFacile+ — Conditions générales d'utilisation
 */
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EMAIL = "helpscannerapk@gmail.com";

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Conditions générales d'utilisation" />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs items={[{ label: "CGU" }]} />

          <p className="chapter-rule">Le cadre d'utilisation</p>
          <h1 className="font-display text-4xl font-semibold text-foreground mt-3 mb-8">
            Conditions générales d'utilisation
          </h1>

          <section className="space-y-8 text-foreground/90">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Objet</h2>
              <p>
                Les présentes conditions régissent l'utilisation du site <strong>FrançaisFacile+</strong>,
                plateforme gratuite d'apprentissage du français langue étrangère (leçons, exercices, quiz,
                dictées et fiches de révision). En utilisant le site, vous acceptez ces conditions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Gratuité</h2>
              <p>
                L'accès à l'ensemble des contenus pédagogiques du site est gratuit. Aucune carte bancaire,
                aucun compte et aucun paiement ne sont requis pour utiliser les leçons, les exercices, les
                quiz, les dictées et les fiches de révision.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                3. Licence d'utilisation
              </h2>
              <p>
                Les contenus du site sont mis à disposition pour un usage personnel et éducatif. Il est
                autorisé de consulter, lire et imprimer les fiches de révision pour son apprentissage. Il est
                interdit de reproduire, redistribuer, vendre ou publier les contenus du site (leçons,
                exercices, quiz, illustrations, code) sans autorisation écrite préalable de l'éditeur.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                4. Comportement de l'utilisateur
              </h2>
              <p>
                L'utilisateur s'engage à utiliser le site de manière loyale, à ne pas tenter de perturber son
                fonctionnement, à ne pas extraire massivement ses contenus et à ne pas utiliser le site à des
                fins illégales ou contraires aux bonnes mœurs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                5. Contenu pédagogique
              </h2>
              <p>
                Les contenus sont rédigés à des fins d'apprentissage du français selon le Cadre européen commun
                de référence pour les langues (CECRL). Ils ne constituent ni un programme officiel d'examen,
                ni une garantie de résultat. Les modules de préparation au DELF/TCF présentent la structure
                des épreuves à titre informatif ; l'inscription et la passation des examens officiels
                s'effectuent exclusivement auprès des organismes certificateurs habilités (France Éducation
                international et ses centres partenaires).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                6. Disponibilité
              </h2>
              <p>
                L'éditeur s'efforce d'assurer la disponibilité du site, mais ne garantit pas un accès
                ininterrompu. Les maintenances, mises à jour et améliorations peuvent entraîner des
                indisponibilités temporaires sans préavis.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Modification</h2>
              <p>
                L'éditeur peut modifier ces conditions à tout moment. La version applicable est celle publiée
                sur le site à la date de consultation. L'utilisation continue du site vaut acceptation des
                nouvelles conditions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>
                Pour toute question relative aux présentes conditions :{" "}
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
