import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ISignUpBack {
    firstName?:string,
    lastName?:string,
    emailAddress?:string,
    shippingAddress?:string,
    password?: string,
}

export const signUpSchema = new Schema<ISignUpBack>({
    firstName: {type:String},
    lastName:{type:String},
    emailAddress:{type:String},
    shippingAddress: {type:String},
    password: {type:String},
});
   
export const signUpModel = mongoose.model<ISignUpBack>("users", signUpSchema);
