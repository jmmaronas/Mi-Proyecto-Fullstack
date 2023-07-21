import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../services/contextServices.js";
import { getByCategory, getProductById } from "../../services/productServices.js";
import { getUsers } from "../../services/userService.js";
import ItemList from "./ItemList.js";
import ItemDetailList from "./ItemDetailList.js";
import ProductAdminList from "../Admin/Products/ProdcutAdminList.jsx";
import UserList from "../Admin/Users/UserList.jsx";
import ProductForm from "../Admin/Products/ProductForm.jsx";

export default function ItemListConatiner() {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false)
    const { category, service, productId } = useParams()
    const { token, admin } = useUserContext()
    useEffect(() => {
        async function startFetching() {
            setIsLoaded(false)
            let data
            try {
                if (productId) {
                    data = await getProductById(productId)
                } else if (category) {
                    data = await getByCategory(category)
                } else if (service === "users") {
                    data = await getUsers(token)
                } else {
                    data = await getByCategory()
                }
                setProducts(data)
                setIsLoaded(true)
            } catch (error) {
                setError(error.message)
            }
        }

        startFetching()
        return () => {
            setIsLoaded(false)
        }
    }, [productId, service, category, token]);

    if (!isLoaded)return <h1>Cargando...</h1>

    if (error) return <h1>error:{error}</h1>

    if (productId) {
        if (admin) return <ProductForm productOld={products} update={true} />
        return <ItemDetailList product={products} />
    }
    if (service === "products") return <ProductAdminList products={products} />

    if (service === "users") return <h1><UserList users={products} /></h1>

    if (Array.isArray(products))return <ItemList products={products} />
}