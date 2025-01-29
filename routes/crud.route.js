import { createUser, test ,readUser, updateUser, getuser, delUser} from "../controllers/crud.controller.js";


import express from "express";
import { testHandler } from "../utils/test.js";

 const router = express.Router();
router.get('/test',testHandler,test);
router.post('/create',createUser); //router.post('/create',testHandler,createUser);   
router.get('/read',readUser);
// router.get('/getuser/:_id?/:name?/:age?',getuser);  //for req.params
router.get('/getuser',getuser);     //for req.query
// router.get('/getuser/:name',getuser);
// router.get('/getuser/:id',getuser);
router.put('/update/:id',updateUser)
router.delete('/deluser/:id',delUser);  //router.delete('/deluser/:id',testHandler,delUser)

export default router;