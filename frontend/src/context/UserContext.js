import { createContext, useState } from "react";
//import { usersMock } from "../services/services";
import { getUser, validateUser, createUser } from "../services/userService.js";

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
            const userFound = await getUser(token)
            isAdmin(userFound)
            setUser(userFound)
        } catch (error) {
            console.log(error)
        }
    }

    const logout=()=>{
        setUser({})
        setAdmin(false)
        setToken({})
    }

    const register = async (newUser)=>{
        try {
            setToken(await createUser(newUser))
            setUser(newUser)
        } catch (error) {
            console.log(error)
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