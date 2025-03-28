const connectDb = require("../DB/dbConnect");

async function AddProduct(req, res) {
    try {
        const db = await connectDb();
        const collection = db.collection("products");
        const { Name, Price, Description, Quantity } = req.body;
        const image = req.file ? req.file.filename : null;

        await collection.insertOne({
            Name,
            Price,
            Description,
            Quantity,
            image
        });
        return res.status(200).json({ message: "Product added successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { AddProduct };
