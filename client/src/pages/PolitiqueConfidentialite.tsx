/**
 * FrançaisFacile+ — Politique de confidentialité
 * Transparence sur les données réellement utilisées (aucune collecte, localStorage uniquement).
 */
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EMAIL = "helpscannerapk@gmail.com";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Politique de confidentialité" />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />

          <p className="chapter-rule">Vos données restent les vôtres</p>
          <h1 className="font-display text-4xl font-semibold text-foreground mt-3 mb-8">
            Politique de confidentialité
          </h1>

          <section className="space-y-8 text-foreground/90">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Le principe</h2>
              <p>
                FrançaisFacile+ ne vous demande ni compte, ni e-mail, ni inscription. Vous n'avez rien à
                fournir pour apprendre. C'est un choix : la connaissance doit rester accessible à tous, sans
                échange contre des données personnelles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                2. Ce que le site enregistre
              </h2>
              <p>
                Le site conserve uniquement sur votre appareil (dans le stockage local de votre navigateur)
                des informations techniques relatives à votre progression : votre meilleur score aux quiz,
                vos scores de dictées et vos leçons consultées. Ces données restent sur votre ordinateur ou
                téléphone et ne sont jamais transmises à un serveur, ni partagées avec un tiers.
              </p>
              <p className="mt-2">
                Vous pouvez les effacer à tout moment en vidant le stockage de votre navigateur, sans que cela
                n'affecte le fonctionnement du site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                3. Synthèse vocale
              </h2>
              <p>
                Les dictées et les boutons d'écoute utilisent la synthèse vocale intégrée à votre navigateur
                (Web Speech API). Le texte est lu localement sur votre appareil : aucune phrase n'est envoyée
                vers un service extérieur pour cette fonction.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                4. Statistiques anonymes
              </h2>
              <p>
                Le site peut collecter des statistiques de visite entièrement anonymes à l'aide d'un outil
                d'analyse statistique qui fonctionne sans cookie de pistage et sans identifiant personnel
                (nombre de visites, pages consultées) afin d'améliorer le service. Ces statistiques sont
                agrégées : elles ne contiennent ni nom, ni adresse e-mail, ni aucun élément permettant de
                vous identifier.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                5. Cookies
              </h2>
              <p>
                Le site lui-même n'utilise aucun cookie de pistage. Toutefois, des encarts publicitaires
                fournis par Google AdSense peuvent être affichés sur certaines pages. Ce service tiers peut
                déposer des cookies propres (notamment pour la personnalisation des annonces et la mesure
                d'audience). Ces publicités ne sont activées qu'après votre consentement explicite, obtenu
                par la bannière de cookies affichée lors de votre première visite, et votre choix est
                conservé pour les visites suivantes. Vous pouvez le modifier à tout moment en cliquant sur
                « Gérer les cookies » dans le pied de page, ou consulter la politique de confidentialité de
                Google et gérer vos préférences publicitaires sur la page « Paramètres des annonces
                Google ». Les mécanismes de stockage local du site décrits au point 2 restent, eux,
                purement locaux.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un
                droit d'accès, de rectification et de suppression de vos données. Comme le site ne collecte
                aucune donnée personnelle sur serveur, ces droits s'exercent principalement via le nettoyage
                du stockage de votre navigateur. Pour toute demande :{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                7. Contact
              </h2>
              <p>
                Pour toute question relative à la protection de vos données :{" "}
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
