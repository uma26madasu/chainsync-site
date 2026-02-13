import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Chatbot from "@/components/Chatbot";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
          email_body: `New Contact Form Submission

Company: ${formData.company}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry}

Message:
${formData.message}`,
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
      <section className="py-10 md:py-14 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #0F5A8F 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have questions about ChainSync? Want to join our pilot program? We'd love to hear from you. Use the chatbot below or fill out the form.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Chatbot */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              <GlassCard className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="text-green-600 mx-auto mb-4" size={64} />
                    </motion.div>
                    <h3 className="font-bold text-green-900 mb-3 text-2xl">Thank You!</h3>
                    <p className="text-green-800 text-lg">
                      We've received your message and will get back to you within 2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3"
                      >
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-red-800 text-sm">{error}</p>
                      </motion.div>
                    )}

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-foreground mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base bg-white"
                          required
                        >
                          <option value="">Select your industry...</option>
                          <option value="Government / Municipal Agency">Government / Municipal Agency</option>
                          <option value="Water Treatment Facility">Water Treatment Facility</option>
                          <option value="Industrial / Manufacturing">Industrial / Manufacturing</option>
                          <option value="Environmental Consulting">Environmental Consulting</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your environmental challenges and how ChainSync can help..."
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all text-base"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white py-4 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Send Message
                            <Send size={20} />
                          </span>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-sm text-muted-foreground text-center">
                      We'll review your message and get back to you within 2 business days.
                    </p>
                  </form>
                )}
              </GlassCard>
            </AnimatedSection>

            {/* Chatbot */}
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-6 md:p-8 h-full">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Chat with ChainSync</h2>
                <Chatbot />
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "When will ChainSync be available?",
                  answer: "We're currently in active development and working with select pilot partners for Q3 2026 testing. We don't have a public launch date yet—we're prioritizing building the system correctly over launching quickly. Join our early access list to be notified when testing opportunities become available."
                },
                {
                  question: "Who is ChainSync designed for?",
                  answer: "We're building ChainSync for environmental agencies, water treatment facilities, industrial sites with environmental monitoring requirements, and municipalities managing environmental health. Anyone responsible for detecting and responding to environmental emergencies could benefit from automated coordination."
                },
                {
                  question: "What makes the Python agent approach different?",
                  answer: "Instead of a single monolithic system trying to do everything, we're building specialized Python agents that each excel at one task (detection, analysis, coordination, documentation). This modular approach makes the system more reliable, easier to update, and more adaptable to different scenarios. If one agent needs improvement, we can update it without disrupting the entire system."
                },
                {
                  question: "What's your pricing model?",
                  answer: "Pricing will be announced with public launch. Early access partners receive preferential rates. During the pilot phase, there are no upfront costs."
                },
                {
                  question: "Is this production-ready?",
                  answer: "Core components are built and tested. We're validating integrated system performance with pilot partners before general availability. The Universal Integration Hub, AI Agent Layer, and Slotify Scheduler are all operational."
                },
                {
                  question: "Will this replace human responders?",
                  answer: "No. ChainSync is designed to augment human expertise, not replace it. The system handles coordination, notifications, and documentation—the administrative overhead that slows down response. This frees up environmental professionals to focus on what they do best: making decisions and taking action to protect communities and ecosystems."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="p-6">
                    <h3 className="font-bold text-foreground mb-4 text-xl">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-primary via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Help Build the Future of Environmental Response
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Join us in creating technology that protects communities and ecosystems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
