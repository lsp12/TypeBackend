
import {RequestHandler} from 'express';
import Inventory,{IInventory} from '../model/Inventory';

//@Route    Get api/Invetory
//@desc     Get all Inventory
//@access   Public
export const getInventary:RequestHandler = async( req, res) =>{
    try {
        const invetory=await Inventory.find();

        return res.status(200).json(invetory);

    } catch (err) {
        
        return res.status(400).json(err);

    }
}

//@Route    Post api/Invetory
//@desc     Create all Inventory
//@access   Public

export const postInvetory:RequestHandler = async(req, res)=>{
    try {
        const {
            tradeName,
            productName,
            description,
            price,
            amount
        } = req.body;
        
        const invetory:IInventory = new Inventory({tradeName, productName, description, price, amount});
        const invetorySave = await invetory.save();
        return res.status(200).json({invetorySave});
    } catch (err) {
        return res.status(400).json({err});

    }
}

//@Route    Put api/inventory/:id
//@desc     Edit job by id
//@access   Public

export const PutInvetory:RequestHandler = async(req, res)=>{
    try {
        const {
            tradeName,
            productName,
            description,
            price,
            amount
        } = req.body;
        const inventory = ({tradeName, productName, description, price, amount});
        const inventoryUndate = await Inventory.findByIdAndUpdate(req.params.id,inventory,{new: true});
        return res.status(200).json({inventoryUndate}); 
    } catch (err) {
        return res.status(400).json({err}); 
    }
}

//@Route    Delete api/inventory/:id
//@desc     Delete inventory by id
//@access   Public

export const DeleteInvetory:RequestHandler = async(req, res)=>{
    try {
        const deleteInvetory = await Inventory.findByIdAndRemove(req.params.id);
        
        return res.status(200).json({deleteInvetory});
    } catch (err) {
        return res.status(400).json({err});

    }
}