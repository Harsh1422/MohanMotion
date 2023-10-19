import mongoose from "mongoose";
export default async function connect()
{
    try {

        mongoose.connect("mongodb+srv://harshmohan1422:admin@cluster0.vftgjdb.mongodb.net/");
        const connection=mongoose.connection;
        connection.on('connected',() =>
        {
            // console.log("MongoDB connected successfullyd")
        })
        
    } catch (error) {
        console.log("Something goes wrong")
    }
}