import { Icon } from "@/components";

export default function ProfileHeader() {
  return (
    <section id="profile-hero" aria-labelledby="profile-h">
      <div className="eg-pattern" aria-hidden="true"></div>
      <div className="hero-gems" aria-hidden="true">
        <div className="gem gem-1"></div><div className="gem gem-2"></div><div className="gem gem-3"></div>
      </div>

      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            <Icon name="user" />
          </div>

          <div className="profile-info">
            <h1 id="profile-h">محمد أحمد</h1>
            <div className="profile-role">Programming</div>
            <div className="profile-tagline">بناء أشياء مفيدة بخط أنظف</div>
            <div className="profile-socials">
              <a href="#" aria-label="X">
                <Icon name="twitter" />
              </a>
              <a href="#" aria-label="GitHub">
                <Icon name="github" />
              </a>
            </div>
          </div>

          <div className="profile-stats">
            <div className="profile-stat">
              <div className="stat-value">1,280</div>
              <div className="stat-label">نقطة</div>
            </div>
            <div className="profile-stat">
              <div className="stat-value">12</div>
              <div className="stat-label">مهمة مكتملة</div>
            </div>
            <div className="profile-stat">
              <div className="stat-value">4</div>
              <div className="stat-label">شارة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
