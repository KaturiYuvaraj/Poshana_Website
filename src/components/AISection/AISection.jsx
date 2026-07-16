import { useState, useEffect, useRef } from "react";
import "./AISection.css";
import {
  Sparkles,
  Send,
  Bot,
  User,
  Brain,
  Heart,
  Dumbbell
} from "lucide-react";
import { askAI } from "../services/aiService";

const PROMPTS = {
  breakfast: "Analyze my breakfast: Oatmeal, banana, honey, and coffee.",
  workout: "Design a 15-minute quick full-body active workout.",
  sleep: "How can I naturally improve my deep sleep scores?"
};

export default function AISection() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your Poshana AI health assistant. Pick a prompt below or let's discuss your wellness goals!",
      timestamp: "Just now"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {

    const container = chatEndRef.current?.parentElement;

    if (container) {

      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });

    }

  }, [messages, isTyping]);

  const buildChatHistory = (newUserMessage) => {

    return [
      ...messages.map(msg => ({
        role: msg.sender === "bot" ? "assistant" : "user",
        content: msg.text
      })),
      {
        role: "user",
        content: newUserMessage
      }
    ];

  };

  // ===========================
  // Prompt Buttons
  // ===========================

  const handlePromptClick = async (key) => {

    if (isTyping) return;

    const question = PROMPTS[key];

    if (!question) return;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: question,
        timestamp: "Just now"
      }
    ]);

    setIsTyping(true);

    try {

      const reply = await askAI(buildChatHistory(question));

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: reply,
          timestamp: "Just now"
        }
      ]);

    } catch (error) {

      console.error(error);

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, Poshana AI is unavailable right now.",
          timestamp: "Just now"
        }
      ]);

    }

    setIsTyping(false);

  };

  // ===========================
  // Custom Chat
  // ===========================

  const handleCustomSubmit = async (e) => {

    e.preventDefault();

    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: userText,
        timestamp: "Just now"
      }
    ]);

    setInputValue("");

    setIsTyping(true);

    try {

      const reply = await askAI(buildChatHistory(userText));

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: reply,
          timestamp: "Just now"
        }
      ]);

    } catch (error) {

      console.error(error);

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, Poshana AI is unavailable right now.",
          timestamp: "Just now"
        }
      ]);

    }

    setIsTyping(false);

  };

  return (

    <section className="ai-section" id="ai">

      <div className="ai-section-bg">
        <div className="ai-glow-orb"></div>
      </div>

      <div className="ai-section-container">

        <div className="ai-section-header">

          <div className="ai-section-tag">
            <Brain size={16} />
            Intelligent Guidance
          </div>

          <h2>Instant AI Health Insights</h2>

          <p>
            Get dynamic feedback on nutrition,
            customized workout plans,
            and evidence-based sleep analysis instantly.
          </p>

        </div>

        <div className="ai-section-content">

          {/* LEFT */}

          <div className="ai-prompt-selector">

            <h3>Choose a Prompt</h3>

            <button
              className="prompt-pill"
              onClick={() => handlePromptClick("breakfast")}
            >
              <Heart size={16} className="pill-icon" />
              <span>Analyze my breakfast</span>
            </button>

            <button
              className="prompt-pill"
              onClick={() => handlePromptClick("workout")}
            >
              <Dumbbell size={16} className="pill-icon" />
              <span>Quick 15m active workout</span>
            </button>

            <button
              className="prompt-pill"
              onClick={() => handlePromptClick("sleep")}
            >
              <Sparkles size={16} className="pill-icon" />
              <span>Improve my deep sleep</span>
            </button>

          </div>

          {/* RIGHT */}

          <div className="ai-chat-window">

            <div className="chat-window-header">

              <div className="bot-avatar-badge">
                <Bot size={18} />
              </div>

              <div className="bot-header-details">
                <h4>Poshana Health Core</h4>
                <span>Powered by AI</span>
              </div>

              <div className="engine-status">
                <span className="pulse-dot"></span>
                <span>Online</span>
              </div>

            </div>

            <div className="chat-messages-container">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`chat-message-row ${msg.sender}`}
                >

                  <div className="chat-message-avatar">

                    {msg.sender === "bot"
                      ? <Bot size={16} />
                      : <User size={16} />
                    }

                  </div>

                  <div className="chat-message-bubble">

                    <p>{msg.text}</p>

                    <span className="msg-time">
                      {msg.timestamp}
                    </span>

                  </div>

                </div>

              ))}

              {isTyping && (

                <div className="chat-message-row bot">

                  <div className="chat-message-avatar">
                    <Bot size={16} />
                  </div>

                  <div className="chat-message-bubble typing-bubble">

                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>

                  </div>

                </div>

              )}

              <div ref={chatEndRef}></div>

            </div>

            <form
              className="chat-input-bar"
              onSubmit={handleCustomSubmit}
            >

              <input
                type="text"
                placeholder="Ask Poshana anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
              />

              <button
                type="submit"
                className="chat-send-btn"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send size={16} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}