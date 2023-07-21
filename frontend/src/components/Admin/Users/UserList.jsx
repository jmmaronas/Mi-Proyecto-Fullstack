import { Table } from 'react-bootstrap'
import User from './User'
import { useUserContext } from '../../../services/contextServices'
import { useState } from 'react'
import { delUser } from '../../../services/userService'

export default function UserList({ users }) {
    const [usersList, setUsers] = useState(users)
    const { token } = useUserContext()

    const onDelete = (id) => {
        setUsers(prev => prev.filter(item => item._id !== id))
        delUser(id, token)
    }

    return (
        <div className='container-fluid col-11'>
            <h2 className='text-center my-5'>Lista de Usuarios</h2>
            <Table responsive="sm">
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map(user => <User key={user._id} user={user}  onDelete={onDelete} />)}
                </tbody>
            </Table>
        </div>
    )
}