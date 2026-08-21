import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LevelsHub from "./pages/LevelsHub";
import LevelPage from "./pages/LevelPage";
import LessonPage from "./pages/LessonPage";
import DelfPage from "./pages/DelfPage";
import TestNiveau from "./pages/TestNiveau";
import Dictees from "./pages/Dictees";
import Fiches from "./pages/Fiches";
import FauxAmis from "./pages/FauxAmis";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";
import Contact from "./pages/Contact";
import ToutesLesLecons from "./pages/ToutesLesLecons";
import Stats from "./pages/Stats";
import CookieBanner from "./components/CookieBanner";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/niveaux"} component={LevelsHub} />
      <Route path={"/niveaux/:level"} component={LevelPage} />
      <Route path={"/lecon/:level/:slug"} component={LessonPage} />
      <Route path={"/test-niveau"} component={TestNiveau} />
      <Route path={"/delf"} component={DelfPage} />
      <Route path={"/delf/:slug"} component={DelfPage} />
      <Route path={"/toutes-les-lecons"} component={ToutesLesLecons} />
      <Route path={"/dictees"} component={Dictees} />
      <Route path={"/fiches"} component={Fiches} />
      <Route path={"/faux-amis"} component={FauxAmis} />
      <Route path={"/mentions-legales"} component={MentionsLegales} />
      <Route path={"/politique-confidentialite"} component={PolitiqueConfidentialite} />
      <Route path={"/conditions-utilisation"} component={ConditionsUtilisation} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/stats"} component={Stats} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
