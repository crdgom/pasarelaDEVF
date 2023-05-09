import { Router } from "express";
import {tokenizeCard } from "../controllers/card.controller.js";
const router = Router();

router.post('/api/tokenize',tokenizeCard)

export default router