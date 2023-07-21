import { useContext } from "react"
import { CartContext } from "../context/CartContext.js"
import { UserContext } from "../context/UserContext.js"

export const links = [
    {
        id: 1,
        description: "Inicio",
        href: "/"
    },
    {
        id: 2,
        description: "Desktop",
        href: "categoria/desktop"
    },
    {
        id: 3,
        description: "Notebooks",
        href: "categoria/notebooks"
    },
    {
        id: 4,
        description: "Accesorios",
        href: "categoria/accesorios"
    }

]

export const adminLinks = [
    {
        id: 5,
        description: "Mantenimineto Prodcutos",
        href: "services/products"
    },
    {
        id: 6,
        description: "Mantenimineto Usuarios",
        href: "services/users"
    }
]



export const usersMock = [
    {
        id: 1,
        username: "admin@admin.com",
        password: "admin",
        role: "Admin"
    },
    {
        id: 2,
        username: "user@user.com",
        password: "user",
        role: "User"
    }, {
        id: 3,
        username: "test@test.com",
        password: "test",
        role: "Test"
    }
]


export const useCartContext = () => useContext(CartContext)

export const useUserContext = () => useContext(UserContext)