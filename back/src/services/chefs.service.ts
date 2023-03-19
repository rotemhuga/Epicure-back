import {chefModel} from "../model/chefs.model"
import { Request, Response } from "express";

export const getChefs = async () => {
    try {
        const chefs = await chefModel.find();
        return chefs
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

export const deleteChef = async (req:Request , res:Response) => {
    const { chef } = req.body;
     try {
      // Delete restaurant from the database
      await chefModel.findOneAndDelete({ name: chef });
  
      res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while deleting the restaurant' });
    }
  };
