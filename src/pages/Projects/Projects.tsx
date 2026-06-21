import ProjectsHero from "./components/ProjectsHero";
import FilterBar from "./components/FilterBar";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsGrid from "./components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <ProjectsHero />
      <FilterBar />
      <FeaturedProject />
      <ProjectsGrid />
    </main>
  );
}
