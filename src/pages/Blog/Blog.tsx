import BlogHero from "./components/BlogHero";
import BlogFilter from "./components/BlogFilter";
import FeaturedPost from "./components/FeaturedPost";
import BlogGrid from "./components/BlogGrid";
import TopicsGrid from "./components/TopicsGrid";
import Newsletter from "./components/Newsletter";

export default function BlogPage() {
  return (
    <main id="main-content">
      <BlogHero />
      <BlogFilter />
      <FeaturedPost />
      <BlogGrid />
      <TopicsGrid />
      <Newsletter />
    </main>
  );
}
