import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getAiSuggest = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

        const result = await model.generateContent(
            `Please generate a short, friendly, and natural English reply suggestion for the following chat (no more than 30 words):\n"${message}"`
        );

        const response = result.response;
        const suggestion = response.text();

        res.json({ suggestion });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "AI suggestion failed" });
    }
}