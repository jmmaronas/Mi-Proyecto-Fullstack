import { Router } from "express";
import { login, logout, profile, register, profiles, deleteProfile, updateProfile } from "../controller/auth.controller.js";
import { adminRequired, authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/profile', authRequired, profile)

router.get('/profiles', authRequired, adminRequired, profiles)

router.delete('/profile/delete/:id', authRequired, adminRequired,  deleteProfile)

router.put('/profile/update/:id', authRequired, adminRequired, updateProfile)

export default router