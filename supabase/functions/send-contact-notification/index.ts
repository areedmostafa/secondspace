
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  business: string;
  budget: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, business, budget, message }: ContactFormData = await req.json();
    console.log("Received contact form data:", { name, email, business, budget });

    // Send notification email to business owner
    // Note: You need to replace "your-domain.com" with your actual verified domain
    const emailResponse = await resend.emails.send({
      from: "SCALED Contact Form <noreply@your-domain.com>", // Replace with your verified domain
      to: ["areedmostafa@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business Type:</strong> ${business || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          </div>

          ${message ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
              <h3 style="color: #475569; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This email was sent from your SCALED website contact form.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Notification email response:", emailResponse);

    // Only send confirmation email if the main notification succeeded
    if (emailResponse.data) {
      // Send confirmation email to the user
      const confirmationResponse = await resend.emails.send({
        from: "SCALED <noreply@your-domain.com>", // Replace with your verified domain
        to: [email],
        subject: "Thank you for contacting SCALED!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              Thank you for reaching out!
            </h2>
            
            <div style="padding: 20px 0;">
              <p>Hi ${name},</p>
              
              <p>Thank you for contacting SCALED! We've received your message and will get back to you within 24 hours.</p>
              
              <p>Our team is excited to learn more about your social media goals and how we can help scale your brand's growth.</p>
              
              <p>In the meantime, feel free to check out our latest case studies and insights on our website.</p>
              
              <p>Best regards,<br>
              The SCALED Team</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                📧 Email: areedmostafa@gmail.com<br>
                📱 Phone: 01777970739
              </p>
            </div>
          </div>
        `,
      });

      console.log("Confirmation email response:", confirmationResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
