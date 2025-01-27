import { createUser, test ,readUser, updateUser, getuser, delUser, getAggregateUsers} from "../controllers/crud.controller.js";


import express from "express";

 const router = express.Router();
router.get('/test',test);
router.post('/create',createUser);
router.get('/read',readUser);
// router.get('/getuser/:_id?/:name?/:age?',getuser);  //for req.params
router.get('/getuser',getuser);     //for req.query
router.get('/aggregate',getAggregateUsers);
// router.get('/getuser/:name',getuser);
// router.get('/getuser/:id',getuser);
router.put('/update/:id',updateUser)
router.delete('/deluser/:id',delUser)

export default router;