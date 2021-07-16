import mongoose, { ConnectionOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/ginvetory';

export const connectdb= async ()=>{
    try {
        const mongooseOption:ConnectionOptions = {
                useUnifiedTopology:true, 
                useNewUrlParser:true,
                useFindAndModify:false
        }

        const db=await mongoose.connect(MONGO_URI,mongooseOption);
        
        console.log('database this conecte',db.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }    
};