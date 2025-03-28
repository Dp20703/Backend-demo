const connectDb = require("../DB/dbConnect");

async function FetchProducts(req, res) {
    try {
        const db = await connectDb();
        const collection = db.collection("products");
        const products = await collection.find().toArray();
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        return res.status(200).json({ message: "Product Details", products: products });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })

    }
}

module.exports = { FetchProducts };