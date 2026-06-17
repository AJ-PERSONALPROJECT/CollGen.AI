import { GoogleGenAI } from '@google/genai';
import { collegesDatabase } from '../data/colleges';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  feedback?: 'upvote' | 'downvote' | 'none';
}

export async function getChatResponse(
  history: ChatMessage[], 
  newMessage: string,
  userRole: string = 'guest',
  userPreferences: any = null
): Promise<string> {
  const systemInstruction = `You are an intelligent, all-encompassing College Enquiry Virtual Assistant.
You handle queries for ANY college or university. You can answer questions related to courses, admissions, fee structures, eligibility, campus life, and more.
You must personalize your answers based on the user's role and preferences.

The current user has the role: '${userRole}'. 
Address them appropriately (e.g., if it's a parent, address concerns like safety, fees, career prospects. If student, focus on campus life, courses. If faculty, focus on employment, research. If guest, provide general info).

Their preferences (if any) are: ${JSON.stringify(userPreferences || {})}

Here is a primary database of colleges to use as a strong reference:
${JSON.stringify(collegesDatabase, null, 2)}
You can also use your general knowledge for colleges not listed in the database.

Be helpful, concise, and professional. Use formatting (markdown) like bolding, lists, and clear paragraphs.
If you don't know the exact answer about a specific real-world college, provide realistic generalized information or a polite fallback suggesting they verify with the institution. 
Keep your responses brief, as they might be read aloud using text-to-speech.`;

  try {
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    contents.push({ role: 'user', parts: [{ text: newMessage }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction,
      }
    });
    return response.text || "I didn't quite get that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I am having trouble connecting to my service right now.";
  }
}
