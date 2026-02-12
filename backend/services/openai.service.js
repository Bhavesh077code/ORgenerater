import OpenAI from "openai";

import "dotenv/config";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const askAI = async (message) => {
  console.log("Sending to OpenAI:", message); // 🔹 debug
  const response = await client.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      {
        role: "system",
        content: `
You are my personal AI assistant.

Rules:
- Speak in Hinglish
- Keep answers short and clear
- Be friendly
- Help with Node.js, React, and AI
- Explain step by step when teaching
-Open Chrome
-Play music
-Send WhatsApp message to Ali
-Shutdown system
Actions allowed:
- send_whatsapp
- make_call
`


      },
      {
        role: "user",
        content: message
      },
    ],
  });

  //return "AI hi my name is bhavesh but i am not in ai is currently unavailable (quota exceeded).";

  console.log("OpenAI response object:", response); // 🔹 debug
  return response.choices[0].message.content;
};
