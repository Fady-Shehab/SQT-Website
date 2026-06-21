import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function TopicsGrid() {
  return (
    <section id="blog-topics" aria-labelledby="topics-h2">
      <div className="container">
        <div className="stb reveal" style={{ marginBottom: '36px' }}>
          <div className="stb-eye">{t('topicsEye')}</div>
          <h2 id="topics-h2" className="stb-h">{t('topicsTitle')} <em>{t('topicsTitleEm')}</em></h2>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <div className="topics-grid" role="list">
          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.05s' }} data-filter="برمجة" aria-label={t('topicsProgAria')}>
            <div className="topic-icon gold">
              <Icon name="code-brackets" />
            </div>
            <div className="topic-name">{t('topicsProgName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.10s' }} data-filter="تصميم" aria-label={t('topicsDesignAria')}>
            <div className="topic-icon purple">
              <Icon name="layers" />
            </div>
            <div className="topic-name">{t('topicsDesignName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.15s' }} data-filter="ذكاء اصطناعي" aria-label={t('topicsAiAria')}>
            <div className="topic-icon green">
              <Icon name="cpu" />
            </div>
            <div className="topic-name">{t('topicsAiName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.20s' }} data-filter="أمن سيبراني" aria-label={t('topicsCyberAria')}>
            <div className="topic-icon gold">
              <Icon name="shield" />
            </div>
            <div className="topic-name">{t('topicsCyberName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.25s' }} data-filter="تجارب" aria-label={t('topicsExpAria')}>
            <div className="topic-icon blue">
              <Icon name="beaker" />
            </div>
            <div className="topic-name">{t('topicsExpName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.30s' }} data-filter="all" aria-label={t('topicsAllAria')}>
            <div className="topic-icon green">
              <Icon name="grid" />
            </div>
            <div className="topic-name">{t('topicsAllName')}</div>
            <div className="topic-count">{t('topicsCountPlaceholder')}</div>
          </button>
        </div>
      </div>
    </section>
  );
}
