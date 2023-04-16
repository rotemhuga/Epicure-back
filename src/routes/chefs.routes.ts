import express, {Request, Response} from "express";
import {getAllChefs, deleteClickedChef} from "../controllers/chefs.controllers"

const router = express.Router();

router.get('/ChefsPage', getAllChefs);
// router.delete('/ChefsPage', deleteClickedChef);
router.delete('/', middleWare.adminVerify('admin'), deleteClickedChef);

export default router;
