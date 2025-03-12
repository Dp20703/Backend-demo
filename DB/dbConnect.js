const { MongoClient } = require('mongodb');
const url = "mongodb+srv://dp2073:1234@trio.6o0jg.mongodb.net/?retryWrites=true&w=majority&appName=Trio";
const client = new MongoClient(url);

async function dbConnect() {
    try {
        // Connect to the MongoDB database: RentingProperties
        await client.connect();
        console.log("Connected with MongoDB atlas");
        const database = client.db("RentingProperties");
        return database;


    } catch (error) {
        console.log(error);

    }
}
module.exports=dbConnect;