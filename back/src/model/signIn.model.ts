import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ISignInBack {
    emailAddress?:string,
    password?: string,
}

export const signInSchema = new Schema<ISignInBack>({
    emailAddress:{type:String},
    password: {type:String},
}, { suppressReservedKeysWarning: true });
   
export const signInModel = mongoose.model<ISignInBack>("signIn", signInSchema);
