import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  quickReplies?: string[];
}

interface ChatbotContext {
  lastTopic: string | null;
  questionCount: number;
  topics: string[];
}

const KNOWLEDGE_BASE = [
  {
    keywords: ["python", "agent", "agents", "17 agents", "specialized"],
    topic: "pythonAgents",
    text: "ChainSync has 17 specialized Python agents. Each agent owns one job: Detection monitors for anomalies, Analysis evaluates severity, Coordination routes notifications, and Documentation records actions. Five healthcare agents are live covering Joint Commission, CMS QSO-17-30, and medical equipment compliance. We're expanding to 30 agents by end of 2026 across manufacturing and energy verticals.",
    quickReplies: ["How does it work?", "2026 roadmap", "Join early access"]
  },
  {
    keywords: ["how it works", "works", "system", "flow", "process", "pipeline"],
    topic: "howItWorks",
    text: "Data flows in from SCADA systems, IoT sensors, and monitoring platforms → Detection agents spot anomalies → Analysis agents assess severity → Coordination agents route alerts to the right people → Documentation agents create records. The Integration Hub connects everything without replacing your existing tools. Designed to reduce coordination from hours to minutes.",
    quickReplies: ["What's the Integration Hub?", "Python agents?", "Join early access"]
  },
  {
    keywords: ["mulesoft", "workato", "boomi", "integration hub", "integration", "api", "webhook", "connector", "universal", "bosch", "climatic", "bms", "building management"],
    topic: "integrationHub",
    text: "The Universal Integration Hub is built on MuleSoft but is fully swappable with Workato, Boomi, or any iPaaS. It connects sensors, APIs, SCADA systems, and external platforms via standard webhooks — 22 flow implementations deployed today with AWS, Azure, and MuleSoft compatibility. For healthcare facilities running Bosch Climatic BMS, a dedicated adapter receives threshold breach events automatically and routes them to the AI agent layer — no manual handoff required. No rip-and-replace required.",
    quickReplies: ["How does it work?", "What about security?", "Implementation"]
  },
  {
    keywords: ["slotify", "scheduling", "scheduler", "calendar", "outlook", "google calendar", "meeting", "coordination"],
    topic: "slotify",
    text: "Slotify is ChainSync's intelligent scheduling component, live at slotify.getchainsync.com. It handles autonomous meeting coordination — detecting the right authority, resolving multi-calendar conflicts, and triggering emergency overrides. Google Calendar and Microsoft 365 integrations are live; Outlook backend is still in development.",
    quickReplies: ["How does it work?", "Development status", "Join early access"]
  },
  {
    keywords: ["security", "secure", "soc2", "soc 2", "hipaa", "encrypt", "data", "compliance", "gdpr", "iso"],
    topic: "security",
    text: "Security is built into the roadmap: SOC 2 Type II audit is targeted for Q1, HIPAA certification for Q2, ISO 27001 for Q3, and GDPR validation for Q4 2026. Data is encrypted in transit and at rest. The platform is designed for regulated environments — water utilities, hospitals, and industrial facilities.",
    quickReplies: ["Compliance details", "Implementation", "Join early access"]
  },
  {
    keywords: ["implement", "deploy", "setup", "set up", "get started", "onboard", "rollout", "install"],
    topic: "implementation",
    text: "Implementation is designed to be non-disruptive. The Integration Hub connects to your existing SCADA, IoT, and communication systems via APIs and webhooks — no rip-and-replace. Pilot partners get dedicated technical support throughout onboarding. We handle the integration complexity so your team can focus on response.",
    quickReplies: ["What's the Integration Hub?", "Pricing", "Join early access"]
  },
  {
    keywords: ["cost", "savings", "roi", "value", "benefit", "save", "reduce", "efficient"],
    topic: "costSavings",
    text: "The core value: reducing coordination time from 4–6 hours of manual phone calls and emails to minutes of automated orchestration. For environmental incidents, that window directly impacts regulatory penalties, remediation costs, and community health outcomes. Early access partners get preferential pricing — no upfront costs during the pilot phase.",
    quickReplies: ["Pricing", "Join early access", "How does it work?"]
  },
  {
    keywords: ["government", "agency", "municipal", "municipality", "city", "county", "public"],
    topic: "government",
    text: "ChainSync is built for government agencies and municipalities managing environmental health. It's designed to reduce coordination time from 4–6 hours of manual effort to minutes of automated orchestration, automates cross-agency communication, and handles compliance documentation. Works with existing regulatory reporting workflows.",
    quickReplies: ["Water treatment?", "Cost savings", "Implementation"]
  },
  {
    keywords: ["water", "treatment", "scada", "facility", "wastewater", "drinking water", "contamination"],
    topic: "waterTreatment",
    text: "For water treatment facilities, ChainSync integrates directly with SCADA systems to monitor quality parameters in real-time. Anomalies trigger automatic response coordination, operator notifications, and regulatory documentation — in minutes rather than hours. Critical for public health protection and compliance.",
    quickReplies: ["SCADA integration", "What about security?", "Join early access"]
  },
  {
    keywords: ["early access", "pilot", "join", "beta", "testing", "partner", "sign up"],
    topic: "earlyAccess",
    text: "We're recruiting pilot partners for Q3 2026 testing. Benefits: priority platform access, direct input on features, preferential pricing at launch, and dedicated technical support. No long-term commitment, no upfront costs during the pilot. Interested? Head to the Contact page and we'll follow up.",
    quickReplies: ["Pricing", "Timeline details", "Contact us"]
  },
  {
    keywords: ["timeline", "launch", "when", "available", "release", "date", "roadmap", "2026"],
    topic: "timeline",
    text: "17 agents are live today — healthcare vertical complete with 5 agents covering Joint Commission and medical equipment compliance. Q2 closes the healthcare phase at 18, Q3 adds 6 manufacturing agents, Q4 adds 6 energy & finance agents (30 total). Pilot testing runs Q3 2026.",
    quickReplies: ["Join early access", "Development status", "Pricing"]
  },
  {
    keywords: ["pricing", "cost", "price", "fee", "payment", "subscription", "plan"],
    topic: "pricing",
    text: "Pricing will be announced at public launch. Early access partners receive preferential rates and no upfront costs during the pilot phase. We're designing a model that scales from small municipalities to large industrial facilities. Get in touch to discuss what works for your organization.",
    quickReplies: ["Join early access", "Contact us", "Implementation"]
  },
  {
    keywords: ["development", "status", "progress", "built", "ready", "production", "live"],
    topic: "devStatus",
    text: "17 agents are live today — healthcare vertical complete. The Universal Integration Hub, AI Agent Layer, and Slotify Scheduler are all operational. We're currently validating integrated system performance with pilot partners ahead of the Q3 2026 pilot program.",
    quickReplies: ["Python agents?", "Timeline details", "Join early access"]
  },
  {
    keywords: ["replace", "human", "responder", "automation", "augment", "job", "people"],
    topic: "humanRole",
    text: "ChainSync augments human expertise — it doesn't replace it. The system handles coordination, notifications, and documentation (the overhead that slows response). That frees your team to focus on what matters: making decisions and taking action to protect communities.",
    quickReplies: ["How does it work?", "Development status", "Join early access"]
  },
  {
    keywords: ["contact", "reach", "talk", "demo", "call", "email", "speak", "get in touch", "hello"],
    topic: "contact",
    text: "Best way to reach us is through the Contact page on the site. Whether you're interested in the pilot program, have a technical question, or want to discuss a specific use case — fill out the form and we'll get back to you directly.",
    quickReplies: ["Join early access", "Pricing", "Implementation"]
  },
  {
    keywords: ["uma", "founder", "who built", "who made", "team", "about", "background"],
    topic: "founder",
    text: "ChainSync was built by Uma Madasu — 6+ years as a MuleSoft Integration Engineer with enterprise clients including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. Dual Master's in MIS and Cybersecurity, MuleSoft Developer Level 1 certified, based in Atlanta, GA. Built ChainSync after repeatedly seeing critical systems that couldn't talk to each other during emergencies.",
    quickReplies: ["How does it work?", "Join early access", "Contact us"]
  }
];

function findBestMatch(message: string, lastTopic: string | null) {
  const lower = message.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        // Score by number of words in keyword (multi-word phrases score higher)
        score += keyword.split(" ").length * 2 + 1;
      }
    }
    // Slightly penalise repeating the same topic back-to-back
    if (item.topic === lastTopic) score *= 0.6;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "Hi! I'm the ChainSync assistant. Ask me anything about the platform, our agents, Slotify, or the pilot program.",
      quickReplies: ["How does it work?", "Development status", "Join early access"]
    }
  ]);
  const [input, setInput] = useState("");
  const [context, setContext] = useState<ChatbotContext>({
    lastTopic: null,
    questionCount: 0,
    topics: []
  });
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sendReply = (userText: string) => {
    if (!userText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: userText
    };
    setMessages(prev => [...prev, userMessage]);

    const match = findBestMatch(userText, context.lastTopic);

    let botText: string;
    let quickReplies: string[];

    if (match) {
      // If same topic repeated, acknowledge it briefly then give the answer
      const repeated = match.topic === context.lastTopic;
      botText = repeated
        ? `To add a bit more on that — ${match.text}`
        : match.text;
      quickReplies = match.quickReplies ?? [];
      setContext(prev => ({
        lastTopic: match.topic,
        questionCount: prev.questionCount + 1,
        topics: [...prev.topics, match.topic]
      }));
    } else {
      botText = "I don't have specifics on that yet — but I can help with our agents, integrations, Slotify, security, pricing, or the pilot program.";
      quickReplies = ["How does it work?", "Join early access", "Contact us"];
    }

    setMessages(prev => [
      ...prev,
      { id: (Date.now() + 1).toString(), type: "bot", text: botText, quickReplies }
    ]);
    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    sendReply(reply);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.type === "user"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-slate-100 text-foreground rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              {message.quickReplies && (
                <div className="mt-3 space-y-2">
                  {message.quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="block w-full text-left text-xs px-3 py-1.5 rounded bg-white text-primary hover:bg-slate-50 transition-colors font-medium"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendReply(input);
            }
          }}
          placeholder="Ask about ChainSync..."
          className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button
          onClick={() => sendReply(input)}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}
