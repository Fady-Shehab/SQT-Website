import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function FeaturedPost() {
  return (
    <section id="blog-featured" aria-labelledby="featured-h2">
      <div className="container">
        <div className="stb reveal" style={{ marginBottom: '32px' }}>
          <div className="stb-eye">{t('featuredPostEye')}</div>
          <h2 id="featured-h2" className="stb-h">{t('featuredPostTitle')} <em>{t('featuredPostTitleEm')}</em></h2>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <article className="featured-card reveal" id="featuredCard" tabIndex={0} data-cat="" aria-label={t('featuredPostCardAria')} style={{ display: 'none' }}>
          <div className="featured-img">
            <img
              id="featuredImg"
              alt={t('featuredPostImgAlt')}
              loading="lazy"
              style={{ display: 'none' }}
            />
            <div className="featured-img-ph" id="featuredImgPh">
              <div className="featured-img-ph-icon"></div>
              {/* eslint-disable-next-line sqt/no-inline-strings */}
              <p className="featured-img-ph-text" id="featuredImgPhText">blog-featured.jpg</p>
            </div>
              <div className="featured-ribbon" aria-label={t('featuredRibbonAria')}>
                <Icon name="star" />
                {t('featuredRibbonText')}
              </div>
          </div>
          <div className="featured-body">
            <div className="featured-meta">
              <div className="featured-author-thumb" id="featuredAuthorThumb" aria-hidden="true"></div>
              <span className="featured-author-name" id="featuredAuthorName">{t('featuredAuthorName')}</span>
              <span className="meta-dot" aria-hidden="true"></span>
              <time className="featured-date" id="featuredDate" dateTime="">—</time>
              <span className="meta-dot" aria-hidden="true"></span>
              <span className="featured-read-time" id="featuredReadTime">—</span>
            </div>
            <h3 className="featured-title" id="featuredTitle"></h3>
            <p className="featured-excerpt" id="featuredExcerpt"></p>
            <div className="featured-tags" id="featuredTags" aria-label={t('featuredTagsAria')}></div>
            <div className="featured-footer">
              <a href="/post/featured" className="btn btn-gold" id="featuredLink">
                <Icon name="file-download" size={16} />
                {t('featuredReadBtn')}
              </a>
              <a href="#" className="btn-text" aria-label={t('featuredShareAria')} onClick={(e) => e.preventDefault()}>
                <Icon name="share" size={15} />
                {t('featuredShareText')}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
