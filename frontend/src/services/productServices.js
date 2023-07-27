import axios from "axios"

//axios.defaults.baseURL = 'http://192.168.2.11:3000';

export const getByCategory = async (busqueda = "Motorola%20G6") => {
    try {
        let { data } = await axios.get(`/api/products`)
        return data.product
    } catch (error) {
        throw new Error("no se puede acceder al servidor")
    }
}

export const getProductById = async (id) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`)
        return data
    } catch (error) {
        throw new Error("Prodcuto no encontrado")
    }
}

export const newProduct = async (product, token) => {
    console.log(product)
    try {
        const { data } = await  axios.post(`/api/products/create`, product, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token,
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const delProduct = async (id, token) => {
    try {
        const { data } = axios.delete(`/api/products/delete/${id}`, {
            headers: {
                Authorization: token                
            }   
        })
        return data         
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (id, product, token) => {
    try {
        const { data } = axios.put(`/api/products/update/${id}`, product, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token,
            }  
        })
        return data         
    } catch (error) {
        console.log(error)
    }
}