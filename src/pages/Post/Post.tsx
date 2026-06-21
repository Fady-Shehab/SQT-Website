import { Link } from "react-router-dom";
import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function PostPage() {
  return (
    <main className="container">
      <section className="post-hero" aria-labelledby="post-title">
        <div className="post-tag">
          <span id="postCategory">–</span>
        </div>
        <h1 id="postTitle">{t('postLoadingTitle')}</h1>
        <p id="postExcerpt" className="post-excerpt">{t('postLoadingExcerpt')}</p>
        <div className="post-meta" aria-label={t('postMetaAria')}>
          <span id="postAuthor">{t('postAuthorUnknown')}</span>
          <span id="postDate">{t('postDateUnavailable')}</span>
          <span id="postReadTime">{t('postReadTimeUnavailable')}</span>
        </div>
        <div className="post-cover" id="postCoverWrapper">
          <img id="postCover" src="/img/blog-post-1.jpg" alt={t('postCoverAlt')} />
        </div>
        <div id="postError" className="status-box status-box--hidden"></div>
      </section>

      <article className="post-body" id="postBody">
        <p>{t('postBodyPlaceholder')}</p>
      </article>

      <div className="tag-list" id="postTags"></div>

      <div className="post-footer">
        <Link to="/blog" className="back-link" aria-label={t('postBackToBlog')}>
          <Icon name="chevron-left" />
          {t('postBackToBlog')}
        </Link>
        <div id="backendNote" className="status-box status-box--hidden"></div>
      </div>
    </main>
  );
}
