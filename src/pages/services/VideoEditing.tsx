import { Link } from 'react-router-dom';
import { ArrowLeft, Video, CheckCircle2, Play, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const VideoEditing = () => {
  const benefits = [
    {
      icon: Play,
      title: "Scroll-Stopping Content",
      description: "Videos that grab attention in the first second. No one scrolls past our content."
    },
    {
      icon: Sparkles,
      title: "Platform-Optimized",
      description: "Every platform has its own language. We speak TikTok, Reels, YouTube Shorts, and more."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quality doesn't have to mean slow. Get your content when you need it, not weeks later."
    },
    {
      icon: TrendingUp,
      title: "Trend-Aware",
      description: "We stay on top of what's working now. Your content rides the wave, not chases it."
    }
  ];

  const videoTypes = [
    { name: "Social Media Videos", description: "Short-form content optimized for Instagram, TikTok, and Facebook" },
    { name: "Ad Creatives", description: "High-converting video ads that drive clicks and sales" },
    { name: "Reels & Shorts", description: "Vertical videos designed for maximum engagement" },
    { name: "Promo Videos", description: "Brand videos and product showcases that tell your story" }
  ];

  const deliverables = [
    "Professional video editing and color grading",
    "Motion graphics and text animations",
    "Sound design and audio mixing",
    "Thumbnail design and optimization",
    "Multiple format exports (vertical, horizontal, square)",
    "Caption and subtitle creation",
    "Revision rounds until you're happy",
    "Raw project files upon request"
  ];

  return (
    <>
      <SEO 
        title="Video Editing | SecondSpace"
        description="Professional video content for social media, ads, and promotional campaigns. Scroll-stopping videos that convert."
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6">
                <Video className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">Video Editing</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Video Content That{' '}
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Stops the Scroll.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                In a world of infinite scrolling, you have one second to capture attention. Our videos don't just get watched—they get shared, saved, and remembered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" asChild>
                  <a href="/#contact">Start Creating</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio/videos">Watch Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Video Is the Language of Today.{' '}
                  <span className="text-muted-foreground">Are You Fluent?</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Text posts get ignored. Static images blur together. But video? Video commands attention, builds connection, and drives action like nothing else.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our editors don't just cut footage—they craft stories. Every transition, every text animation, every sound effect is intentional. The result? Videos that perform.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-red-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-red-400 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Create</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From quick social clips to polished brand videos—we do it all.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTypes.map((type, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-red-500/30 transition-all hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Professional video production from start to finish.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Viral?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create video content that gets your brand noticed. Tell us about your project.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" asChild>
              <a href="/#contact">Get a Free Quote</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VideoEditing;
