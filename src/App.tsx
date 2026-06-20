import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation, Footer } from "@/components";
import {
  HomePage,
  AuthPage,
  TeamPage,
  ProjectsPage,
  ProjectPage,
  BlogPage,
  PostPage,
  HallOfFamePage,
  ProfilePage,
  AdminPage,
  NotFoundPage,
} from "@/pages";
import { useEffect } from "react";
// Import all CSS files
import "../css/index.css";
import "../css/auth.css";
import "../css/blog.css";
import "../css/hof.css";
import "../css/post.css";
import "../css/profile.css";
import "../css/project.css";
import "../css/projects.css";
import "../css/team.css";

// Helper to dynamically load a script
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Remove existing script if it exists to allow re-running
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Load nav-auth.js first (always needed)
    loadScript("/js/nav-auth.js").catch(console.error);

    // Load page-specific scripts based on route
    const loadPageScripts = async () => {
      if (location.pathname === "/") {
        await loadScript("/js/index.js");
      } else if (location.pathname === "/team") {
        await loadScript("/js/team.js");
      } else if (location.pathname === "/projects") {
        await loadScript("/js/projects.js");
      } else if (location.pathname.startsWith("/project/")) {
        await loadScript("/js/project.js");
      } else if (location.pathname === "/blog") {
        await loadScript("/js/blog.js");
      } else if (location.pathname.startsWith("/post/")) {
        await loadScript("/js/post.js");
      } else if (location.pathname === "/hall-of-fame") {
        await loadScript("/js/hof.js");
      } else if (location.pathname.startsWith("/profile")) {
        await loadScript("/js/profile.js");
      } else if (location.pathname === "/admin") {
        await loadScript("/js/admin.js");
      } else if (location.pathname === "/auth") {
        await loadScript("/js/auth.js");
      }
    };

    // Wait a bit for React to render the DOM elements before running scripts
    const timer = setTimeout(() => {
      loadPageScripts();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/profile/:id?" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
