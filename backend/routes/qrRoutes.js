import express from "express";
import { orGenerate } from "../controller/qrGenerateController.js";

const router = express.Router();

router.get("/generate" , orGenerate)

export default router;