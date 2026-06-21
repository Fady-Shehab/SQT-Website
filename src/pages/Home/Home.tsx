import { StatsCard } from "@/components";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HomeSections from "./components/HomeSections";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />

      <section id="stats" aria-label="إحصائيات الفريق">
        <div className="container">
          <div className="stats-row" role="list">
            <StatsCard value={26} label="عضو في الفريق" suffix="+" animate />
            <StatsCard value={15} label="مشروع منجز" suffix="+" animate delay={0.1} />
            <StatsCard value={30} label="إنجاز مُحقق" suffix="+" animate delay={0.2} />
            <StatsCard value={3} label="موسم مجد" suffix="×" animate delay={0.3} />
          </div>
        </div>
      </section>

      <AboutSection />
      <HomeSections />
    </main>
  );
}
