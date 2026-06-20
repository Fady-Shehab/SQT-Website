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
import "@/css/index.css";
import "@/css/auth.css";
import "@/css/blog.css";
import "@/css/hof.css";
import "@/css/post.css";
import "@/css/profile.css";
import "@/css/project.css";
import "@/css/projects.css";
import "@/css/team.css";

// Track loaded scripts to prevent duplicate execution
const loadedScripts = new Set<string>();

const BASE = import.meta.env.BASE_URL || "/";

// Helper to dynamically load a script (only once per src)
function loadScriptOnce(src: string): Promise<void> {
  const fullSrc = src.startsWith("/") ? `${BASE}${src.slice(1)}` : src;
  if (loadedScripts.has(fullSrc)) return Promise.resolve();
  loadedScripts.add(fullSrc);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = fullSrc;
    script.onload = () => resolve();
    script.onerror = () => { loadedScripts.delete(fullSrc); reject(new Error(`Failed to load script: ${src}`)); };
    document.body.appendChild(script);
  });
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Load nav-auth.js once on app mount (global auth UI)
    loadScriptOnce("/js/nav-auth.js").catch(console.error);
  }, []);

  useEffect(() => {
    // Load page-specific scripts on route change.
    // remove + re-create to allow re-execution on re-visit.
    const loadPageScript = () => {
      let scriptSrc = "";
      if (location.pathname === "/") {
        scriptSrc = "/js/index.js";
      } else if (location.pathname === "/team") {
        scriptSrc = "/js/team.js";
      } else if (location.pathname === "/projects") {
        scriptSrc = "/js/projects.js";
      } else if (location.pathname.startsWith("/project/")) {
        scriptSrc = "/js/project.js";
      } else if (location.pathname === "/blog") {
        scriptSrc = "/js/blog.js";
      } else if (location.pathname.startsWith("/post/")) {
        scriptSrc = "/js/post.js";
      } else if (location.pathname === "/hall-of-fame") {
        scriptSrc = "/js/hof.js";
      } else if (location.pathname.startsWith("/profile")) {
        scriptSrc = "/js/profile.js";
      } else if (location.pathname === "/admin") {
        scriptSrc = "/js/admin.js";
      } else if (location.pathname === "/auth") {
        scriptSrc = "/js/auth.js";
      }

      if (!scriptSrc) return;

      const fullSrc = scriptSrc.startsWith("/") ? `${BASE}${scriptSrc.slice(1)}` : scriptSrc;
      const existing = document.querySelector(`script[src="${fullSrc}"]`);
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.src = fullSrc;
      document.body.appendChild(script);
    };

    const timer = setTimeout(loadPageScript, 100);
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
