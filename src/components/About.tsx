import { Card, CardContent } from '@/components/ui/card';
import Counter from '@/components/Counter';
import { useInView } from 'react-intersection-observer';

const whyChooseUs = [
  {
    title: "Global Reach, Local Expertise",
    description: "Serving clients worldwide with deep understanding of local markets and global trends",
    icon: "🌍"
  },
  {
    title: "Full-Service Solutions",
    description: "Complete digital marketing ecosystem from strategy to execution under one roof",
    icon: "⚡"
  },
  {
    title: "Proven ROI Results",
    description: "Average 330% ROI with transparent reporting and real-time performance tracking",
    icon: "📈"
  },
  {
    title: "Creative & Technical Excellence",
    description: "Award-winning creative team combined with cutting-edge development expertise",
    icon: "🎨"
  }
];

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Global <span className="text-gradient">Growth Partner</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              SecondSpace isn't just a social media marketing agency—we're your complete digital growth partner. From social media management to web development, video production to strategic consulting, we deliver end-to-end solutions that transform brands worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With clients across the UK, US, Europe, and beyond, our global team combines creative excellence with data-driven strategies to deliver measurable results. We've helped over 50 brands achieve exponential growth through comprehensive digital marketing solutions.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  <Counter end={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Column - Why Choose Us Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover-glow transition-all duration-700 ${
                  cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To be the global growth partner that transforms businesses through comprehensive digital marketing solutions. 
              We don't just build followers—we build businesses. From social media and paid ads to web development and strategic consulting, 
              we deliver integrated solutions that turn digital presence into measurable business growth worldwide."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
