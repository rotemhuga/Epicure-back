import express, {Request, Response} from "express";
import {getAllRestaurants, deleteClickedRest, getNewRest} from "../controllers/restaurants.controllers"

const router = express.Router();

router.get('/restaurantsPage', getAllRestaurants);
router.delete('/restaurantsPage', deleteClickedRest);
router.post('/restaurantsPage', getNewRest);
export default router;