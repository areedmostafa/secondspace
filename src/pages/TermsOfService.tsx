import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service - SecondSpace"
        description="Terms of Service for SecondSpace Digital Marketing Agency. Read our terms and conditions for using our services."
        canonical="https://secondspace.studio/terms-of-service"
      />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-24">
        <article className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last Updated: November 10, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using SecondSpace's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Provided</h2>
            <p className="text-muted-foreground mb-4">
              SecondSpace provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Social Media Marketing and Management</li>
              <li>Paid Advertising Campaigns</li>
              <li>Web Development and Design</li>
              <li>Video Production and Editing</li>
              <li>Graphics Design</li>
              <li>Strategy Consulting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">Clients agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information required for service delivery</li>
              <li>Grant necessary access to accounts and platforms</li>
              <li>Respond to communications in a timely manner</li>
              <li>Provide feedback and approvals within agreed timelines</li>
              <li>Pay invoices according to agreed payment terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment terms are specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Invoices are due within 15 days of issuance unless otherwise specified</li>
              <li>Late payments may incur additional fees</li>
              <li>Services may be suspended for non-payment</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              Upon full payment, clients receive rights to deliverables as specified in service agreements. 
              SecondSpace retains the right to showcase work in portfolios and marketing materials unless 
              otherwise agreed in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Confidentiality</h2>
            <p className="text-muted-foreground">
              Both parties agree to keep confidential information private and use it only for the purposes 
              of the business relationship. This obligation survives termination of services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Service Modifications</h2>
            <p className="text-muted-foreground">
              SecondSpace reserves the right to modify, suspend, or discontinue services with reasonable 
              notice to clients. We will work with clients to minimize disruption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              SecondSpace is not liable for indirect, incidental, or consequential damages arising from 
              service use. Our liability is limited to the amount paid for services in the preceding 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with written notice as specified in service agreements. 
              Clients remain responsible for payment of services rendered up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by applicable laws. Any disputes will be resolved through negotiation 
              or, if necessary, through appropriate legal channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us through our website contact form 
              or at the email address provided on our Contact page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to Terms</h2>
            <p className="text-muted-foreground">
              SecondSpace reserves the right to update these terms at any time. Continued use of services 
              after changes constitutes acceptance of modified terms.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
