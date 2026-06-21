import HofHero from "./components/HofHero";
import Seasons from "./components/Seasons";
import Leaderboard from "./components/Leaderboard";
import Legends from "./components/Legends";

export default function HallOfFamePage() {
  return (
    <main id="main-content">
      <HofHero />
      <Seasons />
      <Leaderboard />
      <Legends />
    </main>
  );
}
