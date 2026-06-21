import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Newsletter() {
  return (
    <section id="blog-newsletter" className="section-pad" aria-labelledby="nl-h2">
      <div className="container">
        <div className="nl-inner reveal">
          <div className="nl-icon" aria-hidden="true">
            <Icon name="mail" />
          </div>
          <h2 id="nl-h2" className="nl-title">
            {t('newsletterTitle')} <em>{t('newsletterTitleEm')}</em>
          </h2>
          <p className="nl-sub">
            {t('newsletterSub')}
          </p>
          <div className="nl-form" role="form" aria-label={t('newsletterFormAria')}>
            <input
              type="email" id="nlEmail"
              className="nl-input"
              placeholder={t('newsletterPlaceholder')}
              aria-label={t('newsletterEmailAria')}
              autoComplete="email"
            />
            <button className="btn btn-gold" id="nlSubmit" aria-label={t('newsletterSubmitAria')} style={{ justifyContent: 'center' }}>
              {t('newsletterSubmitText')}
            </button>
          </div>
          <p className="nl-note" aria-live="polite" id="nlFeedback">
            {t('newsletterNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
