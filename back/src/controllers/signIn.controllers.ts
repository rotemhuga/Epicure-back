import {getSignIn} from "../services/signIn.service"
import express, {Request, Response} from "express";

export const getControllSignIn = async (req: Request, res: Response) => {
    try {
        const signIn = await getSignIn();
        return res
        .status(200)
        .json(signIn);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}