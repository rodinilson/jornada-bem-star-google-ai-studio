
import { GoogleGenAI } from "@google/genai";

export const getDeeperInsight = async (tipTitle: string, tipDescription: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Dê uma explicação científica e prática de 3 parágrafos sobre a importância desta dica de saúde: "${tipTitle} - ${tipDescription}". Use um tom motivador e profissional em Português Brasileiro.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "Desculpe, não consegui obter mais detalhes no momento.";
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return "Ocorreu um erro ao conectar com a inteligência artificial. Tente novamente mais tarde.";
  }
};
