import { useEffect, useState } from 'react';
import { getMunicipios, getProvincias, updateUser } from '../../services/userService.js';
import { useUserContext } from '../../services/contextServices.js';
import FormLayout from './FormLayout.jsx';

export default function FormUser({ userOld, update }) {
    const { register, token } = useUserContext()
    const [user, setUser] = useState({ username: userOld?.username, email: userOld?.email, address: userOld?.address, province: userOld?.province } || {})
    const [provicias, setProvincias] = useState([])
    const [municipios, setMunicipios] = useState([])

    const handleInput = async ({ name, value }) => {
        const newUser = {}
        if (name === "province") {
            const municipios = await getMunicipios(value)
            setMunicipios(municipios)
        }
        newUser[name] = value
        setUser({ ...user, ...newUser })
        console.log(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        update ?
            updateUser(userOld.id, user, token)
            :
            register(user)
    }

    useEffect(() => {
        const cargarProvicias = async () => {
            const results = await getProvincias()
            setProvincias(results)
        }
        cargarProvicias()
    }, [])

    return (
        <div className='container'>
            <h3 className='text-center'>Formulario cliente</h3>
            <FormLayout handleInput={handleInput} handleSubmit={handleSubmit} provicias={provicias} municipios={municipios} user={user} update={update} />
        </div>
    )
}