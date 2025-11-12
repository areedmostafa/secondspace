import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Users, Target, Rocket, Heart } from 'lucide-react';

const AboutUs = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every campaign is meticulously crafted with one goal: measurable growth for your brand."
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We stay ahead of trends, algorithms, and creative boundaries to keep your brand relevant."
    },
    {
      icon: Heart,
      title: "Authentic Connections",
      description: "We don't just build audiences—we build communities that genuinely care about your brand."
    },
    {
      icon: Users,
      title: "Global Perspective",
      description: "With clients worldwide, we bring diverse insights and strategies that transcend borders."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Your Global Digital Growth Partner"
        description="SecondSpace is more than an agency—we're growth architects who transform brands through strategic social media marketing, compelling content, and authentic storytelling."
        canonical="https://secondspace.studio/about"
      />
      <Header />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`pt-32 pb-20 px-6 transition-all duration-1000 ${
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            We Don't Just Market.
            <br />We Transform.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            In a world drowning in content, we create waves that matter.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section 
        ref={storyRef}
        className={`py-20 px-6 bg-muted/30 transition-all duration-1000 delay-200 ${
          storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">SecondSpace</span> was born from a simple observation: 
                  Most brands were speaking, but nobody was listening.
                </p>
                <p>
                  We started with a mission to cut through the noise—to create content that doesn't just get scrolled past, 
                  but content that stops thumbs, sparks conversations, and builds genuine communities.
                </p>
                <p>
                  What began as a small collective of creatives has evolved into a <span className="text-primary font-semibold">global digital powerhouse</span>, 
                  partnering with ambitious brands across continents. From London to Los Angeles, from startups to established names, 
                  we've proven one thing: <span className="font-semibold">Great storytelling knows no borders.</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-pulse"></div>
                <div className="relative text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">500+</div>
                  <div className="text-xl text-muted-foreground">Brands Transformed</div>
                  <div className="mt-6 text-4xl font-bold text-primary">3M+</div>
                  <div className="text-lg text-muted-foreground">Content Views Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className={`py-20 px-6 transition-all duration-1000 delay-300 ${
          valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg">
              Our values aren't just words on a wall—they're the foundation of every campaign we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                  valuesInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-20 px-6 bg-muted/30 transition-all duration-1000 delay-400 ${
          teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">A Team That Gets It</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We're not your typical agency. We're strategists, creators, storytellers, and data nerds rolled into one. 
            Our team spans continents, bringing fresh perspectives from diverse markets and cultures.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            But here's what really sets us apart: <span className="text-primary font-semibold">We obsess over your success</span>. 
            Your wins are our wins. Your growth is our portfolio. When you succeed, we celebrate like we just launched our own brand.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Ready to transform your brand?</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
