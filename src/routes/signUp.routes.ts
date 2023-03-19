import express, {Request, Response} from "express";
import {getControllSignUp} from "../controllers/signUp.controllers"

const router = express.Router();

router.post('/users', getControllSignUp);
export default router;