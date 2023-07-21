import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useState } from 'react';
import { useUserContext } from '../../services/contextServices.js';

export default function Login() {
    const { login } = useUserContext()
    const [user, setUser] = useState({})

    const handleInput = async ({ name, value }) => {
        const newUser = {}
        newUser[name] = value
        setUser({ ...user, ...newUser })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(user.email, user.password)                        
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
        </div>
    );
}