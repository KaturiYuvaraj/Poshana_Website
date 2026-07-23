import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import starIcon from "../../assets/icons/star.svg";
import "./VoiceAssistant.css";

const NUDGE_MESSAGES = [
    "Talk with me! 💬",
    "Ask me anything! ✨",
    "How's your nutrition today? 🥗",
    "Need a workout tip? 💪",
    "I'm your wellness coach! 🧘",
    "Tap me to get started 🌟",
    "What's your fitness goal? 🎯",
    "Let's chat about sleep! 😴",
    "Ready to help you! 🚀",
    "Ask about your diet plan 🍎",
];

export default function VoiceAssistant() {

    const [messages, setMessages] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState("idle");
    const [transcript, setTranscript] = useState("");
    const [reply, setReply] = useState("");
    const [error, setError] = useState("");

    const [voices, setVoices] = useState([]);
    const [currentLanguage, setCurrentLanguage] = useState("en-US");

    const recognitionRef = useRef(null);

    const [nudge, setNudge] = useState(null);

    /* ------------------------------------------
       Load Browser Voices
    -------------------------------------------*/

    useEffect(() => {

        const loadVoices = () => {
            const list = speechSynthesis.getVoices();

            if (list.length) {
                setVoices(list);
            }
        };

        loadVoices();

        speechSynthesis.onvoiceschanged = loadVoices;

    }, []);

    /* ------------------------------------------
       Random Nudge Messages
    -------------------------------------------*/

    useEffect(() => {

        const show = () => {

            const msg =
                NUDGE_MESSAGES[
                Math.floor(Math.random() * NUDGE_MESSAGES.length)
                ];

            setNudge(msg);

            setTimeout(() => {

                setNudge(null);

            }, 4000);

        };

        const initial = setTimeout(show, 3000);

        const interval = setInterval(show, 10000);

        return () => {

            clearTimeout(initial);
            clearInterval(interval);

        };

    }, []);

    /* ------------------------------------------
        Detect Language
    -------------------------------------------*/

    const detectLanguage = (text) => {

        if (!text) return "en-US";

        if (/[\u0C00-\u0C7F]/.test(text))
            return "te-IN";

        if (/[\u0900-\u097F]/.test(text))
            return "hi-IN";

        if (/[\u0B80-\u0BFF]/.test(text))
            return "ta-IN";

        if (/[\u0D00-\u0D7F]/.test(text))
            return "ml-IN";

        if (/[\u0C80-\u0CFF]/.test(text))
            return "kn-IN";

        if (/[\u4E00-\u9FFF]/.test(text))
            return "zh-CN";

        if (/[\u3040-\u30FF]/.test(text))
            return "ja-JP";

        if (/[\uAC00-\uD7AF]/.test(text))
            return "ko-KR";

        const lower = text.toLowerCase();

        if (
            lower.includes("terima kasih") ||
            lower.includes("selamat") ||
            lower.includes("apa kabar")
        )
            return "id-ID";

        if (
            lower.includes("apa khabar") ||
            lower.includes("terima kasih banyak")
        )
            return "ms-MY";

        return "en-US";
    };

    /* ------------------------------------------
        Find Best Voice
    -------------------------------------------*/

    const getBestVoice = (lang) => {

        if (!voices.length) return null;

        return (

            voices.find(v => v.lang === lang) ||

            voices.find(v =>
                v.lang.startsWith(lang.split("-")[0])
            ) ||

            voices.find(v =>
                v.name.includes("Google")
            ) ||

            voices.find(v =>
                v.name.includes("Microsoft")
            ) ||

            voices[0]

        );

    };

    /* ------------------------------------------
        Better Pronunciation
    -------------------------------------------*/

    const improvePronunciation = (text) => {

        let output = text;

        output = output.replace(/Poshana/gi, "Po shana");

        output = output.replace(/BMI/g, "B M I");

        output = output.replace(/AI/g, "A I");

        output = output.replace(/GPT/g, "G P T");

        output = output.replace(/SQL/g, "Sequel");

        output = output.replace(/API/g, "A P I");

        output = output.replace(/JavaScript/g, "Java Script");

        output = output.replace(/ReactJS/g, "React");

        return output;

    };

    /* ------------------------------------------
        Stop Everything
    -------------------------------------------*/

    const stopListening = () => {

        if (recognitionRef.current) {

            recognitionRef.current.stop();

            recognitionRef.current = null;

        }

        speechSynthesis.cancel();

        setStatus("idle");

        setIsActive(false);

    };

    /* ------------------------------------------
        Start Listening
    -------------------------------------------*/

    const startListening = () => {

        if (status !== "idle") {

            stopListening();

            return;

        }

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {

            setError(
                "Speech Recognition is not supported in this browser."
            );

            return;

        }

        setError("");

        const recognition = new SpeechRecognition();

        recognitionRef.current = recognition;

        recognition.lang = currentLanguage;

        recognition.interimResults = false;

        recognition.maxAlternatives = 1;

        recognition.continuous = false;

        setStatus("listening");

        setIsActive(true);

        recognition.start();

        recognition.onresult = async (event) => {

            const message =
                event.results[0][0].transcript;

            setTranscript(message);

            setReply("");

            const detectedLang =
                detectLanguage(message);

            setCurrentLanguage(detectedLang);

            setStatus("thinking");

            const updatedMessages = [

                ...messages,

                {
                    role: "user",
                    content: message
                }

            ];

            try {

                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/insights`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            messages: updatedMessages
                        })

                    }
                );

                if (!res.ok)
                    throw new Error("Server Error");

                const data = await res.json();

                const aiReply = data.reply;

                setReply(aiReply);

                setMessages([

                    ...updatedMessages,

                    {
                        role: "assistant",
                        content: aiReply
                    }

                ]);

                const finalText =
                    improvePronunciation(aiReply);

                const voice =
                    getBestVoice(
                        detectLanguage(finalText)
                    );

                const speech =
                    new SpeechSynthesisUtterance(
                        finalText
                    );

                speech.lang =
                    detectLanguage(finalText);

                if (voice)
                    speech.voice = voice;

                speech.rate = 0.93;

                speech.pitch = 1;

                speech.volume = 1;

                setStatus("speaking");
                speech.onstart = () => {
                    setStatus("speaking");
                };

                speech.onend = () => {
                    setStatus("idle");
                };

                speech.onerror = (e) => {
                    console.error("Speech error:", e);
                    setStatus("idle");
                };

                speechSynthesis.cancel();
                speechSynthesis.speak(speech);

            } catch (err) {

                console.error(err);

                setError(
                    err.message ||
                    "Sorry, something went wrong."
                );

                setReply(
                    "Sorry, I couldn't process your request."
                );

                setStatus("error");

            }

        };

        recognition.onerror = (event) => {

            console.error(event.error);

            switch (event.error) {

                case "not-allowed":
                    setError(
                        "Microphone permission denied."
                    );
                    break;

                case "audio-capture":
                    setError(
                        "No microphone detected."
                    );
                    break;

                case "network":
                    setError(
                        "Network error."
                    );
                    break;

                case "no-speech":
                    setError(
                        "I couldn't hear anything."
                    );
                    break;

                default:
                    setError(event.error);

            }

            setStatus("error");

        };

        recognition.onend = () => {

            recognitionRef.current = null;

            if (status === "listening") {

                setStatus("idle");

            }

        };

    };

    /* ------------------------------------------
        Close Popup
    -------------------------------------------*/

    const handleClose = () => {

        stopListening();

        setTranscript("");

        setReply("");

        setError("");

        setStatus("idle");

        setIsActive(false);

    };

    const statusLabel = {

        idle: "✨ Ready",

        listening: "🎤 Listening...",

        thinking: "🤖 Thinking...",

        speaking: "🔊 Speaking...",

        error: "⚠️ Error"

    };

    const showPopup =
        isActive || transcript || reply;

    return (
        <>
            {showPopup && (
                <div className="voice-popup">

                    <div className="voice-popup-top">

                        <div className="voice-popup-header">

                            <div className="voice-title">
                                ✨ Poshana AI
                            </div>

                            <button
                                className="voice-close-btn"
                                onClick={handleClose}
                            >
                                <X size={16} />
                            </button>

                        </div>

                        <div
                            className={`voice-status voice-status--${status}`}
                        >
                            {statusLabel[status]}
                        </div>

                    </div>

                    <div className="voice-popup-body">

                        {error && (
                            <p className="voice-error">
                                ⚠️ {error}
                            </p>
                        )}

                        {transcript && (
                            <p>
                                <strong>You:</strong>{" "}
                                {transcript}
                            </p>
                        )}

                        {reply &&
                            status !== "thinking" && (
                                <p>
                                    <strong>Poshana:</strong>{" "}
                                    {reply}
                                </p>
                            )}

                        {status === "thinking" && (
                            <div className="voice-thinking">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}

                        <p className="voice-hint">

                            {status === "idle" &&
                                "Click the orb to speak again"}

                            {status === "speaking" &&
                                "Click the orb to stop"}

                            {status === "error" &&
                                "Click the orb to retry"}

                        </p>

                    </div>

                </div>
            )}

            {nudge &&
                status === "idle" &&
                !showPopup && (

                    <div className="voice-nudge">

                        {nudge}

                    </div>

                )}

            <button
                className={`voice-orb ${status !== "idle"
                    ? "active"
                    : ""
                    } voice-orb--${status}`}
                onClick={startListening}
                title="Talk to Poshana AI"
                aria-label="Voice Assistant"
            >
                <img
                    src={starIcon}
                    alt="Poshana AI"
                    className="voice-orb-icon"
                />
            </button>

        </>
    );

}