import mongoose from "mongoose";

const DB = "mongodb://localhost/AUTHENTICATION";
const liveUrl = "";

// Old method of creating and connecting to database.

// mongoose.connect(DB);

// mongoose.connection.on(
//     "open", () =>{
//         console.log("Databse conneected to server ");
//     }
// ).once(
//     "error", (error) =>{
//         console.log("An error occured in connecting BD");
//     }
// )


// Mr.Joe's method:
export default async function DBconnect(){
    try {
        const myConnection = await mongoose.connect(DB);
        console.log(`DB is connected to ${myConnection.connection.host}`);
    } catch (error) {
        console.log("Unable to connect");
    }
}




















































