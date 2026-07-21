import { useState, useRef } from "react";
import { Sparkles, X } from "lucide-react";
import "./VoiceAssistant.css";

export default function VoiceAssistant() {
    const [messages, setMessages] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | listening | thinking | speaking | error
    const [transcript, setTranscript] = useState("");
    const [reply, setReply] = useState("");
    const [error, setError] = useState("");

    const recognitionRef = useRef(null);

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
        }
        speechSynthesis.cancel();
        setStatus("idle");
        setIsActive(false);
    };

    const startListening = () => {
        // If already doing something, stop everything
        if (status !== "idle") {
            stopListening();
            return;
        }

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setError("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
            setIsActive(true);
            return;
        }

        setError("");

        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;
        recognition.speechRecognitionTimeout = 10000; // give 10s

        setIsActive(true);
        setStatus("listening");
        setReply("");

        recognition.start();

        recognition.onresult = async (event) => {
            const message = event.results[0][0].transcript;

            setTranscript(message);
            setReply("");
            setStatus("thinking");

            // Build conversation history
            const updatedMessages = [
                ...messages,
                {
                    role: "user",
                    content: message,
                },
            ];

            try {
                // Use deployed backend URL directly (no local server needed)
                const res = await fetch(`${import.meta.env.VITE_API_URL}/insights`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        messages: updatedMessages,
                    }),
                });

                if (!res.ok) {
                    throw new Error(`Server error: ${res.status}`);
                }

                const data = await res.json();

                if (!data.success) {
                    throw new Error(data.message || "AI request failed");
                }

                const aiReply = data.reply;
                setReply(aiReply);

                // Save conversation memory
                setMessages([
                    ...updatedMessages,
                    {
                        role: "assistant",
                        content: aiReply,
                    },
                ]);

                setStatus("speaking");

                // Speak the reply
                const speech = new SpeechSynthesisUtterance(aiReply);
                speech.lang = "en-US";
                speech.rate = 0.95;
                speech.pitch = 1;
                speech.volume = 1;

                speech.onend = () => {
                    setStatus("idle");
                };

                speech.onerror = () => {
                    setStatus("idle");
                };

                speechSynthesis.cancel();
                speechSynthesis.speak(speech);

            } catch (err) {
                console.error("Voice assistant error:", err);
                const errMsg = "Sorry, I couldn't process your request. Please try again later.";
                setReply(errMsg);
                setError(err.message);
                setStatus("error");
            }
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            if (event.error === "not-allowed") {
                setError("Microphone access denied. Please allow microphone permissions.");
                setStatus("error");
            } else if (event.error === "no-speech") {
                // Silently restart — user just didn't speak in time
                setError("");
                setStatus("listening");
                try { recognition.start(); } catch (_) {}
            } else if (event.error === "aborted") {
                // User or code stopped it — ignore
            } else {
                setError(`Recognition error: ${event.error}`);
                setStatus("error");
            }
        };

        recognition.onend = () => {
            recognitionRef.current = null;
            if (status === "listening") {
                setStatus("idle");
            }
        };
    };

    const handleClose = () => {
        stopListening();
        setTranscript("");
        setReply("");
        setError("");
        setIsActive(false);
        setStatus("idle");
    };

    const statusLabel = {
        idle: "✨ Ready",
        listening: "🎤 Listening...",
        thinking: "🤖 Thinking...",
        speaking: "🔊 Speaking...",
        error: "⚠️ Error",
    };

    const showPopup = isActive || transcript || reply;

    return (
        <>
            {showPopup && (
                <div className="voice-popup">
                    {/* Fixed top: title + status */}
                    <div className="voice-popup-top">
                        <div className="voice-popup-header">
                            <div className="voice-title">✨ Poshana AI</div>
                            <button className="voice-close-btn" onClick={handleClose}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className={`voice-status voice-status--${status}`}>
                            {statusLabel[status] || "Ready"}
                        </div>
                    </div>

                    {/* Scrollable body */}
                    <div className="voice-popup-body">
                        {error && (
                            <p className="voice-error">⚠️ {error}</p>
                        )}

                        {transcript && (
                            <p>
                                <strong>You:</strong> {transcript}
                            </p>
                        )}

                        {reply && status !== "thinking" && (
                            <p>
                                <strong>Poshana:</strong> {reply}
                            </p>
                        )}

                        {status === "thinking" && (
                            <div className="voice-thinking">
                                <span></span><span></span><span></span>
                            </div>
                        )}

                        <p className="voice-hint">
                            {status === "idle" && "Click the orb to speak again"}
                            {status === "error" && "Click the orb to try again"}
                            {status === "speaking" && "Click the orb to stop"}
                        </p>
                    </div>
                </div>
            )}

            <button
                className={`voice-orb ${status !== "idle" ? "active" : ""} voice-orb--${status}`}
                onClick={startListening}
                title="Talk to Poshana AI"
                aria-label="Open voice assistant"
            >
                <Sparkles size={26} />
            </button>
        </>
    );
}