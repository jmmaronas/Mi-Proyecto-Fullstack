import { createContext, useEffect, useState } from "react";
//import { usersMock } from "../services/services";
import { getUser, validateUser, createUser } from "../services/userService.js";

import Swal from "sweetalert2";

export const UserContext = createContext()

const { Provider } = UserContext

export default function UserProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || {})

    const login = async (username, password) => {
        try {
            const token = await validateUser(username, password)
            setToken(token)
            Swal.fire({
                title: 'Confirm!',
                text: 'Ingreso Correcto',
                icon: 'success',
                timer: 1500
            })
            const userFound = await getUser(token)
            isAdmin(userFound)
            setUser(userFound)
            return { userFound, token }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const logout = () => {
        Swal.fire({
            icon: "warning",
            title: 'Esta seguro de cerrar sesion',
            denyButtonText: 'Logout',
            showConfirmButton: false,
            showDenyButton: true
        }).then((result) => {
            if (result.isDenied) {
                setUser({})
                setAdmin(false)
                setToken({})
            }
        })
    }

    const register = async (newUser) => {
        try {
            setToken(await createUser(newUser))
            setUser(newUser)
            Swal.fire({
                title: 'Confirm!',
                text: 'Nuevo usuario generado',
                icon: 'success',
                timer: 1500
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const isAdmin = (user) => {
        setAdmin(user.role === "admin")
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", JSON.stringify(token))
    }, [user, token])

    const valorDelContexto = {
        user,
        admin,
        token,
        login,
        logout,
        register,
        isAdmin
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}