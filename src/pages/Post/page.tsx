import { Link } from "react-router-dom";

export default function PostPage() {
  return (
    <main className="container">
      <section className="post-hero" aria-labelledby="post-title">
        <div className="post-tag">
          <span id="postCategory">–</span>
        </div>
        <h1 id="postTitle">تحميل المقال...</h1>
        <p id="postExcerpt" className="post-excerpt">سيتم تحميل محتوى المقال من الواجهة الخلفية بعد ربط الخدمة.</p>
        <div className="post-meta" aria-label="معلومات المقال">
          <span id="postAuthor">كاتب غير معروف</span>
          <span id="postDate">تاريخ غير متوفر</span>
          <span id="postReadTime">وقت قراءة غير متوفر</span>
        </div>
        <div className="post-cover" id="postCoverWrapper">
          <img id="postCover" src="/img/blog-post-1.jpg" alt="صورة غلاف المقال" />
        </div>
        <div id="postError" className="status-box status-box--hidden"></div>
      </section>

      <article className="post-body" id="postBody">
        <p>الصفحة تربط نفسها بالواجهة الخلفية لتحميل بيانات المقال عند فتحها باستخدام معرّف المقال.</p>
      </article>

      <div className="tag-list" id="postTags"></div>

      <div className="post-footer">
        <Link to="/blog" className="back-link" aria-label="العودة إلى المدونة">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          العودة إلى المدونة
        </Link>
        <div id="backendNote" className="status-box status-box--hidden"></div>
      </div>
    </main>
  );
}
