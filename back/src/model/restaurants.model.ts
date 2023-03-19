import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IrestaurantBack {
    id?:string,
    img?:string,
    name?: string,
    chef?: string,
    rating?: string,
    openHour?: string,
    closeHour?: string,
    address?:string,
    dishes?: number[],
    isPopular?: boolean,
    isNew?: boolean,
    isOpen?: boolean,
    map?: boolean,
}

export const restaurantSchema = new Schema<IrestaurantBack>({
    id: {type:String},
    img:{type:String},
    name: {type:String},
    chef: {type:String},
    rating: {type:String},
    openHour: {type:String},
    closeHour: {type:String},    
    address:{type:String},
    dishes: {type:Array<Number>},
    isPopular: {type:Boolean},
    isNew: {type:Boolean },
    isOpen: {type:Boolean},
    map: {type:Boolean},
}, { suppressReservedKeysWarning: true });
   
export const restaurantModel = mongoose.model<IrestaurantBack>("restaurants", restaurantSchema);
