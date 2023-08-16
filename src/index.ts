import dotenv from 'dotenv';
import App from './App';

dotenv.config();

const app = new App();
app.setup();
app.launch();

import { MongoClient } from "mongodb";

// Replace the following with your Atlas connection string
const url: string = process.env.DB_CONN_STRING || '';

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log((err as Error).stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);