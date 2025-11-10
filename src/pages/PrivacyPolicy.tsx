import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - SecondSpace"
        description="Privacy Policy for SecondSpace Digital Marketing Agency. Learn how we collect, use, and protect your personal information."
        canonical="https://secondspace.studio/privacy-policy"
      />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-24">
        <article className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last Updated: November 10, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground">
              SecondSpace ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect information that you provide directly to us:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, industry, website)</li>
              <li>Communications with us (emails, contact form submissions)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Service-related information (project details, preferences, feedback)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We also automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about services, updates, and marketing</li>
              <li>Process payments and manage accounts</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Service providers who assist in business operations</li>
              <li>Professional advisors (lawyers, accountants, consultants)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver 
              relevant content. You can control cookies through your browser settings, though some features 
              may not function properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your information. 
              However, no method of transmission or storage is 100% secure. We cannot guarantee absolute 
              security but continuously work to maintain data protection standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your information for as long as necessary to provide services, comply with legal 
              obligations, resolve disputes, and enforce agreements. When no longer needed, we securely 
              delete or anonymize your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party sites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not directed to individuals under 18. We do not knowingly collect personal 
              information from children. If we learn we have collected such information, we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your data in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. We will notify you of significant changes by 
              posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact 
              us through our website contact form or at the email address provided on our Contact page.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
