import express, {Application} from "express";
import DBconnect from "../Utils/DBconnect"

import cors from "cors";

const port: number = 3001;

const app: Application = express();
DBconnect();

app.use(express.json());
app.use(cors())

app.listen(port, () =>{
    console.log("");
    console.log("Server is created. Up and running🎈");
})