import { Card, Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

function Item({product, handleComprar}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='h-75 object-fit-scale' src={'http://localhost:3000/'+product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.decription}
        </Card.Text>
        <h1 className='text-center my-4'>$ {product.price}</h1>
        <div className='d-flex justify-content-between'>
            <Button onClick={()=>handleComprar(product)} className='' variant="success">Comprar</Button>
            <Button as={NavLink} to={`/product/${product._id}`} className='' variant="primary">Ver Detalles</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item