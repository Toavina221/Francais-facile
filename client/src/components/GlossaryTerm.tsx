import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { glossary } from "@/data/glossary";

interface GlossaryTermProps {
  term: string;
  children?: React.ReactNode;
}

/**
 * Composant pour afficher un terme du glossaire avec un tooltip au survol.
 */
export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, children }) => {
  const info = glossary[term.toLowerCase()];

  if (!info) return <>{children || term}</>;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors">
            {children || term}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-3 bg-card border border-border shadow-md">
          <div className="space-y-1">
            <p className="font-display font-bold text-sm text-primary capitalize">{term}</p>
            <p className="text-xs text-foreground/90 leading-relaxed">{info.definition}</p>
            {info.translation && (
              <p className="text-[10px] italic text-muted-foreground mt-1">
                Traduction : {info.translation}
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
