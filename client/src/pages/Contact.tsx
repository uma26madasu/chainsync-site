import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Chatbot from "@/components/Chatbot";

export default function Contact() {
  const [formData, setFormData] = useState({
    organization: "",
    role: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ organization: "", role: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Have questions about ChainSync? Want to join our pilot program? We'd love to hear from you. Use the chatbot below or fill out the form.
          </p>
        </div>
      </section>

      {/* Contact Form & Chatbot */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-white border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-green-900 mb-2">Thank You!</h3>
                    <p className="text-green-800">
                      We've received your message and will get back to you within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select your role...</option>
                        <option value="government">Government / Municipal Agency</option>
                        <option value="water">Water Treatment Facility</option>
                        <option value="industrial">Industrial / Manufacturing</option>
                        <option value="consulting">Environmental Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your environmental challenges and how ChainSync can help..."
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 h-auto text-base font-semibold"
                    >
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll review your message and get back to you within 2 business days.
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* Chatbot */}
            <div>
              <Card className="p-6 bg-white border border-border h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">Chat with ChainSync</h2>
                <Chatbot />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">When will ChainSync be available?</h3>
              <p className="text-muted-foreground">
                We're currently in active development and working with select pilot partners for Q3 2026 testing. We don't have a public launch date yet—we're prioritizing building the system correctly over launching quickly. Join our early access list to be notified when testing opportunities become available.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">Who is ChainSync designed for?</h3>
              <p className="text-muted-foreground">
                We're building ChainSync for environmental agencies, water treatment facilities, industrial sites with environmental monitoring requirements, and municipalities managing environmental health. Anyone responsible for detecting and responding to environmental emergencies could benefit from automated coordination.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">What makes the Python agent approach different?</h3>
              <p className="text-muted-foreground">
                Instead of a single monolithic system trying to do everything, we're building specialized Python agents that each excel at one task (detection, analysis, coordination, documentation). This modular approach makes the system more reliable, easier to update, and more adaptable to different scenarios. If one agent needs improvement, we can update it without disrupting the entire system.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">What's your pricing model?</h3>
              <p className="text-muted-foreground">
                Pricing will be announced with public launch. Early access partners receive preferential rates. During the pilot phase, there are no upfront costs.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">Is this production-ready?</h3>
              <p className="text-muted-foreground">
                Core components are built and tested. We're validating integrated system performance with pilot partners before general availability. The Universal Integration Hub, AI Agent Layer, and Slotify Scheduler are all operational.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-border">
              <h3 className="font-semibold text-foreground mb-3">Will this replace human responders?</h3>
              <p className="text-muted-foreground">
                No. ChainSync is designed to augment human expertise, not replace it. The system handles coordination, notifications, and documentation—the administrative overhead that slows down response. This frees up environmental professionals to focus on what they do best: making decisions and taking action to protect communities and ecosystems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Help Build the Future of Environmental Response
          </h2>
          <p className="text-lg text-blue-100">
            Join us in creating technology that protects communities and ecosystems.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
