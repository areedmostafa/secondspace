import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useCMSBlogPosts } from '@/hooks/useCMSBlogPosts';

const Blog = () => {
  const { posts, loading } = useCMSBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 right-0">
              <ThemeToggle />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and stories from our creative journey in video production and digital marketing.
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center">
              <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;