import {dishModel} from "../model/dishes.model"
import { Request, Response } from "express";

export const getDishes = async () => {
    try {
        const dishes = await dishModel.find();
        return dishes
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

export const deleteDishes = async (req:Request , res:Response) => {
    const { restaurant } = req.body;
    try {
       {
        await dishModel.deleteMany({ restaurant: restaurant });
        }
    
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the restaurant' });
}
};

