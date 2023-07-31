import { useNavigate } from "react-router-dom"
import { useCartContext, useUserContext } from "../../services/contextServices.js"
import Item from "./Item.js"

export default function ItemList({ products }) {
    const { token } = useUserContext()
    const {addToCart } = useCartContext()
    const navigate = useNavigate()
    
    const handleComprar=(product)=>{
        addToCart(product, 1, token)
        navigate('/cart')
    }
    return (
        <div className="container">
            <h1 className="text-center my-5 p-5 fw-bold " style={{fontSize:"4rem"}}> Cursos</h1>
            <div className="gap-5 d-flex justify-content-around flex-wrap">
                {products.map(product => <Item key={product._id} product={product} handleComprar={handleComprar} />)}
            </div>
        </div>
    )
}