import { createUser, test ,readUser} from "../controllers/crud.controller.js";


import express from "express";

 const router = express.Router();
router.get('/test',test);
router.post('/create',createUser)
router.get('/read',readUser)

export default router;