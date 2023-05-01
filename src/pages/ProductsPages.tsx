import React from 'react';
import {useProducts} from "../hooks";
import Loading from "../Loading";
import Product from "../Product";
import MyTestComponent from "../MyTestComponent";
import CreateProduct from "../CreateProduct";

const ProductsPages = () => {
    const {products, loading, error} = useProducts();

    return (
        <div className="App">
            {
                loading && <Loading image='https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif' />

            }
            {products.map(products => <Product
                product={products}
                key={products.id}/>)}
            {error&& <p>{error}</p>}
            <MyTestComponent message='some text is here' id={12}/>

            <CreateProduct />


        </div>
    );
};

export default ProductsPages;