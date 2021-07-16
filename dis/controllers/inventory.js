"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInvetory = exports.getInventary = void 0;
const Inventory_1 = __importDefault(require("../model/Inventory"));
//@Route    Get api/Invetory
//@desc     Get all Inventory
//@access   Public
const getInventary = async (req, res) => {
    try {
        const invetory = await Inventory_1.default.find();
        return res.status(200).json({ invetory });
    }
    catch (err) {
        return res.status(400).json({ err });
    }
};
exports.getInventary = getInventary;
//@Route    Post api/Invetory
//@desc     Create all Inventory
//@access   Public
const postInvetory = async (req, res) => {
    try {
        const { tradeName, productName, description, price, amount } = req.body;
        const invetory = new Inventory_1.default({ tradeName, productName, description, price, amount });
        const invetorySave = await invetory.save();
        return res.status(200).json({ invetorySave });
    }
    catch (err) {
        return res.status(400).json({ err });
    }
};
exports.postInvetory = postInvetory;
