import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useCMSBlogPost } from '@/hooks/useCMSBlogPost';
import ReactMarkdown from 'react-markdown';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useCMSBlogPost(slug || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <p className="text-center text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog" className="text-primary hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.metaDescription}
        image={post.featuredImage}
        type="article"
        date={post.date}
        canonical={`https://secondspace.studio/blog/${slug}`}
      />
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <header className="mb-8">
            <div className="text-sm text-muted-foreground mb-4">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-h1:text-4xl prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-foreground prose-strong:font-semibold prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:text-foreground prose-li:my-2 prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;