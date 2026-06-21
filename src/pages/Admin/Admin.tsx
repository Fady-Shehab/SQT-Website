import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/AdminHeader";
import DashboardSection from "./components/DashboardSection";
import UsersSection from "./components/UsersSection";
import ProjectsSection from "./components/ProjectsSection";
import PostsSection from "./components/PostsSection";
import HofSection from "./components/HofSection";
import SettingsSection from "./components/SettingsSection";
import Modal from "./components/Modal";

export default function AdminPage() {
  return (
    <main id="admin-main">
      <Sidebar />

      <section className="admin-content">
        <AdminHeader />
        <DashboardSection />
        <UsersSection />
        <ProjectsSection />
        <PostsSection />
        <HofSection />
        <SettingsSection />
      </section>

      <Modal />
    </main>
  );
}
