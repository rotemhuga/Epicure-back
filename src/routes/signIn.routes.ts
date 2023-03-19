import express, {Request, Response} from "express";
import {getControllSignIn} from "../controllers/signIn.controllers"

const router = express.Router();

router.get('/signIn', getControllSignIn);
export default router;