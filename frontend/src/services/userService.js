import axios from "axios"

//axios.defaults.baseURL = 'http://192.168.2.11:3000';

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
        const { data } = await axios.post('/api/login', { email, password })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const getUser = async (token) => {
    try {
        const { data } = await axios.get(`/api/profile`, {
            headers: {
                "Authorization": token
            }
        })
        return data
    } catch (error) {
        return false
    }
}

export const getUsers = async (token) => {
    try {
        const { data } = await axios.get(`/api/profiles`, {
            headers: {
                "Authorization": token
            }
        })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const getUserById = async ()=>{
    return
}

export const createUser = async (newUser) => {
    try {
        const { data } = await axios.post(`/api/register/`, newUser)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


export const updateUser = async (id, newUser, token) => {
    try {
        const { data } = await axios.put(`/api/profile/update/${id}`, newUser, {
            headers: {
                "Authorization": token
            }
        })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const delUser = async (id, token) => {
    try {
        const { data } = await axios.delete(`/api/profile/delete/${id}`, {
            headers: {
                "Authorization": token
            }
        })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
