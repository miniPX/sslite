import { GoogleGenAI, Type } from "@google/genai";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const ai = new GoogleGenAI({ apiKey: "AIzaSyA_x8jmBnV-z6RHSKstApBgQX3eDLO9HSM" });

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
    }
    catch (e) {
        throw new Error("Error from Gemini!");
    }
}

// export const useGeminiAI = () => {
//     const queryClient = useQueryClient()
//     return useQuery({ queryKey: ['gemini'], queryFn: queryGeminiAPI });
// }