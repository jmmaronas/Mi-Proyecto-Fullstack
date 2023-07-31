import axios from "axios"

//axios.defaults.baseURL = 'http://192.168.2.11:3000';

export const newCart = async (product, token) => {
    try {
        const { data } = await axios.post(`/api/sales/new`, product, {
            headers: {
                Authorization: token,
            }
        })
        console.log(data._id)
        return data._id
    } catch (error) {
        throw new Error("Erro creando carrito")
    }
}

export const updateCart = async (arrayCart, cartId, token) => {
    try {
        const data = await axios.put(`/api/sales/${cartId}`, arrayCart, {
            headers: {
                Authorization: token,
            }
        })
        console.log(data)
    } catch (error) {
        throw new Error("no se pudo actualizar carrito")
    }
}

export const getCarts = async () => {

}

export const getCartById = async (cartId, token) => {
    try {
        const {data} = await axios.get(`/api/sales/${cartId}`,{
            headers: {
                Authorization: token,
            }
        })        
        return data.cart
    } catch (error) {
        throw new Error("no se encontro carrito")
    }
}