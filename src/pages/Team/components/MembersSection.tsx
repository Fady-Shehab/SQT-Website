export default function MembersSection() {
  return (
    <section id="team-members" className="section-pad" aria-labelledby="members-h2">
      <div className="container" style={{ padding: '56px 0px 56px 0px' }}>
        <div className="stb">
          <div className="stb-eye">فريقنا</div>
          <h2 id="members-h2" className="stb-h">الموهوبين <em>الذين يصنعون الفرق</em></h2>
          <p className="stb-sub">كل عضو في الفريق يحمل خبرة فريدة وشغف عميق بالتكنولوجيا والإبداع</p>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <div className="members-grid" role="list" id="members-grid">
          <p id="members-status" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
            جارِ تحميل أعضاء الفريق...
          </p>
        </div>
      </div>
    </section>
  );
}
