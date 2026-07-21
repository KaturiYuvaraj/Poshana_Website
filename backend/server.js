import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import insightRoutes from "./routes/insights.js";
import waitlistRoutes from "./routes/waitlist.js";

dotenv.config();
console.log("Groq Key loaded:", !!process.env.GROQ_API_KEY);

const app = express();

// Allow all origins (local dev + deployed frontend)
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api/insights", insightRoutes);
app.use("/api/waitlist", waitlistRoutes);

app.get("/", (req, res) => {
    res.send("Poshana Backend Running ✅");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
