const dbConnect = require('../DB/dbConnect');


async function register(req, res) {
    try {
        const db = await dbConnect();
        const collection = db.collection('Register');
        const { name, phone, email, password, address } = req.body;
        await collection.insertOne({
            name,
            email,
            phone,
            password,
            address
        })
        return res.status(200).json({ message: "User registered successfully" })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { register };