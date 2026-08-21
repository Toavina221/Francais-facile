/**
 * FrançaisFacile+ — Dictionnaire des faux amis et erreurs fréquentes
 * Style « La Classe Parisienne » : chapter-rule, tampons, folios.
 * Filtrage par langue maternelle : anglais, arabe, espagnol, allemand.
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Globe2, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { fauxAmisData, nativeLangs, type NativeLang } from "@/data/fauxAmis";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LANG_FLAGS: Record<NativeLang, string> = {
  anglais: "🇬🇧",
  arabe: "🇸🇦",
  espagnol: "🇪🇸",
  allemand: "🇩🇪",
  turc: "🇹🇷",
  chinois: "🇨🇳",
  portugais: "🇵🇹",
  vietnamien: "🇻🇳",
  italien: "🇮🇹",
};

export default function FauxAmis() {
  const [lang, setLang] = useState<NativeLang | "all">("all");
  const sections = lang === "all" ? fauxAmisData : fauxAmisData.filter((s) => s.lang === lang);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Dictionnaire des faux amis et erreurs fréquentes" 
        description="Évitez les pièges de la langue française. Liste des faux amis et erreurs courantes classés par langue maternelle (anglais, arabe, espagnol, allemand, etc.)."
      />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs items={[{ label: "Faux amis & pièges" }]} />

          <p className="chapter-rule">Le carnet des pièges</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Faux amis &amp; erreurs fréquentes
          </h1>
          <p className="text-foreground/80 mb-10">
            Chaque langue maternelle a ses pièges : des mots qui se ressemblent mais mentent, des habitudes
            de traduction qui trahissent. Choisissez votre langue et découvrez les pièges qui vous guettent
            — pour mieux les éviter.
          </p>

          {/* Filtres par langue */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              type="button"
              onClick={() => setLang("all")}
              className={`quill-btn px-4 py-2 rounded-md text-sm font-medium transition-colors active:scale-[0.97] ${
                lang === "all"
                  ? "bg-foreground text-background dark:bg-primary dark:text-primary-foreground"
                  : "border border-border bg-card text-foreground/80 hover:border-foreground/30 dark:text-foreground/80 dark:hover:border-gold/50"
              }`}
            >
              Toutes les langues
            </button>
            {nativeLangs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`quill-btn px-4 py-2 rounded-md text-sm font-medium transition-colors active:scale-[0.97] ${
                  lang === l
                    ? "bg-foreground text-background dark:bg-primary dark:text-primary-foreground"
                    : "border border-border bg-card text-foreground/80 hover:border-foreground/30 dark:text-foreground/80 dark:hover:border-gold/50"
                }`}
              >
                <span className="mr-1.5" aria-hidden>
                  {LANG_FLAGS[l]}
                </span>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((s) => (
              <section key={s.lang} className="fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden>
                    {LANG_FLAGS[s.lang]}
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Pour les locuteurs de {s.label.toLowerCase()}
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6">{s.intro}</p>

                {/* Faux amis */}
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Globe2 className="h-4 w-4 text-primary" aria-hidden />
                  Les faux amis
                </h3>
                <div className="grid gap-4 md:grid-cols-2 mb-8">
                  {s.fauxAmis.map((f, i) => (
                    <div key={i} className="border border-border bg-card rounded-lg p-5">
                      <p className="font-display text-lg font-semibold text-foreground mb-1">« {f.trap} »</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        On croit que ça veut dire : <em>{f.belief}</em>
                      </p>
                      <p className="text-sm text-foreground/85 mb-2">{f.reality}</p>
                      <p className="text-sm italic text-forest">✓ {f.example}</p>
                    </div>
                  ))}
                </div>

                {/* Erreurs fréquentes */}
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-primary" aria-hidden />
                  Les erreurs fréquentes
                </h3>
                <div className="space-y-3">
                  {s.errors.map((e, i) => (
                    <div key={i} className="border-l-2 border-destructive/40 bg-card rounded-r-lg p-4">
                      <p className="text-foreground/90 mb-1">
                        <XCircle className="h-4 w-4 text-destructive inline mr-1.5 -mt-0.5" aria-hidden />
                        <s>{e.error}</s>
                      </p>
                      <p className="text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-forest inline mr-1.5 -mt-0.5" aria-hidden />
                        <strong>{e.correction}</strong>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{e.explanation}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="tip-box mt-12">
            <p className="font-display font-semibold text-foreground mb-1">Le conseil du professeur</p>
            <p className="text-foreground/90">
              Ne mémorisez pas cette page d'un coup. Choisissez deux pièges par jour, écrivez-les sur un
              carnet avec votre propre exemple, et relisez le carnet chaque semaine. Votre langue maternelle
              est une force : elle vous donne des repères. Ce sont les exceptions qu'il faut apprivoiser.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
