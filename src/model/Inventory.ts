import {Schema,model,Document} from 'mongoose'

const inventorySchema =new Schema({
    tradeName: {
        type: String,
        required: true,
        trim: true
    },
    productName:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    }
    
},{ timestamps:true, versionKey:false });

export interface IInventory extends Document{
    tradeName: string,
    productName: string,
    description: string,
    price: string,
    amount: string
}

export default model<IInventory> ('Inventory' , inventorySchema);