import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/product.routes.js'
import salesRouter from './routes/sale.routes.js'

import * as url from 'url'
import path from "path"

export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()

app.use(express.static(path.join(__dirname, "/views/build")))

app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(cookieParser())
console.log(path.join(__dirname, "/views/1689639141625-DesarroladorWeb.png"))
app.get("/", (req,res)=>res.sendFile(path.join(__dirname,"/views/1689639141625-DesarroladorWeb.png")))
app.use('/api', authRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/sales', salesRouter)

export default app
