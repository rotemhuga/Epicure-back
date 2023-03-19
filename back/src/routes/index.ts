import express from "express";
import chefsRoutes from "../routes/chefs.routes";
import restaurantsRoutes from "../routes/restaurants.routes";
import DishesRoutes from "../routes/dishes.routes";
import SignUpRoutes from "../routes/signUp.routes";
import SignInRoutes from "../routes/signIn.routes";

const router = express.Router();

router.use("/epicure", chefsRoutes);
router.use("/epicure", restaurantsRoutes);
router.use("/epicure", DishesRoutes);
router.use("/epicure", SignUpRoutes);
router.use("/epicure", SignInRoutes);

export default router;
