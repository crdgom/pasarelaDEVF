import { Router } from "express";
import {tokenizeCard, payCard } from "../controllers/card.controller.js";
const router = Router();

router.post('/api/tokenize',tokenizeCard)
router.post('/api/pay', payCard)

export default router