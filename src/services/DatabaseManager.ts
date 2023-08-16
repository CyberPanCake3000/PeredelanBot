import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { events?: mongoDB.Collection } = {}

export async function connectToDatabase () : Promise<void>{
    dotenv.config();
    
    const dbConnectString: string = process.env.DB_CONN_STRING || '';
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(dbConnectString);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const eventsCollectionName: string = 'event';
    const eventsCollection: mongoDB.Collection = db.collection(eventsCollectionName);
 
    collections.events = eventsCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${eventsCollection.collectionName}`);
 }

 export default connectToDatabase;