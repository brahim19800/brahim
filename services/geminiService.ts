
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const analyzePlantImage = async (base64Image: string, mimeType: string, language: 'en' | 'ar'): Promise<string> => {
    if (!API_KEY) {
        return language === 'en' 
            ? "API Key is not configured. Please set up your API key."
            : "مفتاح API غير مهيأ. يرجى إعداد مفتاح API الخاص بك.";
    }

    try {
        const imagePart = {
            inlineData: {
                mimeType,
                data: base64Image,
            },
        };

        const languagePrompt = language === 'ar'
            ? 'يرجى الرد باللغة العربية.'
            : 'Please respond in English.';

        const textPart = {
            text: `Analyze this image of a plant leaf. Identify any potential pests or diseases. Provide a concise diagnosis and suggest simple, actionable treatment steps. Format the response clearly with headings for 'Diagnosis' and 'Treatment'. ${languagePrompt}`,
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error analyzing image with Gemini API:", error);
        throw new Error("Failed to get analysis from AI service.");
    }
};
