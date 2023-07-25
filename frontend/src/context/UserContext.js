import { createContext, useState } from "react";
//import { usersMock } from "../services/services";
import { getUser, validateUser, createUser } from "../services/userService.js";

import Swal from "sweetalert2";

export const UserContext = createContext()

const { Provider } = UserContext

export default function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState({})

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