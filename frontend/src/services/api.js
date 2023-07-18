import axios from "axios"

export const getByCategory = async (busqueda = "Motorola%20G6") => {
    try {
        //let result = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
        let { data } = await axios.get(`http://localhost:3000/api/products`)
        return data.product
    } catch (error) {
        throw new Error("no se puede acceder al servidor")
    }
}

export const getById = async (id) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/products/${id}`)                
        return data
    } catch (error) {
        throw new Error("Prodcuto no encontrado")
    }
}

export const getProvincias = async () => {
    try {
        const { data } = await axios.get('https://apis.datos.gob.ar/georef/api/provincias')
        const { provincias } = data
        provincias.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
        return provincias
    } catch (error) {
        throw new Error("Error de conexion con BD provicias")
    }
}

export const getMunicipios = async (proviciaId) => {
    try {
        const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${proviciaId}&campos=id,nombre&max=100`)
        const { municipios } = data
        municipios.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        });
        return municipios
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const validateUser = async (email, password) => {
    try {
        const { data } = await axios.post('http://localhost:3000/api/login', { email, password })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const getUser = async (token) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/profile/`, {
            headers: {
                "Authorization": token
            }
        })
        return data
    } catch (error) {
        return false
    }
}

export const createUser = async (newUser) => {
    try {
        const { data }= await axios.post(`http://localhost:3000/api/register/`, newUser)
        console.log(data)
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}