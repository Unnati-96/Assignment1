import { createUser, test ,readUser, updateUser, getuser} from "../controllers/crud.controller.js";


import express from "express";

 const router = express.Router();
router.get('/test',test);
router.post('/create',createUser);
router.get('/read',readUser);
router.get('/getuser/:id',getuser);
router.put('/update/:id',updateUser)

export default router;