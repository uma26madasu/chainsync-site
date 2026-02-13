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
    keywords: ["python", "agent", "agents", "architecture"],
    topic: "pythonAgents",
    text: "ChainSync uses specialized Python agents for environmental emergency response. Each agent excels at one task: Detection (monitors for anomalies), Analysis (evaluates severity), Coordination (routes notifications), and Documentation (records actions). This modular approach makes the system more reliable and easier to update than monolithic systems.",
    quickReplies: ["How does it work?", "Development status", "Join early access"]
  },
  {
    keywords: ["how it works", "works", "architecture", "system", "integration"],
    topic: "development",
    text: "ChainSync integrates with your existing systems through the Universal Integration Hub. Data flows from SCADA systems, IoT sensors, and monitoring platforms → Detection agents identify anomalies → Analysis agents evaluate severity → Coordination agents route notifications to the right teams → Documentation agents create records. Response time: under 90 seconds from detection to human notification.",
    quickReplies: ["Python agents?", "Timeline details", "Join early access"]
  },
  {
    keywords: ["government", "agency", "municipal", "compliance", "regulations"],
    topic: "government",
    text: "ChainSync is designed for government agencies and municipalities managing environmental health. We help with emergency response coordination, compliance documentation, and cross-agency communication. Our system reduces response time from 4-6 hours to under 90 seconds, improving outcomes for communities and ecosystems.",
    quickReplies: ["Water treatment?", "Cost savings", "Implementation"]
  },
  {
    keywords: ["water", "treatment", "scada", "facility", "wastewater"],
    topic: "waterTreatment",
    text: "For water treatment facilities, ChainSync integrates directly with SCADA systems to monitor water quality parameters in real-time. When anomalies are detected, the system automatically coordinates response protocols, notifies operators, and documents actions. This is critical for protecting public health and meeting regulatory requirements.",
    quickReplies: ["Response protocols", "SCADA integration", "Monitoring details"]
  },
  {
    keywords: ["early access", "pilot", "join", "beta", "testing", "partner"],
    topic: "earlyAccess",
    text: "We're actively recruiting pilot partners for Q3 2026 testing. Early access benefits include: Priority access to the platform, Direct input on feature development, Preferential pricing at public launch, Dedicated technical support. No long-term commitment required. No upfront costs during pilot phase. Interested? Fill out the contact form or ask us more questions!",
    quickReplies: ["Timeline details", "Pricing", "Contact us"]
  },
  {
    keywords: ["timeline", "launch", "when", "available", "release", "date"],
    topic: "timeline",
    text: "We're in active development with Q3 2026 pilot testing planned. We don't have a public launch date yet—we're prioritizing building the system correctly over launching quickly. Core components (Integration Hub, AI Agent Layer, Scheduler) are operational. We're validating performance with pilot partners before general availability.",
    quickReplies: ["Early access", "Development status", "Pricing"]
  },
  {
    keywords: ["pricing", "cost", "price", "fee", "payment", "subscription"],
    topic: "pricing",
    text: "Pricing will be announced with public launch. Early access partners receive preferential rates. During the pilot phase, there are no upfront costs. We're designing a model that works for organizations of all sizes—from small municipalities to large industrial facilities.",
    quickReplies: ["Early access", "Timeline details", "Implementation"]
  },
  {
    keywords: ["development", "status", "progress", "built", "ready", "production"],
    topic: "devStatus",
    text: "Core components are built and tested: Universal Integration Hub (connects to any system), AI Agent Layer (Python agents for detection, analysis, coordination, documentation), Slotify Scheduler (manages response workflows). We're validating integrated system performance with pilot partners before general availability.",
    quickReplies: ["Python agents?", "Timeline details", "Join early access"]
  },
  {
    keywords: ["replace", "human", "responder", "automation", "augment"],
    topic: "humanRole",
    text: "ChainSync is designed to augment human expertise, not replace it. The system handles coordination, notifications, and documentation—the administrative overhead that slows down response. This frees up environmental professionals to focus on what they do best: making decisions and taking action to protect communities and ecosystems.",
    quickReplies: ["How it works", "Development status", "Join early access"]
  }
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "Hi! I'm the ChainSync assistant. I can help you understand our environmental emergency response platform. What would you like to know?",
      quickReplies: ["Python agents?", "Development status", "How does it work?"]
    }
  ]);
  const [input, setInput] = useState("");
  const [context, setContext] = useState<ChatbotContext>({
    lastTopic: null,
    questionCount: 0,
    topics: []
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (message: string) => {
    const lowerMessage = message.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          score += keyword.length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    return bestMatch;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);

    // Find best match in knowledge base
    const match = findBestMatch(input);

    if (match) {
      setContext(prev => ({
        ...prev,
        lastTopic: match.topic,
        questionCount: prev.questionCount + 1,
        topics: [...prev.topics, match.topic]
      }));

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: match.text,
        quickReplies: match.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
    } else {
      // Fallback response
      const suggestions = context.lastTopic
        ? ["Python agents?", "Development status", "Join early access"]
        : ["Python agents?", "Development status", "How does it work?"];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: `I don't have specific information about that yet. Based on our conversation, you might be interested in learning about: ${suggestions.join(", ")}. Feel free to ask!`,
        quickReplies: suggestions
      };
      setMessages(prev => [...prev, botMessage]);
    }

    setInput("");
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        text: reply
      };
      setMessages(prev => [...prev, userMessage]);

      const match = findBestMatch(reply);
      if (match) {
        setContext(prev => ({
          ...prev,
          lastTopic: match.topic,
          questionCount: prev.questionCount + 1,
          topics: [...prev.topics, match.topic]
        }));

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: match.text,
          quickReplies: match.quickReplies
        };
        setMessages(prev => [...prev, botMessage]);
      }
      setInput("");
    }, 100);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96">
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
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Ask about ChainSync..."
          className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button
          onClick={handleSendMessage}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
}
