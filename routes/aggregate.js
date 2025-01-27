import express from "express";
import {  getAgeCount, getAvgAge, topFruits } from "../controllers/aggregate.js";

const router = express.Router();

// router.get('/count',getcount)
router.get('/agecount/:num',getAgeCount)
router.get('/avgage',getAvgAge);
router.get('/topfruit',topFruits)

 export default router;