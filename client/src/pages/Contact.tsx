/**
 * FrançaisFacile+ — Page de contact
 * Formulaire qui ouvre le client de messagerie de l'apprenant (mailto), e-mail helpscannerapk@gmail.com.
 */
import { useState } from "react";
import { Link } from "wouter";
import { Mail, BookOpen, Bug } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const EMAIL = "helpscannerapk@gmail.com";

const subjects = [
  { id: "question", label: "Une question sur une leçon", icon: BookOpen },
  { id: "error", label: "Signaler une erreur", icon: Bug },
  { id: "other", label: "Autre demande", icon: Mail },
];

export default function Contact() {
  const [subject, setSubject] = useState("question");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name || "Un apprenant"}`);
    const subj = encodeURIComponent(
      subject === "question"
        ? "Question sur une leçon — FrançaisFacile+"
        : subject === "error"
          ? "Erreur signalée — FrançaisFacile+"
          : "Demande — FrançaisFacile+",
    );
    window.location.href = `mailto:${EMAIL}?subject=${subj}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contactez-nous" 
        description="Une question sur une leçon ou une erreur à signaler ? Contactez l'équipe de FrançaisFacile+ par e-mail."
      />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <p className="chapter-rule">Écrivons-nous</p>
          <h1 className="font-display text-4xl font-semibold text-foreground mt-3 mb-4">
            Contact
          </h1>
          <p className="text-foreground/80 mb-10">
            Une question sur une leçon ? Une erreur à signaler ? Une idée pour améliorer le site ? Le
            professeur vous répond personnellement.
          </p>

          <div className="border border-border bg-card rounded-lg p-6 md:p-8">
            <p className="text-sm text-muted-foreground mb-6 inline-flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              Votre message sera envoyé à <strong className="text-foreground">{EMAIL}</strong> via votre
              messagerie.
            </p>

            <form onSubmit={submit} className="space-y-6">
              <fieldset>
                <legend className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Sujet de votre message
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {subjects.map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSubject(s.id)}
                        className={`quill-btn flex items-center justify-center gap-2 border rounded-md px-3 py-3 text-sm font-medium transition-colors active:scale-[0.98] ${
                          subject === s.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-background text-foreground/70 hover:border-foreground/30"
                        }`}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="contact-name" className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Votre nom (facultatif)
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex. : Amina"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/60"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                  Votre message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Décrivez votre question avec précision : le niveau, la leçon, et ce qui vous bloque…"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/60"
                />
              </div>

              <button
                type="submit"
                className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-transform active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Ouvrir ma messagerie
              </button>
            </form>
          </div>

          <div className="tip-box mt-10">
            <p className="font-display font-semibold text-foreground mb-1">Une réponse rapide</p>
            <p className="text-foreground/90">
              Nous lisons chaque message. Si votre question porte sur une leçon précise, indiquez son titre
              : cela nous permet de vous répondre avec la règle exacte et des exemples supplémentaires.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
