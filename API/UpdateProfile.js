const connectDb = require("../DB/dbConnect");
const { ObjectId } = require("mongodb");

async function UpdateProfile(req, res) {
    try {
        const db = await connectDb();
        const collection = db.collection("Register");
        const { id, firstName, lastName, email, password } = req.body;

        //update query:
        const updateData = {
            $set: {
                firstName,
                lastName,
                email,
                password
            }
        }
        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);
        if (result.modifiedCount == 0) {
            return res.status(200).json({ message: "No data found" });
        }
        else {
            return res.status(200).json({ message: "Profile Updated Successfully" });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = { UpdateProfile };