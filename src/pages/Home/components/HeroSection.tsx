import { t } from "@/utils/strings";
import { Button, Icon } from "@/components";

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-h1">
      <div className="eg-pattern" aria-hidden="true"></div>
      <div className="hero-gems" aria-hidden="true">
        <div className="gem gem-1"></div>
        <div className="gem gem-2"></div>
        <div className="gem gem-3"></div>
        <div className="gem gem-4"></div>
        <div className="gem gem-5"></div>
      </div>

      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot" aria-hidden="true"></span>
          {t('heroPillLabel')}
        </div>

        <div className="hero-title-wrap" id="hero-h1">
          {/* eslint-disable-next-line sqt/no-inline-strings */}
          <span className="hero-label-ar">SHARQ TECH</span>
          <span className="hero-word-sharq" aria-label={t('heroTitle')}>
            {t('heroTitle')}
          </span>
          <span className="hero-tech-chip" aria-label={t('heroTechChip')}>
            <Icon name="code-brackets" size={14} />
            {t('heroTechChip')}
          </span>
        </div>

        <div className="hero-ornament-line" aria-hidden="true">
          <div className="hero-orn-diamond"></div>
        </div>

        <p className="hero-tagline">
          {t('heroTagline')}
        </p>

        <div className="hero-actions">
          <Button as="a" href="/team" variant="primary">{t('heroCtaTeam')}</Button>
          <Button as="a" href="/projects" variant="secondary">{t('heroCtaProjects')}</Button>
        </div>
      </div>

      <div className="hero-skyline" aria-hidden="true">
        <Icon name="skyline" size={1440} style={{ width: '100%', display: 'block' }} />
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <div className="scroll-cue-arrow">
          <Icon name="chevron-down" size={14} />
        </div>
      </div>
    </section>
  );
}
