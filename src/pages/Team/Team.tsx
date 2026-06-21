import TeamHero from "./components/TeamHero";
import MembersSection from "./components/MembersSection";
import CultureSection from "./components/CultureSection";

export default function TeamPage() {
  return (
    <main id="main-content">
      <TeamHero />
      <MembersSection />
      <CultureSection />
    </main>
  );
}
