import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IchefBack {
    id?:string,
    name?: string,
    info?: string,
    portrait?: string,
    restaurants?: string[],
    isChefOfTheWeek?: boolean,
    isNew?: boolean,
    mostViewed?:boolean,
}

export const chefSchema = new Schema<IchefBack>({
    id:{type:String},
    name:{type:String},
    info: {type:String},
    portrait: {type:String},
    restaurants: {type:Array<String>},
    isChefOfTheWeek: {type:Boolean},
    isNew: {type:Boolean},
    mostViewed:{type:Boolean},

}, { suppressReservedKeysWarning: true });
   
export const chefModel = mongoose.model<IchefBack>("chefs", chefSchema);