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
    keywords: ["python", "agent", "agents", "17 agents", "specialized", "coordination agents"],
    topic: "coordinationAgents",
    text: "ChainSync uses 17 coordination agents — each owns one job in the response pipeline: Detection monitors for anomalies, Analysis evaluates severity, Coordination routes notifications, and Documentation records actions. We're seeking founding pilot partners to validate these agents in real water utility incident environments.",
    quickReplies: ["How does it work?", "Apply for pilot", "Contact us"]
  },
  {
    keywords: ["how it works", "works", "system", "flow", "process", "pipeline"],
    topic: "howItWorks",
    text: "When an incident is detected, ChainSync automatically builds the response structure: it identifies who needs to be involved, assigns clear ownership, notifies stakeholders simultaneously, and maintains a single source of truth as the situation evolves. The Integration Layer connects to your existing SCADA, BMS, or monitoring systems. No rip-and-replace.",
    quickReplies: ["What's the Integration Layer?", "Coordination agents?", "Apply for pilot"]
  },
  {
    keywords: ["mulesoft", "workato", "boomi", "integration", "api", "webhook", "connector", "universal", "bms", "building management", "scada"],
    topic: "integrationHub",
    text: "The Integration Layer is built on MuleSoft but is fully swappable with Workato, Boomi, or any iPaaS. It connects sensors, APIs, SCADA systems, and external platforms via standard webhooks. Nothing changes in your current stack — ChainSync connects to what you already have.",
    quickReplies: ["How does it work?", "What about security?", "Apply for pilot"]
  },
  {
    keywords: ["scheduling", "scheduler", "calendar", "outlook", "google calendar", "meeting", "coordination"],
    topic: "scheduling",
    text: "ChainSync's scheduling layer handles autonomous meeting coordination during incidents — detecting the right authority, resolving multi-calendar conflicts, and triggering emergency overrides. Google Calendar and Microsoft 365 integrations are supported.",
    quickReplies: ["How does it work?", "Development status", "Apply for pilot"]
  },
  {
    keywords: ["security", "secure", "soc2", "soc 2", "hipaa", "encrypt", "data", "compliance", "gdpr", "iso"],
    topic: "security",
    text: "Security is built into the roadmap: SOC 2 Type II, HIPAA, ISO 27001, and GDPR compliance are all planned milestones. Data is encrypted in transit and at rest. The platform is designed specifically for regulated environments like water utilities and hospitals.",
    quickReplies: ["Compliance details", "Apply for pilot", "Contact us"]
  },
  {
    keywords: ["implement", "deploy", "setup", "set up", "get started", "onboard", "rollout", "install"],
    topic: "implementation",
    text: "Implementation is designed to be non-disruptive. The Integration Layer connects to your existing SCADA, IoT, and communication systems via standard HTTP webhooks. No rip-and-replace. Founding pilot partners get dedicated technical support from the founding team throughout.",
    quickReplies: ["What's the Integration Layer?", "Pricing", "Apply for pilot"]
  },
  {
    keywords: ["cost", "savings", "roi", "value", "benefit", "save", "reduce", "efficient"],
    topic: "costSavings",
    text: "The core value: reducing coordination time from 4-6 hours of manual phone calls and emails to minutes of automated orchestration. For environmental incidents, that window directly impacts regulatory penalties, remediation costs, and community health outcomes. Founding pilot partners have no upfront costs during the pilot phase.",
    quickReplies: ["Pricing", "Apply for pilot", "How does it work?"]
  },
  {
    keywords: ["water", "treatment", "scada", "facility", "wastewater", "drinking water", "contamination", "utility", "utilities"],
    topic: "waterTreatment",
    text: "Water utilities are our founding vertical. ChainSync connects directly to SCADA systems to receive incident events, then automatically builds the response structure: stakeholder assignment, regulatory notifications, and compliance documentation — in minutes rather than hours. We're accepting three founding pilot partners from mid-size regional water utilities now.",
    quickReplies: ["Apply for pilot", "What about security?", "How does it work?"]
  },
  {
    keywords: ["pilot", "partner", "founding", "join", "beta", "testing", "sign up", "early access", "apply"],
    topic: "pilotProgram",
    text: "We're accepting three founding pilot partnerships from municipal water utilities. Benefits: direct access to the founding team, direct influence over product direction, no upfront costs during the pilot, and priority pricing at launch. No long-term commitment. Head to the Pilot Partnership page to apply.",
    quickReplies: ["Pricing", "Apply for pilot", "Contact us"]
  },
  {
    keywords: ["timeline", "launch", "when", "available", "release", "date", "roadmap", "status", "progress"],
    topic: "timeline",
    text: "Core coordination architecture is built and tested. We're focused on getting coordination right with our first pilot partners in real water utility environments before expanding to other verticals. No public launch date yet — we're prioritizing getting it right over launching quickly.",
    quickReplies: ["Apply for pilot", "Development status", "Contact us"]
  },
  {
    keywords: ["pricing", "cost", "price", "fee", "payment", "subscription", "plan"],
    topic: "pricing",
    text: "Pricing will be announced at public launch. Founding pilot partners receive preferential rates and no upfront costs during the pilot phase. We're designing a model that scales from mid-size regional utilities to large infrastructure operators. Get in touch to discuss what works for your organization.",
    quickReplies: ["Apply for pilot", "Contact us", "Implementation"]
  },
  {
    keywords: ["different", "notification", "everbridge", "pagerduty", "servicenow", "jira", "slack", "teams", "compare"],
    topic: "differentiation",
    text: "Tools like Everbridge push notifications. ServiceNow tracks work after the fact. Slack enables conversation. None of them automatically build a coordinated response structure. ChainSync does the alignment work — assigning ownership, mapping stakeholders, maintaining incident state — so your team executes instead of coordinates.",
    quickReplies: ["How does it work?", "Apply for pilot", "Contact us"]
  },
  {
    keywords: ["replace", "human", "responder", "automation", "augment", "job", "people"],
    topic: "humanRole",
    text: "ChainSync augments human expertise, not replace it. The system handles coordination overhead — chasing updates, aligning teams, rebuilding context — so your team can focus on what matters: making decisions and taking action to protect communities.",
    quickReplies: ["How does it work?", "Development status", "Apply for pilot"]
  },
  {
    keywords: ["contact", "reach", "talk", "demo", "call", "email", "speak", "get in touch", "hello", "walkthrough"],
    topic: "contact",
    text: "Best way to reach us is through the Pilot Partnership page. Whether you're interested in a founding partnership, want a scenario walkthrough, or have a technical question — fill out the form and we'll get back to you directly.",
    quickReplies: ["Apply for pilot", "Pricing", "Implementation"]
  },
  {
    keywords: ["uma", "founder", "who built", "who made", "team", "about", "background"],
    topic: "founder",
    text: "ChainSync was built by Uma Madasu, with 6+ years as a MuleSoft Integration Engineer connecting enterprise systems at organizations including Blue Cross Blue Shield, Alfa Insurance, and EnerSys. He built ChainSync after repeatedly watching coordination break down in high-pressure environments — not because data was missing, but because teams lost shared context under pressure.",
    quickReplies: ["How does it work?", "Apply for pilot", "Contact us"]
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
        score += keyword.split(" ").length * 2 + 1;
      }
    }
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
      text: "Hi! I'm the ChainSync assistant. Ask me anything about the platform, our founding pilot program, or how incident coordination works.",
      quickReplies: ["How does it work?", "Apply for pilot", "Development status"]
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
      const repeated = match.topic === context.lastTopic;
      botText = repeated
        ? `To add a bit more on that: ${match.text}`
        : match.text;
      quickReplies = match.quickReplies ?? [];
      setContext(prev => ({
        lastTopic: match.topic,
        questionCount: prev.questionCount + 1,
        topics: [...prev.topics, match.topic]
      }));
    } else {
      botText = "I don't have specifics on that yet, but I can help with our coordination approach, integrations, security, pricing, or the founding pilot program.";
      quickReplies = ["How does it work?", "Apply for pilot", "Contact us"];
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
