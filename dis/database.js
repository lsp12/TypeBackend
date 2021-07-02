"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/gworks';
(async () => {
    try {
        const mongooseOption = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        };
        const db = await mongoose_1.default.connect(MONGO_URI, mongooseOption);
        console.log('database this conecte', db.connection.name);
    }
    catch (err) {
        console.log(err);
    }
});
