import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Replace with your actual public key
    emailjs.init("8H71vFToOhBO78vB9");
  }, []);

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.log('IP fetch failed:', error);
      return 'IP not available';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Get current time for the email template
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    try {
      // Get client IP (wrap in try-catch to prevent blocking if API fails)
      let clientIP = 'IP not available';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        clientIP = ipData.ip;
      } catch (ipError) {
        console.log('IP fetch failed, continuing without IP:', ipError);
      }

      // Create template parameters matching your template variables
      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        time: formattedTime,
        to_email: 'sahadev.dotnet@gmail.com',
        reply_to: formData.get('email'),
        date: now.toLocaleDateString(),
        ip: clientIP
      };

      console.log('Sending email with params:', templateParams);
      
      // Replace these with your actual EmailJS credentials
      const serviceID = import.meta.env.ServiceID; // EmailJS Service ID
      const templateID = import.meta.env.TemplateID; // EmailJS Template ID
      const publicKey = import.meta.env.PublicKey; // EmailJS Public Key
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', response);
      console.log('Response status:', response.status);
      console.log('Response text:', response.text);
      
      setIsSent(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
      
    } catch (err) {
      console.error('Failed to send email:', err);
      console.error('Error details:', {
        message: err.message,
        text: err.text,
        status: err.status
      });
      
      // Provide more specific error message
      if (err.text) {
        setError(`Failed to send message: ${err.text}. Please check your EmailJS configuration.`);
      } else if (err.message) {
        setError(`Failed to send message: ${err.message}. Please try again later.`);
      } else {
        setError('Failed to send message. Please check your internet connection and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center" style={{ opacity: 1, transform: 'none' }}>
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {/* Left Column - Contact Info */}
        <div className="space-y-6" style={{ opacity: 1 }}>
          {/* Contact Information Card */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mt-1 h-5 w-5 text-blue-600 dark:text-blue-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:sahadev.dotnet@gmail.com"
                      className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      sahadev.dotnet@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone mt-1 h-5 w-5 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+917559181219"
                      className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      +91 7559181219
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mt-1 h-5 w-5 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Me Card */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Connect With Me</h2>
              <div className="space-y-4">
                {/* GitHub */}
                <a
                  href="https://github.com/sada2612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sahadev-padavale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20 p-6">
              <h3 className="mb-2 text-lg font-bold text-foreground">Currently Available</h3>
              <p className="text-sm text-muted-foreground">
                I'm open to new opportunities and freelance projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2" style={{ opacity: 1, transform: 'none' }}>
          <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Send Me a Message</h2>
            
            {/* Success Message */}
            {isSent && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-md">
                <p className="text-green-800 dark:text-green-200 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-red-800 dark:text-red-200 text-center">
                  {error}
                </p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  className="flex dark:border-slate-700 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 placeholder:text-muted-foreground border-border"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  className="flex dark:border-slate-700 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 placeholder:text-muted-foreground border-border"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  name="email"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  className="flex dark:border-slate-700 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 placeholder:text-muted-foreground border-border"
                  id="subject"
                  placeholder="Project Collaboration"
                  type="text"
                  name="subject"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  className="flex dark:border-slate-700 min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 placeholder:text-muted-foreground border-border"
                  id="message"
                  placeholder="Hi! I'd like to discuss a .NET/Angular project opportunity..."
                  rows="6"
                  name="message"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium ${
                  isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:from-blue-700 hover:to-purple-700 cursor-pointer'
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send mr-2 h-4 w-4"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield h-3 w-3"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <p>Your information is kept private and secure.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16" style={{ opacity: 1, transform: 'none' }}>
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
          {/* FAQ 1 */}
          <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Response Time</h3>
            <p className="text-sm text-muted-foreground">
              I typically respond to inquiries within 24-48 hours during business days.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Project Types</h3>
            <p className="text-sm text-muted-foreground">
              I specialize in .NET Core, Angular/React applications, cloud integrations, and enterprise solutions.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Consultation</h3>
            <p className="text-sm text-muted-foreground">
              Free initial consultations available to discuss your project requirements and timeline.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Open to remote work, contract positions, and long-term partnerships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;