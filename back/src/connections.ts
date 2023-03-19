import {connect} from "mongoose"
const uri = "mongodb+srv://RotemHuga:Rot249853@cluster0.ppyhnan.mongodb.net/EpicureDB"
import dotenv from "dotenv" 
dotenv.config()
// const mongoUri: any = process.env.TOKEN_SECRET 

export const connectToDB = async () => {
try {
    await connect(uri);
    console.log('db connected')
  } catch (err) {
    console.log("error connecting to db", err);
  }
 };