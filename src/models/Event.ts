import { ObjectId } from "mongodb";

export default class Event {

    constructor(public title: string, public location: object, public description: string, public id?: ObjectId) {
        
    }
}