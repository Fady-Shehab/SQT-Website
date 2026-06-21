import { Icon } from "@/components";

export default function FeaturedPost() {
  return (
    <section id="blog-featured" aria-labelledby="featured-h2">
      <div className="container">
        <div className="stb reveal" style={{ marginBottom: '32px' }}>
          <div className="stb-eye">أبرز المقالات</div>
          <h2 id="featured-h2" className="stb-h">المقال <em>المميز</em></h2>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <article className="featured-card reveal" id="featuredCard" tabIndex={0} data-cat="" aria-label="اقرأ المقال المميز" style={{ display: 'none' }}>
          <div className="featured-img">
            <img
              id="featuredImg"
              alt="غلاف المقال المميز"
              loading="lazy"
              style={{ display: 'none' }}
            />
            <div className="featured-img-ph" id="featuredImgPh">
              <div className="featured-img-ph-icon"></div>
              <p className="featured-img-ph-text" id="featuredImgPhText">blog-featured.jpg</p>
            </div>
            <div className="featured-ribbon" aria-label="مقال مميز">
              <Icon name="star" />
              مميز
            </div>
          </div>
          <div className="featured-body">
            <div className="featured-meta">
              <div className="featured-author-thumb" id="featuredAuthorThumb" aria-hidden="true"></div>
              <span className="featured-author-name" id="featuredAuthorName">اسم الكاتب</span>
              <span className="meta-dot" aria-hidden="true"></span>
              <time className="featured-date" id="featuredDate" dateTime="">—</time>
              <span className="meta-dot" aria-hidden="true"></span>
              <span className="featured-read-time" id="featuredReadTime">—</span>
            </div>
            <h3 className="featured-title" id="featuredTitle"></h3>
            <p className="featured-excerpt" id="featuredExcerpt"></p>
            <div className="featured-tags" id="featuredTags" aria-label="تصنيفات المقال"></div>
            <div className="featured-footer">
              <a href="/post/featured" className="btn btn-gold" id="featuredLink">
                <Icon name="file-download" size={16} />
                اقرأ المقال
              </a>
              <a href="#" className="btn-text" aria-label="شارك المقال" onClick={(e) => e.preventDefault()}>
                <Icon name="share" size={15} />
                مشاركة
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
