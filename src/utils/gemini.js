import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the Flovepal Assistant, an intelligent AI helping users with organic farming, plant care, and IoT agriculture solutions.

***IMPORTANT: Keep responses SHORT, SWEET, and CONCISE.***
- Limit responses to 2-3 sentences max.
- Be warm and friendly.
- No long paragraphs. Use brief bullet points only if absolutely necessary.

Key details about Flovepal:
- We specialize in IoT-based plant monitoring systems.
- We promote organic and sustainable farming practices.
- We offer both online and offline consultations.
`;

const getGeminiResponse = async (currentMessage, history = []) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    throw new Error("Gemini API Key is missing. Please check your .env file.");
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", 
        systemInstruction: SYSTEM_INSTRUCTION
    });

    const chatSession = model.startChat({
      history: history.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chatSession.sendMessage(currentMessage);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error details:", error);
    throw error;
  }
};

export { getGeminiResponse };
