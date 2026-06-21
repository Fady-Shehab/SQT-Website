import { t } from "@/utils/strings";
import { StatsCard } from "@/components";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HomeSections from "./components/HomeSections";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />

      <section id="stats" aria-label={t('statsAriaLabel')}>
        <div className="container">
          <div className="stats-row" role="list">
            <StatsCard value={26} label={t('statsMembers')} suffix="+" animate />
            <StatsCard value={15} label={t('statsProjects')} suffix="+" animate delay={0.1} />
            <StatsCard value={30} label={t('statsAchievements')} suffix="+" animate delay={0.2} />
            <StatsCard value={3} label={t('statsSeasons')} suffix="×" animate delay={0.3} />
          </div>
        </div>
      </section>

      <AboutSection />
      <HomeSections />
    </main>
  );
}
