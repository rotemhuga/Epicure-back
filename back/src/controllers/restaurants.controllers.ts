import {getRestaurants, deleteRestaurant, getOneNewRest} from "../services/restaurants.service"
import express, {Request, Response} from "express";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const allRestaurants = await getRestaurants();
        return res.status(200).json(allRestaurants);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

export const deleteClickedRest = async (req: Request, res: Response) => {
    try {
        const restsAfterDelete = await deleteRestaurant(req, res);
        return res.status(200).json(restsAfterDelete);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

export const getNewRest = async (req: Request, res: Response) => {
    try {
        const newRest = await getOneNewRest(req, res);
        return res.status(200).json(newRest);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}