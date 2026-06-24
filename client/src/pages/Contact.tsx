import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Chatbot from "@/components/Chatbot";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import SuccessAnimation from "@/components/SuccessAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("mvRcXt-RUQv_C4hzo");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send email using EmailJS with formatted subject and body
      await emailjs.send(
        "service_6mitzhj",
        "template_4579caf",
        {
          subject: `New Demo Request from ${formData.company}`,
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          message: formData.message,
          // Also send a formatted message for the email body
          formatted_message: `New Contact Form Submission\n\nCompany: ${formData.company}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\n\nMessage:\n${formData.message}`,
        }
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ company: "", name: "", email: "", phone: "", industry: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Founding Pilot Partnership
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            We're accepting three mid-size regional water utilities as founding pilot partners. No upfront costs. No long-term commitment. Ask us anything — or apply below.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Chatbot */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Contact Form */}
            <motion.div variants={fadeUp}>
              <Card className="p-8 bg-white border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Apply for Founding Partnership</h2>

                {submitted ? (
                  <SuccessAnimation />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm">{error}</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
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
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select your organization type...</option>
                        <option value="water">Water / Wastewater Utility</option>
                        <option value="municipal">Municipal Water Authority</option>
                        <option value="regional">Regional Water District</option>
                        <option value="other">Other (waitlist)</option>
                      </select>
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
                        placeholder="Tell us about your incident response workflows, current tools, and what coordination looks like today when something goes wrong..."
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 h-auto text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll review your message and get back to you within 2 business days.
                    </p>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Chatbot */}
            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">Chat with ChainSync</h2>
                <Chatbot />
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">What does the founding pilot look like?</h3>
                <p className="text-muted-foreground">
                  We connect ChainSync to your existing SCADA or monitoring systems via standard HTTP webhooks, work through a real incident scenario together, and validate the coordination structure against your actual workflows. No upfront costs. No long-term commitment. Direct access to the founding team throughout.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">Who is this for?</h3>
                <p className="text-muted-foreground">
                  Mid-size regional water utilities where the Emergency Operations Manager or equivalent is responsible for incident coordination. We're focused on water utilities first — organizations already dealing with SCADA-connected monitoring and EPA reporting requirements.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">What makes the Python agent approach different?</h3>
                <p className="text-muted-foreground">
                  Instead of a single monolithic system trying to do everything, we're building specialized Python agents that each excel at one task (detection, analysis, coordination, documentation). This modular approach makes the system more reliable, easier to update, and more adaptable to different scenarios. If one agent needs improvement, we can update it without disrupting the entire system.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">What's your pricing model?</h3>
                <p className="text-muted-foreground">
                  Pricing will be announced with public launch. Early access partners receive preferential rates. During the pilot phase, there are no upfront costs.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">How is this different from what we already have?</h3>
                <p className="text-muted-foreground">
                  Tools like Everbridge push notifications. ServiceNow tracks work after the fact. Slack enables conversation. None of them automatically build a coordinated response structure. ChainSync does the alignment work — assigning ownership, mapping stakeholders, maintaining incident state — so your team executes instead of coordinates.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">Will this replace human responders?</h3>
                <p className="text-muted-foreground">
                  No. ChainSync is designed to augment human expertise, not replace it. The system handles coordination, notifications, and documentation, the administrative overhead that slows down response. This frees up environmental professionals to focus on what they do best: making decisions and taking action to protect communities and ecosystems.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three spots. Water utilities only.
          </h2>
          <p className="text-lg text-blue-100">
            We're not looking for logo customers. We're looking for founding partners who want to help build the right thing.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
