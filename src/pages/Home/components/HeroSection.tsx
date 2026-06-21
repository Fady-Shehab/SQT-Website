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
          فريق التكنولوجيا لإدارة شرق
        </div>

        <div className="hero-title-wrap" id="hero-h1">
          <span className="hero-label-ar">SHARQ TECH</span>
          <span className="hero-word-sharq" aria-label="شرق">
            شرق
          </span>
          <span className="hero-tech-chip" aria-label="تك">
            <Icon name="code-brackets" size={14} />
            تك
          </span>
        </div>

        <div className="hero-ornament-line" aria-hidden="true">
          <div className="hero-orn-diamond"></div>
        </div>

        <p className="hero-tagline">
          من قلب الإسكندرية، نبني حلولاً تقنية أصيلة بأيدٍ مصرية وعقول طموحة
          لا تعرف حدوداً — نُبدع، نُنجز، ونُثبت أن التميز يُصنع هنا.
        </p>

        <div className="hero-actions">
          <Button as="a" href="/team" variant="primary">تعرف على الفريق</Button>
          <Button as="a" href="/projects" variant="secondary">استعرض المشاريع</Button>
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
