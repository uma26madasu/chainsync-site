import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
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

import { findBestMatch } from "@/lib/chatbotKnowledge";

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "Hi! I'm the ChainSync assistant. Ask me anything about the platform, our founding pilot program, or how incident coordination works.",
      quickReplies: [
        "How does it work?",
        "Apply for pilot",
        "Development status",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatbotContext>({
    lastTopic: null,
    questionCount: 0,
    topics: [],
  });
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    },
    []
  );
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const sendReply = (userText: string) => {
    if (!userText.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: userText,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

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
        topics: [...prev.topics, match.topic],
      }));
    } else {
      const nudge =
        context.questionCount >= 2
          ? " The application form is right next to this chat if you'd like to connect directly."
          : "";
      botText = `I don't have specifics on that yet, but I can help with our coordination approach, integrations, security, pricing, or the founding pilot program.${nudge}`;
      quickReplies = ["How does it work?", "Apply for pilot", "Contact us"];
    }

    replyTimer.current = setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: botText,
          quickReplies,
        },
      ]);
    }, 420);
  };

  const handleQuickReply = (reply: string) => {
    sendReply(reply);
  };

  return (
    <div className="flex flex-col h-full">
      <p className="cs-note">
        Interactive FAQ assistant using predefined answers, not a live agent or
        product AI service. Messages stay in this page and are not sent to a
        chat provider. Do not enter sensitive information.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <Link href="/how-it-works#agents" className="cs-text-link">
          Explore all agents
        </Link>
        <Link href="/technology#stack" className="cs-text-link">
          View the technology stack
        </Link>
      </div>
      {/* Messages */}
      <div
        ref={messagesContainerRef}
        role="log"
        aria-label="ChainSync conversation"
        aria-live="polite"
        className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-[26rem]"
      >
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] px-4 py-2.5 rounded-xl ${
                message.type === "user"
                  ? "bg-primary text-white rounded-br-sm"
                  : "bg-[#EEF6F9] text-foreground rounded-bl-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              {message.quickReplies && (
                <div className="mt-3 space-y-1.5">
                  {message.quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      disabled={isTyping}
                      className="block w-full text-left text-sm px-3 py-1.5 rounded-lg bg-white text-primary hover:bg-sky-50 transition-[background-color] duration-150 font-medium active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#EEF6F9] rounded-xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendReply(input);
            }
          }}
          aria-label="Ask a question about ChainSync"
          maxLength={2000}
          placeholder="Ask about ChainSync..."
          disabled={isTyping}
          className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          aria-label="Send message"
          onClick={() => sendReply(input)}
          disabled={isTyping || !input.trim()}
          className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary hover:bg-primary/90 text-white transition-[background-color] duration-150 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
