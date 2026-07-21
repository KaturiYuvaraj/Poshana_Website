import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import insightRoutes from "./routes/insights.js";

dotenv.config();
console.log("Groq Key loaded:", !!process.env.GROQ_API_KEY);

const app = express();

// Allow requests from local frontend dev server and production
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        process.env.FRONTEND_URL,
    ].filter(Boolean),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api/insights", insightRoutes);

app.get("/", (req, res) => {
    res.send("Poshana Backend Running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
