import {restaurantModel} from "../model/restaurants.model"
import {dishModel} from "../model/dishes.model"
import { Request, Response } from "express";

export const getRestaurants = async () => {
    try {
        const restaurants = await restaurantModel.find();
        return restaurants
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

export const deleteRestaurant = async (req:Request , res:Response) => {
    const { restaurant } = req.body;
    try {
      // Delete restaurant from the database
      {
        await restaurantModel.findOneAndDelete({ name: restaurant });
      }
      res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while deleting the restaurant' });
    }
};

export const getOneNewRest = async (req:Request , res:Response) => {
    const restaurant  = req.body;
    try {
      {
       const cardRest = await restaurantModel.create(restaurant);
       return cardRest;
      }
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while adding the restaurant' });
    }
};

