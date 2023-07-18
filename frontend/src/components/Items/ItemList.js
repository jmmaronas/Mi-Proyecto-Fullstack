import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../services/services.js"
import Item from "./Item.js"

export default function ItemList({ products }) {
    const {addToCart } = useCartContext()
    const navigate = useNavigate()
    const handleComprar=(product)=>{
        addToCart(product, 1)
        navigate('/cart')
    }
    return (
        <div className="container-fluid">
            <h1 className="text-center my-5"> Productos</h1>
            <div className="gap-5 d-flex justify-content-between flex-wrap">
                {products.map(product => <Item key={product._id} product={product} handleComprar={handleComprar} />)}
            </div>
        </div>
    )
}