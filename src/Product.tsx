import React, {useState} from 'react';
import {IProduct} from "./models";
import {products} from "./products";

interface ProductProps {
    product: IProduct
}

function Product({product}: ProductProps) {

    const [details, setDetails] = useState(false);

    return (
        <div>
            <img src={product.image}
                 style={{width: 100}}
            />
            <p>
                {product.title}
            </p>
            <p>
                {product.price}
            </p>
            <button onClick={() => {
                setDetails(prev => !prev)
            }}>
                {details ? 'Hide details' : 'Show Details'}
            </button>
            <br/>
            <br/>
            { details&&
                <div>
                    {product.description}
                    <p style={{fontWeight: 'bold'}}>{product.rating.rate}</p>
                </div>
            }
        </div>
    )
}

export default Product;