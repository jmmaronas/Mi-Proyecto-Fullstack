import { Button, Card } from 'react-bootstrap';
import Counter from '../Counter/Counter.js';



function ItemDetail({ product, count, increment, decrement, handleClickAgregar }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='h-75 object-fit-scale' src={`/images/${product.image}`} alt={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.title}
                </Card.Text>
                <h1 className='text-center my-4'>$ {product.price}</h1>
                <div className="row">
                    <div className='my-2'>
                        <Counter count={count} increment={increment} decrement={decrement} />
                    </div>
                    <div className='my-2'>
                        <Button onClick={handleClickAgregar} className='w-100' variant="success">Agregar</Button>
                        <Button href='/' className='w-100 my-2' variant="danger">Cancelar</Button>
                    </div>
                </div>
            </Card.Body>
        </Card >
    );
}

export default ItemDetail