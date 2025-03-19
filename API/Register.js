const dbConnect = require('../DB/dbConnect');


async function register(req, res) {
    try {
        const db = await dbConnect();
        const collection = db.collection('Register');
        const { firstName, lastName, email, password } = req.body;
        await collection.insertOne({
            firstName,
            lastName,
            email,
            password
        })
        return res.status(200).json({ message: "User registered successfully" })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { register };