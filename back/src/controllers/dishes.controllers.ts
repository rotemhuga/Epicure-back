import {getDishes, deleteDishes} from "../services/dishes.service"
import express, {Request, Response} from "express";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
        const allDishes = await getDishes();
        return res.status(200).json(allDishes);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

export const deleteRestDishes = async (req: Request, res: Response) => {
    try {
        const DishesAfterDelete = await deleteDishes(req, res);
        return res.status(200).json(DishesAfterDelete);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}