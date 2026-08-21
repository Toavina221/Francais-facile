/**
 * FrançaisFacile+ — Ma progression
 * Style « La Classe Parisienne » : éditorial, crème/bleu encre, mode sombre disponible.
 * Graphiques d'évolution des scores (recharts) + vue par niveau, tout stocké localement.
 */
import { Link } from "wouter";
import { useProgress } from "@/hooks/useProgress";
import { allLessons, levelInfos, type LevelId } from "@/data";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Trophy,
  Target,
  BookMarked,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState, useMemo } from "react";
import { generateCertificate } from "@/lib/certificate";
import { toast } from "sonner";
import { Leaderboard } from "@/components/Leaderboard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LEVELS: LevelId[] = ["A1", "A2", "B1", "B2", "B2+", "C1"];

function evolutionData(history: { lessonId: string; score: number; total: number; date: string }[]) {
  return history
    .slice(-40)
    .map((h) => ({
      date: new Date(h.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
      }),
      pourcentage: Math.round((h.score / h.total) * 100),
      titre: h.lessonId,
    }));
}

function levelData(
  completed: Record<string, { score: number; total: number; date: string }>,
) {
  return LEVELS.map((lvl) => {
    const lessons = allLessons[lvl];
    const done = lessons.filter((l) => completed[l.lesson.id]);
    const totalLessons = lessons.length;
    const best =
      done.length === 0
        ? 0
        : Math.round(
            (done.reduce((s, l) => s + completed[l.lesson.id].score / completed[l.lesson.id].total, 0) / done.length) * 100,
          );
    return {
      niveau: lvl,
      lecons: `${done.length}/${totalLessons}`,
      meilleur: best,
      fait: done.length,
    };
  });
}

const STAMP: Record<LevelId, string> = {
  A1: "stamp-a1",
  A2: "stamp-a2",
  B1: "stamp-b1",
  B2: "stamp-b2",
  "B2+": "stamp-b2p",
  C1: "stamp-c1",
};

export default function Stats() {
  const { completed, history, badges, email, saveEmail } = useProgress();
  const [level, setLevel] = useState<LevelId>("A1");
  const data = useMemo(() => levelData(completed), [completed]);
  const evolution = useMemo(() => evolutionData(history), [history]);
  const totalQuizzes = Object.keys(completed).length;
  const totalDone = data.reduce((s, d) => s + d.fait, 0);
  const lessonsCount = Object.values(allLessons).reduce(
    (s, a) => s + (a as any[]).length,
    0,
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ma progression et distinctions" 
        description="Suivez votre évolution en français. Consultez vos scores de quiz, vos badges et téléchargez votre certificat de réussite."
      />
      <Header />
      <div className="container py-10 lg:py-14 flex-1">
        <Breadcrumbs items={[{ label: "Ma progression" }]} />
        
        <p className="chapter-rule">Mon carnet de notes</p>
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          Ma progression
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mb-10">
          Vos résultats sont conservés localement sur votre appareil. Voici
          l'évolution de vos scores : le chemin parcouru vaut tous les
          diplômes.
        </p>

        {badges.length > 0 && (
          <div className="mb-10">
            <p className="chapter-rule mb-4">Mes distinctions</p>
            <div className="flex flex-wrap gap-4">
              {badges.includes("plume-bronze") && (
                <div className="folio p-4 flex items-center gap-3 bg-secondary/30 border-[#cd7f32]/30 dark:border-[#cd7f32]/50">
                  <div className="bg-[#cd7f32] p-2 rounded-full shadow-sm">
                    <Trophy className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">Plume de Bronze</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80">5 leçons maîtrisées</p>
                  </div>
                </div>
              )}
              {badges.includes("plume-argent") && (
                <div className="folio p-4 flex items-center gap-3 bg-secondary/30 border-[#c0c0c0]/30 dark:border-[#c0c0c0]/50">
                  <div className="bg-[#c0c0c0] p-2 rounded-full shadow-sm">
                    <Trophy className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">Plume d'Argent</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80">12 leçons maîtrisées</p>
                  </div>
                </div>
              )}
              {badges.includes("plume-or") && (
                <div className="folio p-4 flex flex-col sm:flex-row items-center gap-4 bg-secondary/30 border-[var(--gold)]/30 dark:border-[var(--gold)]/50">
                  <div className="flex items-center gap-3">
                    <div className="bg-[var(--gold)] p-2 rounded-full shadow-sm">
                      <Trophy className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">Plume d'Or</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80">23 leçons maîtrisées</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const name = prompt("Entrez votre nom pour le certificat :");
                      if (name) {
                        generateCertificate(name, "C1", false);
                        if (!email) {
                          const userEmail = prompt("Voulez-vous également recevoir ce certificat par email ? Entrez votre adresse :");
                          if (userEmail) {
                            saveEmail(userEmail);
                            toast.success(`Certificat envoyé à ${userEmail} ! (Simulation)`);
                          } else {
                            toast.success("Certificat généré avec succès !");
                          }
                        } else {
                          toast.success(`Certificat envoyé à ${email} ! (Simulation)`);
                        }
                      }
                    }}
                    className="text-[10px] px-3 py-1.5 rounded bg-[var(--gold)] text-white hover:opacity-90 transition-opacity"
                  >
                    Télécharger mon certificat
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start mb-10">
          <div className="grid gap-4 sm:grid-cols-3">
              <div className="folio p-5">
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80 flex items-center gap-2 mb-1">
                  <Target className="size-4 text-[var(--gold)]" /> Leçons suivies
                </p>
                <p className="font-display text-3xl font-bold text-foreground">
                  {totalDone} <span className="text-base font-sans text-muted-foreground dark:text-muted-foreground/60">/ {lessonsCount}</span>
                </p>
              </div>
              <div className="folio p-5">
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80 flex items-center gap-2 mb-1">
                  <Trophy className="size-4 text-[var(--gold)]" /> Quiz terminés
                </p>
                <p className="font-display text-3xl font-bold text-foreground">{totalQuizzes}</p>
              </div>
              <div className="folio p-5">
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground dark:text-muted-foreground/80 flex items-center gap-2 mb-1">
                  <TrendingUp className="size-4 text-[var(--gold)]" /> Tendances
                </p>
                <p className="font-display text-3xl font-bold text-foreground">
                  {evolution.length >= 2
                    ? `${evolution[evolution.length - 1].pourcentage - evolution[0].pourcentage >= 0 ? "+" : ""}${evolution[evolution.length - 1].pourcentage - evolution[0].pourcentage} pts`
                    : "—"}
                </p>
              </div>
          </div>
          <aside>
            <Leaderboard userScore={Object.values(completed).reduce((acc, curr: any) => acc + curr.score * 10, 0)} />
          </aside>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-4 py-2 rounded-md font-sans text-sm border transition-colors ${
                level === lvl
                  ? `bg-primary text-primary-foreground border-primary dark:bg-primary dark:text-primary-foreground`
                  : "bg-card hover:border-primary/40 text-foreground/70 hover:text-foreground dark:text-foreground/80 dark:hover:border-gold/50"
              }`}
            >
              {levelInfos.find((i) => i.id === lvl)?.title ?? lvl}
            </button>
          ))}
        </div>

        <div className="folio p-6 mb-8">
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="font-display text-2xl font-bold">Niveaux</h2>
            <span className={`${STAMP[level]} font-sans text-xs px-2 py-0.5 rounded-sm`}>
              Niveau {level}
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="niveau" tick={{ fontSize: 13 }} />
                <YAxis unit="%" domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="meilleur" name="Score moyen" fill="var(--primary)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="folio p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4">L'évolution de vos scores</h2>
          {evolution.length === 0 ? (
            <div className="py-16 text-center bg-secondary/20 rounded-lg border-2 border-dashed border-border/50">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <BookMarked className="size-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Votre carnet est encore vierge</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                Chaque grand voyage commence par un premier pas. Terminez votre première leçon et son quiz pour voir votre progression s'afficher ici.
              </p>
              <Link href="/niveaux" className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold transition-transform active:scale-[0.97]">
                Commencer ma première leçon <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evolution} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis unit="%" domain={[0, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      fontSize: 13,
                    }}
                  />
                  <Line type="monotone" dataKey="pourcentage" stroke="var(--gold)" strokeWidth={2.5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <blockquote className="border-l-2 border-[var(--gold)] pl-5 italic text-foreground/80 dark:text-slate-300">
          « Un élève régulier bat un élève doué : la constance est la vraie grammaire de la réussite. »
          <footer className="mt-2 font-sans text-sm text-muted-foreground dark:text-slate-400 not-italic">
            — Le mot du professeur, FrançaisFacile+
          </footer>
        </blockquote>
      </div>
      <Footer />
    </div>
  );
}
