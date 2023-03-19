import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IdishBack {
    id?:string,
    img?: string,
    name?: string,
    restaurant?: string,
    ingredients?: string,
    isSpicy?: string,
    isVegitarian?: string,
    isVegan?: string,
    isBreakfast: boolean,
    isLunch: boolean,
    isDinner: boolean,
    sideDishes?: string[],
    changes?: string[],
    price?: string,
    optionalSides?: string[],
    optionalChanges?: string[],
    isPopular?: boolean
}

export const dishSchema = new Schema<IdishBack>({
    id:{type:String},
    name:{type:String},
    restaurant: {type:String},
    ingredients: {type:String},
    isSpicy: {type:String},
    isVegitarian: {type:String},
    isVegan: {type:String},
    isBreakfast: {type:Boolean},
    isLunch: {type:Boolean},
    isDinner: {type:Boolean},
    sideDishes: {type:Array<String>},
    changes: {type:Array<String>},
    price: {type:Array<String>},
    optionalSides: {type:Array<String>},
    optionalChanges: {type:Array<String>},
    isPopular: {type:Boolean},

}, { suppressReservedKeysWarning: true });
   
export const dishModel = mongoose.model<IdishBack>("dishes", dishSchema);