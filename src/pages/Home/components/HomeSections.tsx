import { t } from "@/utils/strings";
import { SectionHeader, Button, Reveal } from "@/components";

export default function HomeSections() {
  return (
    <>
      <section id="projects" className="section-pad" aria-labelledby="proj-h2">
        <div className="container">
          <SectionHeader
            eye={t('sectionsProjectsEye')}
            title={<>{t('sectionsProjectsTitleBefore')} <em>{t('sectionsProjectsTitleEm')}</em></>}
            subtitle={t('sectionsProjectsSub')}
          />

          <div className="proj-grid" id="indexProjGrid" role="list"></div>

          <Reveal className="sec-cta">
            <Button as="a" href="/projects" variant="secondary">{t('sectionsProjectsCta')}</Button>
          </Reveal>
        </div>
      </section>

      <section id="blog" className="section-pad" aria-labelledby="blog-h2">
        <div className="container">
          <SectionHeader
            eye={t('sectionsBlogEye')}
            title={<>{t('sectionsBlogTitleBefore')} <em>{t('sectionsBlogTitleEm')}</em></>}
            subtitle={t('sectionsBlogSub')}
          />

          <div className="blog-grid" id="indexBlogGrid" role="list"></div>

          <Reveal className="sec-cta">
            <Button as="a" href="/blog" variant="secondary">{t('sectionsBlogCta')}</Button>
          </Reveal>
        </div>
      </section>

      <section id="hof" className="section-pad" aria-labelledby="hof-h2">
        <div className="container">
          <SectionHeader
            eye={t('sectionsHofEye')}
            title={<>{t('sectionsHofTitleBefore')} <em>{t('sectionsHofTitleEm')}</em></>}
            subtitle={t('sectionsHofSub')}
          />

          <div
            className="podium-row"
            id="indexPodiumRow"
            role="list"
            aria-label={t('sectionsHofPodiumAria')}
          >
            <article className="pod-card r2 reveal" role="listitem" style={{ transitionDelay: ".1s", display: "none" }} aria-label={t('sectionsHofSecondAria')}>
              <div className="pod-rank" aria-label={t('sectionsHofSecondAria')}>٢</div>
              <div className="pod-avatar" aria-label={t('sectionsHofMemberImg')}></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">{t('sectionsHofPoints')}</span>
              </div>
            </article>
            <article className="pod-card r1 reveal" role="listitem" style={{ transitionDelay: ".05s", display: "none" }} aria-label={t('sectionsHofFirstAria')}>
              <div className="pod-rank" aria-label={t('sectionsHofFirstPlaceAria')}>١</div>
              <span className="pod-crown" aria-hidden="true"></span>
              <div className="pod-avatar" aria-label={t('sectionsHofChampionImg')}></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">{t('sectionsHofPoints')}</span>
              </div>
            </article>
            <article className="pod-card r3 reveal" role="listitem" style={{ transitionDelay: ".15s", display: "none" }} aria-label={t('sectionsHofThirdAria')}>
              <div className="pod-rank" aria-label={t('sectionsHofThirdAria')}>٣</div>
              <div className="pod-avatar" aria-label={t('sectionsHofMemberImg')}></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">{t('sectionsHofPoints')}</span>
              </div>
            </article>
          </div>

          <Reveal className="sec-cta">
            <Button as="a" href="/hall-of-fame" variant="primary">{t('sectionsHofCta')}</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
