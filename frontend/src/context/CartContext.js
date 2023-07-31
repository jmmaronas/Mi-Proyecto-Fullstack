import { createContext, useState, useEffect } from 'react'

import Swal from 'sweetalert2';
import { getCartById, newCart, updateCart } from '../services/cartServices.js';
import { useUserContext } from '../services/contextServices.js';


export const CartContext = createContext()

const { Provider } = CartContext

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")) || []);
    const [cartId, setCartId] = useState(JSON.parse(localStorage.getItem("carritoId")) ||null)
    const [cantidadProductos, setCantidadProductos] = useState(0);

    const { token } = useUserContext()

    const createCart = async (product, token) => {
        return await newCart(product, token)
    }

    const addToCart = async (product, cantidad) => {
        if (!cartId) setCartId(await createCart(cart, token))
        const cartCopy = cart.slice(0)
        if (isInCart(product)) {
            cartCopy.find(prod => prod.id === product.id).cantidad += cantidad
        } else {
            cartCopy.push({ ...product, cantidad })
        }
        if(cartId)updateCart(cartCopy, cartId, token)
        setCart(cartCopy)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${product.title} agregado`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    const inputCart=async (cartId, token)=>{
        setCartId(cartId)
        const userCart = await getCartById(cartId, token)
        setCart(userCart)
    }

    const delToCart = (id) => {
        console.log(id)
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `Desae eliminar el producto ${cart.find(e => e._id === id).title}`,
            showConfirmButton: true,
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                let cartCopy= cart.splice(0).filter(prod => prod._id !== id)
                setCart(cartCopy)
                updateCart(cartCopy, cartId, token)
            }
        })
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("carrito");
    }

    const isInCart = (product) => {
        return cart.some(e => e._id === product._id);
    }

    useEffect(() => {
        setCantidadProductos(cart.reduce((acc, prod) => acc += prod.cantidad, 0));
        localStorage.setItem("carrito", JSON.stringify(cart))
        localStorage.setItem("carritoId", JSON.stringify(cartId))
    }, [cart]);

    const valorDelContexto = {
        cart,
        cantidadProductos,
        addToCart,
        isInCart,
        delToCart,
        clearCart, 
        inputCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
