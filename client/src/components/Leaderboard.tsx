/**
 * FrançaisFacile+ — Tableau d'honneur (Simulation Locale)
 * Affiche un classement fictif pour motiver l'utilisateur.
 */
import { Trophy, Medal, Star } from "lucide-react";

interface LeaderboardEntry {
  name: string;
  score: number;
  level: string;
  isUser?: boolean;
}

const MOCK_LEADERS: LeaderboardEntry[] = [
  { name: "Marie L.", score: 2450, level: "C1" },
  { name: "Ahmed K.", score: 2120, level: "B2" },
  { name: "Elena S.", score: 1980, level: "B2" },
  { name: "John D.", score: 1850, level: "B1" },
  { name: "Yuki M.", score: 1720, level: "B1" },
];

export function Leaderboard({ userScore = 0 }: { userScore?: number }) {
  // On insère l'utilisateur dans le classement s'il a un score
  const leaders = [...MOCK_LEADERS];
  if (userScore > 0) {
    leaders.push({ name: "Vous", score: userScore, level: "A1", isUser: true });
  }
  leaders.sort((a, b) => b.score - a.score);

  return (
    <div className="folio p-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="size-5 text-[var(--gold)]" />
        <h2 className="font-display text-xl font-bold">Tableau d'honneur</h2>
      </div>

      <div className="space-y-3">
        {leaders.map((entry, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              entry.isUser 
                ? "bg-primary/5 border-primary ring-1 ring-primary dark:bg-primary/10 dark:border-primary" 
                : "bg-card border-border dark:bg-muted/10"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-6 text-center font-display font-bold text-muted-foreground">
                {i === 0 ? <Medal className="size-5 text-[var(--gold)] mx-auto" /> : i + 1}
              </div>
              <div>
                <p className="font-sans font-semibold leading-none flex items-center gap-2">
                  {entry.name}
                  {entry.isUser && <Star className="size-3 text-primary fill-primary" />}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                  Niveau {entry.level}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-primary">{entry.score} pts</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-[10px] text-center text-muted-foreground mt-6 italic">
        Le classement est mis à jour chaque lundi à minuit.
      </p>
    </div>
  );
}
