import {getChefs, deleteChef} from "../services/chefs.service"
import express, {Request, Response} from "express";

export const getAllChefs = async (req: Request, res: Response) => {
    try {
        const allChefs = await getChefs();
        return res.status(200).json(allChefs);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}

export const deleteClickedChef = async (req: Request, res: Response) => {
    try {
        const chefsAfterDelete = await deleteChef(req, res);
        return res.status(200).json(chefsAfterDelete);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}


