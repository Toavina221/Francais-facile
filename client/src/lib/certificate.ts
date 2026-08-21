import { jsPDF } from "jspdf";

/**
 * Génère un certificat PDF personnalisé pour un utilisateur ayant atteint un niveau.
 */
export function generateCertificate(userName: string, level: string, isQuiz = false) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // --- Fond crème ---
  doc.setFillColor(252, 251, 247);
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // --- Bordure double or ---
  doc.setDrawColor(184, 134, 11); // Gold
  doc.setLineWidth(1.5);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
  doc.setLineWidth(0.5);
  doc.rect(13, 13, pageWidth - 26, pageHeight - 26);

  // --- En-tête ---
  doc.setTextColor(15, 23, 42); // Navy
  doc.setFont("times", "italic");
  doc.setFontSize(22);
  doc.text("FrançaisFacile+", pageWidth / 2, 35, { align: "center" });

  doc.setFont("times", "normal");
  doc.setFontSize(38);
  doc.text(isQuiz ? "RAPPORT DE QUIZ" : "CERTIFICAT DE RÉUSSITE", pageWidth / 2, 60, { align: "center" });

  // --- Corps du texte ---
  doc.setFontSize(18);
  doc.text(isQuiz ? "Ce rapport confirme les résultats de" : "Ce document atteste que", pageWidth / 2, 85, { align: "center" });

  doc.setFont("times", "bold");
  doc.setFontSize(32);
  doc.text(userName.toUpperCase(), pageWidth / 2, 105, { align: "center" });

  doc.setFont("times", "normal");
  doc.setFontSize(18);
  doc.text(
    isQuiz 
      ? `pour l'évaluation suivante :`
      : `a complété avec succès l'intégralité du parcours de formation`,
    pageWidth / 2,
    125,
    { align: "center" }
  );

  doc.setFont("times", "bolditalic");
  doc.setFontSize(24);
  doc.setTextColor(184, 134, 11);
  doc.text(isQuiz ? level : `Niveau ${level} — CECRL`, pageWidth / 2, 140, { align: "center" });

  doc.setTextColor(15, 23, 42);
  doc.setFont("times", "normal");
  doc.setFontSize(14);
  doc.text(
    isQuiz
      ? "L'apprenant a démontré une compréhension des points clés abordés dans cette leçon."
      : "Félicitations pour votre assiduité et votre maîtrise de la langue française.",
    pageWidth / 2,
    160,
    { align: "center" }
  );

  // --- Pied de page ---
  const date = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.setFontSize(12);
  doc.text(`Délivré le ${date}`, 30, 185);

  doc.setFont("times", "italic");
  doc.text("La Direction Pédagogique", pageWidth - 70, 185);
  
  // Signature simulée
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.5);
  doc.line(pageWidth - 75, 187, pageWidth - 35, 187);

  // --- Filigrane / Tampon ---
  doc.setDrawColor(184, 134, 11);
  doc.setLineWidth(1);
  doc.circle(pageWidth - 40, 50, 15);
  doc.setFontSize(10);
  doc.text("PLUME D'OR", pageWidth - 40, 51, { align: "center" });

  // Sauvegarde
  const fileName = isQuiz 
    ? `Rapport_Quiz_${userName.replace(/\s+/g, "_")}.pdf`
    : `Certificat_FrancaisFacile_${level}_${userName.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);
}
