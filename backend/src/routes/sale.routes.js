import { Router } from "express";
import { createSale, deleteSale, getSaleById, getSales, updateSale } from "../controller/sale.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.use(authRequired)

router.get('/', getSales)

router.get('/:id', getSaleById )

router.post('/new', createSale)

router.put('/:id', updateSale)

router.delete('/:id', deleteSale)

export default router