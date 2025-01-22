import { createUser, test } from "../controllers/crud.controller.js";

import express from "express";

 const router = express.Router();
router.get('/test',test);
router.post('/create',createUser)

export default router;