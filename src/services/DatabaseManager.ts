import * as dotenv from "dotenv";
import mongoose from "mongoose";

export default class DBManager {
    private readonly DB_URL: string;

    constructor(url: string) {
        this.DB_URL = url;
    }

    public connectDB = async () => {
        try {
            await mongoose.connect(this.DB_URL);

            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }
}
