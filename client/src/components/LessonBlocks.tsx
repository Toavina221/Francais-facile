/**
 * FrançaisFacile+ — Rendu des blocs de leçon
 * Style « La Classe Parisienne » : encadrés règle/astuce/exemple, mots-clés soulignés.
 * Synthèse vocale française (fr-FR) sur les blocs d'exemple et de règle.
 */
import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { LessonBlock } from "@/data/types";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import { glossary } from "@/data/glossary";

/** Texte brut des exemples pour la synthèse vocale (sans Markdown) */
export function stripMarkdown(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1");
}

/**
 * Parle une phrase en français grâce à la Web Speech API.
 * Relance la lecture si l'on rappelle la fonction : on arrête puis on relit.
 */
let currentUtterance: SpeechSynthesisUtterance | null = null;
export function speakFrench(text: string): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.rate = 0.92; // légèrement lent, adapté à l'apprentissage
  utter.pitch = 1;
  // Choisir une voix française si disponible
  const voices = synth.getVoices();
  const fr = voices.find((v) => v.lang.startsWith("fr"));
  if (fr) utter.voice = fr;
  currentUtterance = utter;
  synth.speak(utter);
}

export function stopSpeaking(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

/** Bouton 🔊 réutilisable pour écouter un bloc */
export function SpeakButton({ text, label }: { text: string; label: string }) {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
    } else {
      speakFrench(text);
      setPlaying(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Arrêter la lecture" : `Écouter : ${label}`}
      title={playing ? "Arrêter" : "Écouter la prononciation"}
      className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 p-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary active:scale-95"
    >
      {playing ? (
        <VolumeX className="h-3.5 w-3.5" aria-hidden />
      ) : (
        <Volume2 className="h-3.5 w-3.5" aria-hidden />
      )}
    </button>
  );
}

/** Rend un texte Markdown léger avec intégration du glossaire interactif */
export function renderInline(text: string) {
  // 1. Découper d'abord par Markdown (gras/italique)
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-primary">
          {part.slice(1, -1)}
        </em>
      );
    }

    // 2. Pour le texte brut, chercher les termes du glossaire
    // On utilise une approche simple : on cherche les mots clés exacts
    const glossaryTerms = Object.keys(glossary);
    // Trier par longueur décroissante pour éviter les correspondances partielles
    glossaryTerms.sort((a, b) => b.length - a.length);

    let content: (string | React.ReactNode)[] = [part];

    glossaryTerms.forEach((term) => {
      const newContent: (string | React.ReactNode)[] = [];
      content.forEach((segment) => {
        if (typeof segment !== "string") {
          newContent.push(segment);
          return;
        }

        // Regex pour trouver le terme avec des frontières de mots
        // On gère aussi les pluriels simples (s) et les majuscules
        const regex = new RegExp(`(\\b${term}s?\\b)`, "gi");
        const subParts = segment.split(regex);

        subParts.forEach((subPart, j) => {
          if (subPart.toLowerCase().startsWith(term.toLowerCase())) {
            newContent.push(
              <GlossaryTerm key={`${i}-${term}-${j}`} term={term}>
                {subPart}
              </GlossaryTerm>
            );
          } else if (subPart !== "") {
            newContent.push(subPart);
          }
        });
      });
      content = newContent;
    });

    return <React.Fragment key={i}>{content}</React.Fragment>;
  });
}

export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <p key={i} className="text-foreground/90">
                {renderInline(block.content)}
              </p>
            );
          case "rule":
            return (
              <div key={i} className="rule-box fade-up">
                {block.title && (
                  <p className="font-display font-semibold text-foreground mb-1">
                    ✦ {block.title}
                  </p>
                )}
                <p className="text-foreground/90">{renderInline(block.content)}</p>
              </div>
            );
          case "example":
            return (
              <div key={i} className="example-box">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {block.title && (
                      <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1 not-italic">
                        {block.title}
                      </p>
                    )}
                    <p className="text-foreground/85">{renderInline(block.content)}</p>
                  </div>
                  <SpeakButton
                    text={stripMarkdown(block.content)}
                    label={block.title ?? "exemple"}
                  />
                </div>
              </div>
            );
          case "tip":
            return (
              <div key={i} className="tip-box">
                {block.title && (
                  <p className="font-display font-semibold text-foreground mb-1">
                    Le conseil du professeur
                  </p>
                )}
                <p className="text-foreground/90">{renderInline(block.content)}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
