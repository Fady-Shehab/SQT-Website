import { t } from "@/utils/strings";

export default function TeamHero() {
  return (
    <section id="team-hero" aria-labelledby="team-hero-h1">
      <div className="team-hero-content">
        <h1 id="team-hero-h1" className="team-hero-title" dangerouslySetInnerHTML={{ __html: t('teamHeroTitle') }} />
        <p className="team-hero-sub">
          {t('teamHeroSub')}
        </p>
      </div>
    </section>
  );
}
