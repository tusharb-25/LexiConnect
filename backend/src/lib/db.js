import mongoose from "mongoose"

export const connectDB= async () =>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log (`MONGONDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Eroor in connecting to MongoDB" ,error);
        process.exit(1); // 1 means failure
    }
}

