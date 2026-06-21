import { Icon } from "@/components";

export default function Newsletter() {
  return (
    <section id="blog-newsletter" className="section-pad" aria-labelledby="nl-h2">
      <div className="container">
        <div className="nl-inner reveal">
          <div className="nl-icon" aria-hidden="true">
            <Icon name="mail" />
          </div>
          <h2 id="nl-h2" className="nl-title">
            لا تفوّت أي <em>مقال جديد</em>
          </h2>
          <p className="nl-sub">
            اشترك في نشرتنا البريدية وصلك أحدث مقالات شرق تك التقنية مباشرة إلى بريدك —
            بدون رسائل مزعجة، فقط محتوى قيّم.
          </p>
          <div className="nl-form" role="form" aria-label="نموذج الاشتراك في النشرة البريدية">
            <input
              type="email" id="nlEmail"
              className="nl-input"
              placeholder="بريدك الإلكتروني"
              aria-label="أدخل بريدك الإلكتروني"
              autoComplete="email"
            />
            <button className="btn btn-gold" id="nlSubmit" aria-label="اشتراك في النشرة البريدية" style={{ justifyContent: 'center' }}>
              اشتراك
            </button>
          </div>
          <p className="nl-note" aria-live="polite" id="nlFeedback">
            يمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  );
}
