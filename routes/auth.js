import express from "express";
import { signinUser, signupUser,authUpdate } from "../controllers/auth.js";
import { verifyUser } from "../utils/verifyuser.js";

const router = express.Router();
router.post('/signup',signupUser);
router.post('/signin',signinUser);
router.put('/authupdate/:id',verifyUser,authUpdate)



export default router;