import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
    const { authorization : token } = req.headers
    console.log(token)
    if (!token) return res.status(401).json({ message: "No token, authorization denied" })

    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
        if (error) return res.status(401).json({ message: "Invalid Token" })
        req.user = decoded        
        next()
    })
}

export const adminRequired = (req, res, next) => {
    if(req.user.role === "user")return res.status(401).json({ message: "User Admin required" })
    next()
}