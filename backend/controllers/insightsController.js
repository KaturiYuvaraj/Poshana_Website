import OpenAI from "openai";

export const generateInsights = async (req, res) => {

    const client = new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
    });

    try {

        const { messages } = req.body;

        const completion = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: `
                        You are Poshana AI.

                        You are a friendly Poshana AI health coach.

                        Remember the conversation naturally.

                        Give nutrition, workout, sleep and wellness advice.

                        Do not diagnose diseases.

                        If the user asks follow-up questions like
                        "what about lunch?"
                        or
                        "can I improve it?"

                        understand them from the previous conversation.
`
                },

                ...messages
            ],
        });

        res.json({
            success: true,
            reply: completion.choices[0].message.content,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};