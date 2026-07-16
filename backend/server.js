import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import insightRoutes from "./routes/insights.js";

dotenv.config();
console.log("Groq Key:", process.env.GROQ_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/insights", insightRoutes);

app.get("/", (req, res) => {
    res.send("Poshana Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
