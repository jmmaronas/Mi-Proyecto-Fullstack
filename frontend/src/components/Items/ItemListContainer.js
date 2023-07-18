import { useState, useEffect } from "react";
import { getByCategory, getById } from "../../services/api.js";
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";
import ItemDetailList from "./ItemDetailList.js";

export default function ItemListConatiner() {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false)
    const { busqueda, productId } = useParams()
    console.log(busqueda,productId)
    useEffect(() => {
        async function startFetching() {
            setIsLoaded(false)
            let data
            try {
                if (productId) {
                    data = await getById(productId)
                    console.log(productId)
                } else {
                    data = await getByCategory()
                    console.log(data)
                }
                setProducts(data);
            } catch (error) {
                setError(error.message)
            }
            setIsLoaded(true)
        }
        startFetching()
    }, [ busqueda, productId]);

    if (!isLoaded) {
        return <h1>Cargando...</h1>
    }
    if (error) {
        return <h1>error:{error}</h1>
    }
    if (productId) {
        return <ItemDetailList product={products} />
    }
    return <ItemList products={products} />
}