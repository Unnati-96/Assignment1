import express from "express";
import {  avgHobbies,  bothcondns , categorized, getAgeCount, getAvgAge, topFruits } from "../controllers/aggregate.js";

const router = express.Router();

// router.get('/count',getAgeCount)
router.get('/agecount/:num',getAgeCount)
router.get('/avgage',getAvgAge);
router.get('/topfruit',topFruits)
router.get('/avghobbies',avgHobbies);
router.get('/bothcondn',bothcondns);
router.get('/category',categorized);

 export default router;