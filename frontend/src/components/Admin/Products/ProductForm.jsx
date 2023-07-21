import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { newProduct, updateProduct } from '../../../services/productServices';
import { useUserContext } from '../../../services/contextServices'

export default function ProductForm({ productOld, update }) {
    const [product, setProduct] = useState(productOld || {})
    const { token } = useUserContext()

    const handleInput = async ({ name, value }) => {
        setProduct(prev => { return { ...prev, [name]: value } })
    }

    const handleInputFiles = ({ name, files }) => {
        setProduct(prev => { return { ...prev, [name]: files[0] } })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData()
        for (let key in product) {
            form.append(key, product[key])
        }
        update ?
            updateProduct(productOld._id, form, token)
            :
            newProduct(form, token)
    }

    return (
        <div className="container">
            <h1 className='my-5 text-center'>Detalles del Producto</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Form.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="PC Gamer xxx"
                        defaultValue={product.title}
                        name='title'
                        onChange={({ target }) => handleInput(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlInput2">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="$"
                        defaultValue={product.price}
                        name='price'
                        onChange={({ target }) => handleInput(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        defaultValue={product.description}
                        name='description'
                        onChange={({ target }) => handleInput(target)}
                    />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Ingrese archivo de la imagen</Form.Label>
                    <Form.Control
                        type="file"
                        defaultValue={product.file}
                        name='image'
                        onChange={({ target }) => handleInputFiles(target)}
                    />

                </Form.Group>
                {
                    update ?
                        <Button type='submit' variant='primary'>Actualizar</Button>
                        :
                        <Button type='submit' variant='success'>Finalizar</Button>
                }
            </Form>
        </div>
    );
}