import { t } from "@/utils/strings";

export default function MembersSection() {
  return (
    <section id="team-members" className="section-pad" aria-labelledby="members-h2">
      <div className="container" style={{ padding: '56px 0px 56px 0px' }}>
        <div className="stb">
          <div className="stb-eye">{t('teamMembersEye')}</div>
          <h2 id="members-h2" className="stb-h" dangerouslySetInnerHTML={{ __html: t('teamMembersHeading') }} />
          <p className="stb-sub">{t('teamMembersSub')}</p>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <div className="members-grid" role="list" id="members-grid">
          <p id="members-status" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
            {t('teamMembersLoading')}
          </p>
        </div>
      </div>
    </section>
  );
}
