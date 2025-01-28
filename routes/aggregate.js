import express from "express";
import {  avgHobbies,  bothcondns , getAgeCount, getAvgAge, topFruits } from "../controllers/aggregate.js";

const router = express.Router();

// router.get('/count',getAgeCount)
router.get('/agecount/:num',getAgeCount)
router.get('/avgage',getAvgAge);
router.get('/topfruit',topFruits)
router.get('/avghobbies',avgHobbies);
router.get('/bothcondn',bothcondns);

 export default router;