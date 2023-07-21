import { createAccesToken } from '../libs/jwt.js'
import User from '../model/user.model.js'
import Sale from '../model/sale.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User(
            {
                username,
                email,
                password: passwordHash,
            }
        )
        const userSaved = await newUser.save()


        const token = await createAccesToken({ id: userSaved.id, role: userSaved.role })

        res.json(token)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "User not found" })

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" })

        const token = await createAccesToken({ id: userFound.id, role: userFound.role })

        res.json(token)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    try {
        const { id } = req.user
        const userFound = await User.findById(id)
        const buys = await Sale.find({ userId: id })
        if (!userFound) return res.status(400).json({ message: "User not found" })
        return res.json({
            username: userFound.username,
            email: userFound.email,
            role: userFound.role,
            buys,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const profiles = async (req, res) => {
    try {
        const usersFound = await User.find()
        res.json(usersFound)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { id } = req.params
        const result = await User.findByIdAndUpdate(id, req.body)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}