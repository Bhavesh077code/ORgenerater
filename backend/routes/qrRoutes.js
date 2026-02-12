import express from "express";
import { orGenerate } from "../controller/qrGenerateController.js";
import { assistant, getAssist } from "../controller/assistantController.js";


const router = express.Router();

router.get("/generate", orGenerate)
router.post("/assistant", assistant)
router.get("/getassist", getAssist)

export default router;