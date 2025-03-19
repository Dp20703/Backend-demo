
const connectDB = require("../DB/dbConnect");

async function FetchAllUser(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Register");

        // Get the data from the collection:

        const userData = await collection.find().toArray();
        if (userData.length == 0) {
            res.status(404).json({ message: "No user Found" });
        }
        else {
            res.status(200).json({ message: "User Found successfully", userDetails: userData });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { FetchAllUser };