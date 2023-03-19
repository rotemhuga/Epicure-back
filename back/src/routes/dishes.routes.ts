import express, {Request, Response} from "express";
import {getAllDishes, deleteRestDishes} from "../controllers/dishes.controllers"

const router = express.Router();

router.get('/dishesPage', getAllDishes);
router.delete('/dishesPage', deleteRestDishes);

export default router;


