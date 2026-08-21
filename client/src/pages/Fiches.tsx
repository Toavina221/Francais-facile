/**
 * FrançaisFacile+ — Fiches de révision récapitulatives
 * Style « La Classe Parisienne » : chapter-rule, folios, tampons de niveau.
 * Vue imprimable en PDF : header/footer cachés, fiche en pleine page, marges @page.
 */
import { Link } from "wouter";
import { useState } from "react";
import { ArrowLeft, Printer, FileText } from "lucide-react";
import { revisionSheets } from "@/data/fichesRevision";
import type { LevelId } from "@/data/types";
import { stampClass } from "@/lib/stampClass";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LEVELS: LevelId[] = ["A1", "A2", "B1", "B2", "B2+", "C1"];

export default function Fiches() {
  const [selected, setSelected] = useState<LevelId | null>(null);
  const sheet = revisionSheets.find((s) => s.level === selected) ?? null;

  const print = () => window.print();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={sheet ? `Fiche de révision : ${sheet.title}` : "Fiches de révision imprimables"} 
        description={sheet ? `Consultez la fiche de révision "${sheet.title}" (niveau ${sheet.level}). Toutes les règles essentielles résumées sur une page imprimable.` : "Téléchargez et imprimez nos fiches de révision gratuites pour chaque niveau de français de A1 à C1. L'essentiel de la grammaire en un coup d'œil."}
      />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          {!sheet ? (
            <>
              <Breadcrumbs items={[{ label: "Fiches de révision" }]} />

              <p className="chapter-rule">Le mémento du professeur</p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
                Fiches de révision
              </h1>
              <p className="text-foreground/80 mb-10">
                Une fiche par niveau résume toutes les règles essentielles de vos leçons. Imprimez-les,
                affichez-les sur votre mur, relisez-les avant chaque quiz : la révision régulière vaut mieux
                que la révision intensive.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {revisionSheets.map((s) => (
                  <button
                    key={s.level}
                    type="button"
                    onClick={() => setSelected(s.level)}
                    className="folio text-left border border-border bg-card rounded-lg p-6 transition-colors dark:text-foreground/80 dark:hover:border-gold/50"
                  >
                    <div className={`${stampClass(s.level)} inline-block mb-3`}>
                      Niveau {s.level}
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">{s.title}</h2>
                    <p className="text-sm text-foreground/70 dark:text-muted-foreground/80">{s.subtitle}</p>
                    <p className="mt-4 text-sm text-primary font-medium inline-flex items-center gap-1.5">
                      <FileText className="h-4 w-4" aria-hidden />
                      Ouvrir la fiche
                    </p>
                  </button>
                ))}
              </div>

              <div className="tip-box mt-12">
                <p className="font-display font-semibold text-foreground mb-1">Comment utiliser ces fiches</p>
                <p className="text-foreground/90">
                  Lisez la fiche après avoir terminé les leçons du niveau, puis une dernière fois la veille
                  d'un quiz ou d'un examen. Couvrez les exemples et récitez la règle à voix haute : si vous
                  pouvez l'expliquer, vous l'avez comprise.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="no-print mb-8">
                <Breadcrumbs items={[{ label: "Fiches de révision", href: "/fiches" }, { label: sheet.title }]} />
              </div>
              <div className="no-print flex items-center justify-between gap-3 mb-8">
                <button
                  type="button"
                  onClick={print}
                  className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-transform active:scale-[0.97]"
                >
                  <Printer className="h-4 w-4" aria-hidden />
                  Imprimer en PDF
                </button>
              </div>

              <div className="print-page border border-border bg-card rounded-lg p-8 md:p-10 shadow-sm print-only-hidden">
                <div className={`${stampClass(sheet.level)} inline-block mb-4`}>
                  Niveau {sheet.level}
                </div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-2">{sheet.title}</h2>
                <p className="text-foreground/70 mb-8">{sheet.subtitle}</p>

                {sheet.sections.map((sec, si) => (
                  <section key={si} className="mb-8">
                    <h3 className="font-display text-lg font-semibold text-foreground border-b-2 border-accent pb-1 mb-3">
                      {sec.title}
                    </h3>
                    <div className="space-y-3">
                      {sec.items.map((item, ii) => (
                        <div key={ii} className="rule-box">
                          <p className="text-foreground/90">{item.rule}</p>
                          <p className="text-foreground/70 italic mt-1">
                            Exemple : {item.example}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                <p className="text-xs text-muted-foreground dark:text-muted-foreground/80 border-t border-border pt-4">
                  FrançaisFacile+ — Fiche de révision, niveau {sheet.level}. Une erreur est une leçon qui commence.
                </p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
