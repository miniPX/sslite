import { GoogleGenAI, Type } from "@google/genai";

// would NOT keep key here IRL
const ai = new GoogleGenAI({
  apiKey: "AIzaSyA_x8jmBnV-z6RHSKstApBgQX3eDLO9HSM",
});

export const askGemini = async (question: string) => {
  try {
    return ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
            },
            description: {
              type: Type.STRING,
            },
          },
          propertyOrdering: ["title", "description"],
        },
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    throw new Error("Error from Gemini!");
  }
};
