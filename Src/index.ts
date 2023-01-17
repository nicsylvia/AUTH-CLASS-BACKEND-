import express, {Application} from "express";
import DBconnect from "../Utils/DBconnect"

import cors from "cors";
import router from "../Routes/user.routes";

const port: number = 3001;

// Instantiating the application:
const app: Application = express();

// Initializing DB Connection;
DBconnect();

// Instantiating middleware:
app.use(express.json());
app.use(cors());

// Instantiating the Routes:
app.use("/api/auth", router)

app.listen(port, () =>{
    console.log("");
    console.log("Server is created. Up and running🎈");
})