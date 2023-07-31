import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useCartContext, useUserContext } from '../../services/contextServices.js';

import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login, token } = useUserContext()
    const { inputCart } = useCartContext()
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleInput = async ({ name, value }) => {
        const newUser = {}
        newUser[name] = value
        setUser({ ...user, ...newUser })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { userFound, token } = await login(user.email, user.password)
            const cartId = userFound.buys[userFound.buys.length - 1]._id
            inputCart(cartId, token)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="container col-md-4 mt-5">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={user.email}
                        placeholder="Enter email"
                        name='email'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        defaultValue={user.password}
                        placeholder="Password"
                        name='password'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>
                <Button type='submit' variant='primary' >Login</Button>
            </Form>
            {error && <p className='text-danger my-2'>***{error}***</p>}
        </div>
    );
}