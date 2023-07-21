import Product from '../model/product.model.js'

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find()
        return res.json({ product })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const productFound = await Product.findById(req.params.id)
        console.log(productFound)
        return res.json(productFound)
    } catch (error) {
        return res.status(401).json({ message: "Product not found" })
    }
}

export const cretateProduct = async (req, res) => {       
    try {
        const { title, description, price, image } = req.body
        const newProduct = new Product({ title, description, price, image:req.file?.filename || image })
        const productCreated = await newProduct.save()
        return res.json({ productCreated })
    } catch (error) {
        return res.status(401).json({ message: "Product create fail" })
    }
}

export const updateProduct = async (req, res) => {
    console.log(req.params.id, req.file)
    try {
        const { title, description, price, image } = req.body
        const productUpdated = await Product.findByIdAndUpdate(req.params.id, { title, description, price, image:req.file?.filename || image }, { new: true })
        res.json({ productUpdated })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        return res.json({ message: "Product deleted successfully" })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}
