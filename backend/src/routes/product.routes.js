import { Router } from "express";
import { cretateProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controller/product.controller.js";
import { adminRequired, authRequired } from "../middlewares/validateToken.js";
import multer from "../multer.js";

const router = Router()

//router.use(authRequired)

router.get('/', getProducts )

router.get('/:id', getProductById)

router.post('/create', authRequired, multer.single("image") , cretateProduct)

router.put('/update/:id', authRequired, updateProduct)

router.delete('/delete/:id', authRequired, deleteProduct)

export default router