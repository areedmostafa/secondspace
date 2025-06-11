
import { Card, CardContent } from '@/components/ui/card';
import Counter from '@/components/Counter';

const whyChooseUs = [
  {
    title: "Data-Backed Strategies",
    description: "Every decision is driven by analytics and performance metrics",
    icon: "📊"
  },
  {
    title: "Transparent Reporting",
    description: "Real-time access to campaign performance and ROI tracking",
    icon: "📋"
  },
  {
    title: "Industry Expertise",
    description: "Specialized knowledge across luxury, SaaS, e-commerce, and more",
    icon: "🎯"
  },
  {
    title: "Creative Excellence",
    description: "Award-winning creative team producing scroll-stopping content",
    icon: "🎨"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Scaled</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're not just another social media agency. We're growth partners who understand that every brand is unique and deserves a tailored approach to social media success.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team combines creative excellence with data-driven strategies to deliver results that matter to your bottom line. We've helped over 50 brands achieve exponential growth through social media.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-card border-border hover-glow">
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
              "To empower brands with social media strategies that don't just build followers, but build businesses. 
              We believe in the power of authentic connections, creative storytelling, and data-driven optimization 
              to transform social media from a cost center into a profit engine."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
