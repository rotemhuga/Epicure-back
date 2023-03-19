import {getSignUp} from "../services/signUp.service"
import express, {Request, Response} from "express";
import bcrypt from "bcrypt";
const jwt = require('jsonwebtoken');

  export const getControllSignUp = async (req: Request, res: Response) => {
    console.log("users controller connected");
    try {
        const allDataUser = req.body
        const _usersCheck = await getSignUp(allDataUser);
        if (!(_usersCheck.emailAddress && _usersCheck.password && _usersCheck.firstName && allDataUser.lastName && allDataUser.shippingAddress)) {
            res.status(400).send("All input is required");
          }

    // Validate if user exist in our database  
    const oldUser = await allDataUser.findOne({email:allDataUser.emailAddress });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }
    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(allDataUser.password!, 10);
    
    // Create user in our database
    const user = await allDataUser.create({
        firstName:allDataUser.firstName,
        lastName:allDataUser.lastName,
        emailAddress:allDataUser.emailAddress!.toLowerCase(),
        shippingAddress:allDataUser.shippingAddress,
        password: encryptedPassword,
      });

      res.status(201).json(allDataUser);
    } catch (err) {
      console.log(err);
    }
};