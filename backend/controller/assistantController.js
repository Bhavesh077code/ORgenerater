
import { askAI } from "../services/openai.service.js";

export const assistant = async (req, res) => {
  const { message } = req.body;

  console.log("Incoming message:", message); // 🔹 debug

  if (!message) return res.status(400).json({ success: false, message: "Message required" });

  try {
    const reply = await askAI(message);
    console.log("AI reply:", reply); // 🔹 debug
    res.json({ success: true, reply });
  } catch (err) {
    console.error("Error in AI:", err); // 🔹 debug
    res.status(500).json({ success: false, message: err.message });
  }
};



export const getAssist = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json ({ success:false , message: error.message || "getassist error"})
  }
}