import express from "express";
const app = express();
import routes from "../src/routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./connections";
import dotenv from "dotenv"
dotenv.config() 

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(8000, () => console.log(`Listening on http://localhost:8000`));
app.get("/", function (req, res) {
   res.send("Hello World");
});
connectToDB()
