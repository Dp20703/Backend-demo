const { ObjectId } = require("mongodb");
const connectDB = require("../DB/dbConnect");


async function DeleteUser(req, res) {
    try {

        const db = await connectDB();
        const collection = await db.collection("Register");
        const { id } = req.body;
        const result = await collection.deleteOne({ _id:new ObjectId(id) });
        if (result.deletedCount == 0) {
            return res.status(400).json({ message: "No User found" });
        }
        else {
            return res.status(200).json({ message: "User Deleted Successfully" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })

    }
}
module.exports = { DeleteUser };