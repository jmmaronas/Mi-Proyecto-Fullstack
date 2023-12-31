import { Button, Col, Form, Row } from 'react-bootstrap';

export default function FormLayout({ handleInput, handleSubmit, provicias, municipios, user, update }) {
    return (
        <Form onSubmit={(e) => handleSubmit(e)} className='m-auto'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Apellido y Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={user.username}
                        placeholder="Enter name"
                        name='username'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={user.email}
                        placeholder="Enter email"
                        name='email'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        defaultValue={user.password}
                        placeholder="Password"
                        name='password'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridC_Password">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        type="password"
                        defaultValue={user.confirm_password}
                        placeholder="Password"
                        name='confirm_password'
                        onInput={({ target }) => handleInput(target)}
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                    type='text'
                    defaultValue={user.address}
                    placeholder="1234 Main St"
                    name='address'
                    onInput={({ target }) => handleInput(target)}
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select
                        defaultValue={user.province}
                        name='province'
                        onChange={({ target }) => handleInput(target)}
                    >
                        {user?.province&&<option>Seleccione un provincia ...</option>}
                        {provicias.map(element => <option key={element.id} value={element.id}>{element.nombre}</option>)}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Select
                        defaultValue="Choose..."
                        name='location'
                        onChange={({ target }) => handleInput(target)}
                    >
                        {municipios && municipios.map(municipio => <option key={municipio.id}>{municipio.nombre}</option>)}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {update ?
                <Button className='w-100' variant="primary" type="submit">
                    Update
                </Button>
                :
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
            }
        </Form>
    )
}