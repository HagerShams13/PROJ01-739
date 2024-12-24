import mongoose from "mongoose";
const connection =()=>{
    mongoose.set("strictQuery",true)
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Connected to Database ..."))
    .catch((err)=>{
        console.log("Error Connecting to Database",err);
    })
}

export default connection;