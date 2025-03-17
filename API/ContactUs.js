
const connectDB = require("../DB/dbConnect");

async function contactUs(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("contactUs");

        // Get the data from the request body 
        const { firstName, lastName, email, phoneNumber, message } = req.body;
        await collection.insertOne({
            firstName,
            lastName,
            email,
            phoneNumber,
            message
        })
        return res.status(200).json({ message: "Message sent successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports={contactUs};