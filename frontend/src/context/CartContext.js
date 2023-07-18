import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const { Provider } = CartContext

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carrito")) || []);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    function isInCart(product) {
        return cart.some(e => e.id === product.id);
    }

    function addToCart(product, cantidad) {
        let arrayNuevo = cart.slice(0)
        let indice = arrayNuevo.findIndex(e => e.id === product.id);
        indice === -1 ? arrayNuevo.push({ ...product, cantidad }) : arrayNuevo[indice].cantidad += cantidad;
        setCart(arrayNuevo);
        setCantidadProductos(cantidadProductos + cantidad);
        localStorage.setItem("carrito", JSON.stringify(arrayNuevo));
    }
    function delToCart(id) {
        let carrito = cart.slice(0);
        let carritoFinal = carrito.filter(e => e.id !== id)
        let cantidadProductoEliminado = carrito.find(e => e.id === id).cantidad;
        setCart(carritoFinal);
        setCantidadProductos(cantidadProductos - cantidadProductoEliminado);
        localStorage.setItem("carrito", JSON.stringify(carritoFinal));
    }
    function clearCart() {
        setCart([]);
        setCantidadProductos(0);
        localStorage.clear();
    }


    useEffect(() => {
        let cantidaStorage = 0;
        if (localStorage.getItem("carrito")) {
            JSON.parse(localStorage.getItem("carrito")).map(e => { return cantidaStorage += e.cantidad })
        }
        setCantidadProductos(cantidaStorage);
    }, []);

    const valorDelContexto = {
        cart,
        cantidadProductos,
        addToCart,
        isInCart,
        delToCart,
        clearCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
