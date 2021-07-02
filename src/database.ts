import mongoose, { ConnectionOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/gworks';

(async ()=>{
    try {
        const mongooseOption:ConnectionOptions = {
                useUnifiedTopology:true, 
                useNewUrlParser:true
        }

        const db=await mongoose.connect(MONGO_URI,mongooseOption);
        
        console.log('database this conecte',db.connection.name)
    } catch (err) {
        console.log(err);
    }    
});