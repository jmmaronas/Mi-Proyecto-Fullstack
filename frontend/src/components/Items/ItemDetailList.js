import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { useCartContext } from '../../services/services.js'


export default function ItemDetailList({ product }) {
    const [count, setCount] = useState(1)
    const {addToCart, cart, isInCart } = useCartContext()
    const increment = () => {
        if (count < 10) setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) setCount(count - 1)
    }

    const handleClickAgregar = () => {
        addToCart(product, count)
        console.log(cart)
    }

    useEffect(()=>{
        if(isInCart(product)) {
            const productInCart = cart.find(prod=>prod.id===product.id)
            setCount(productInCart.cantidad)
        }
    },[isInCart, product, cart])

    return(
        <div className='d-flex justify-content-center m-5'>
            <ItemDetail increment={increment} decrement={decrement}  handleClickAgregar={handleClickAgregar} count={count}  product={product}/>
        </div>
    )
}