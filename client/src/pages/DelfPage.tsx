/**
 * FrançaisFacile+ — Module préparation DELF/TCF
 */
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, GraduationCap, ClipboardList, Lightbulb, ArrowRight } from "lucide-react";
import { delphModules, getDelphModule } from "@/data";
import { QuizRunner } from "@/components/QuizRunner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { renderInline } from "@/components/LessonBlocks";
import { ExamenBlanc } from "@/components/ExamenBlanc";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { useState } from "react";

function DelfDetail({ slug }: { slug: string }) {
  const [examMode, setExamMode] = useState(false);
  const [isRealMode, setIsRealMode] = useState(false);
  const mod = getDelphModule(slug);
  if (!mod) {
    return (
      <div className="container py-20 text-center">
        <SEO title="Module DELF introuvable" />
        <Breadcrumbs items={[{ label: "Préparation DELF", href: "/delf" }, { label: "Module introuvable" }]} />
        <p>Module introuvable.</p>
        <Button asChild className="mt-4 font-sans">
          <Link href="/delf">Tous les modules DELF</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="container py-10">
      <SEO 
        title={mod.title} 
        description={`Préparez votre examen de français : ${mod.title}. Structure de l'épreuve, phrases clés, conseils et quiz de mise en condition.`}
      />
      <Breadcrumbs items={[{ label: "Préparation DELF", href: "/delf" }, { label: mod.title }]} />
      <header className="py-6 border-b border-border mb-8 fade-up">
        <p className="font-display italic text-[var(--gold)] text-sm mb-1">
          Niveau {mod.level} · Préparation à l'examen officiel
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          {mod.title}
        </h1>
        <p className="text-foreground/75 max-w-2xl">{mod.description}</p>
      </header>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <Tabs defaultValue="structure" className="max-w-3xl">
          <TabsList className="w-full grid grid-cols-3 font-sans bg-muted/30 dark:bg-muted/10">
            <TabsTrigger 
              value="structure" 
              className="gap-1.5 data-[state=active]:bg-card data-[state=active]:text-foreground dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white dark:text-slate-300"
            >
              <ClipboardList className="size-4" /> L'examen
            </TabsTrigger>
            <TabsTrigger 
              value="clefs" 
              className="gap-1.5 data-[state=active]:bg-card data-[state=active]:text-foreground dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white dark:text-slate-300"
            >
              <Lightbulb className="size-4" /> Phrases clés
            </TabsTrigger>
            <TabsTrigger 
              value="conseils" 
              className="gap-1.5 data-[state=active]:bg-card data-[state=active]:text-foreground dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white dark:text-slate-300"
            >
              <GraduationCap className="size-4" /> Conseils
            </TabsTrigger>
          </TabsList>
          {["structure", "clefs", "conseils"].map((tab, i) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              {mod.sections[i] ? (
                <div className="rule-box">
                  <h3 className="font-display font-semibold mb-2">
                    {mod.sections[i].title}
                  </h3>
                  <div className="text-foreground/90 leading-relaxed">
                    {renderInline(mod.sections[i].content)}
                  </div>
                </div>
              ) : null}
            </TabsContent>
          ))}
        </Tabs>

        <div className="lg:sticky lg:top-24">
          {!examMode ? (
            <div className="folio p-6">
              <h2 className="font-display text-lg font-semibold mb-1">
                Quiz de mise en condition
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Testez vos connaissances sur le fonctionnement de l'examen avant
                le grand jour.
              </p>
              <QuizRunner
                key={mod.id}
                questions={mod.practice}
                lessonId={mod.id}
              />
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-display font-semibold text-sm mb-2 flex items-center gap-2">
                  <GraduationCap className="size-4 text-primary" /> Mode intensif
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Prêt pour le grand jour ? Essayez le mode Examen Blanc : 
                  chronométré, sans aide, pour une mise en situation réelle.
                </p>
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={() => {
                      setIsRealMode(false);
                      setExamMode(true);
                    }} 
                    variant="outline" 
                    className="w-full font-sans text-xs border-primary text-primary hover:bg-primary/5 dark:border-primary-foreground dark:text-primary-foreground dark:bg-primary/80 dark:hover:bg-primary/90"
                  >
                    Lancer l'Examen Blanc
                  </Button>
                  <Button 
                    onClick={() => {
                      setIsRealMode(true);
                      setExamMode(true);
                    }} 
                    variant="outline" 
                    className="w-full font-sans text-xs border-rose-200 text-rose-700 hover:bg-rose-50 dark:border-rose-400 dark:text-rose-950 dark:bg-rose-400 dark:hover:bg-rose-500"
                  >
                    Mode Examen Réel
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <ExamenBlanc 
              title={mod.title}
              durationMinutes={mod.level.startsWith('A') ? 10 : 15}
              questions={mod.practice}
              isRealMode={isRealMode}
              onCancel={() => setExamMode(false)}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export default function DelfPage() {
  const params = useParams<{ slug?: string }>();

  if (params.slug) return <DelfDetail slug={params.slug} />;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Préparation aux examens DELF et TCF" 
        description="Réussissez vos examens officiels de français (DELF A1 à B2, TCF Canada). Modules de préparation complets avec conseils et examens blancs."
      />
      <Header />
      <section className="container py-12">
        <p className="chapter-rule mb-6">
          <span className="font-display italic text-[var(--gold)] text-sm">
            Chapitre spécial — Examens officiels
          </span>
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Préparation DELF et TCF
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Le DELF (Diplôme d'Études en Langue Française) et le TCF (Test de
          Connaissance du Français) sont les certifications officielles qui
          attestent de votre niveau. Choisissez le module qui correspond à
          votre objectif.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {delphModules.map((mod, i) => (
            <Link
              key={mod.id}
              href={`/delf/${mod.slug}`}
              className="group folio p-7 transition-all fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={`inline-block font-sans text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-3 ${mod.level === "A1" ? "stamp-a1" : "stamp-b1"}`}>
                {mod.level}
              </span>
              <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {mod.title}
              </h2>
              <p className="text-sm text-foreground/75 mb-4">{mod.description}</p>
              <span className="font-sans text-sm font-semibold text-primary flex items-center gap-1">
                Entrer en révision <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="rule-box mt-12 max-w-3xl">
          <p className="font-display italic text-lg leading-relaxed">
            « Un examen se prépare comme on apprend une langue : régulièrement,
            calmement, avec méthode. Lisez chaque module, entraînez-vous aux
            quiz, et le jour J, vous serez prêt. »
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-2 not-italic">
            — Le mot du professeur, FrançaisFacile+
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
