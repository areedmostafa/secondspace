import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCMSBlogPost } from '@/hooks/useCMSContent';
import ReactMarkdown from 'react-markdown';

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
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-6 py-16 max-w-4xl">
          <Link to="/blog" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>
          
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

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;