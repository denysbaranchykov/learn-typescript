import {useEffect, useState} from "react";
import {IProduct} from "./models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchProducts = async () => {

        try {
            setError('');
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products?limit=6');
            setProducts(response.data);
            setLoading(false)
        } catch (e: any) {
            const error = e as AxiosError;
            setLoading(false)
            setError(error.message)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, loading, error}
}