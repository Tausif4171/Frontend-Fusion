import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Product from '../interfaces/Product'

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    console.log({ products })

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched products:', data);
                setProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='mx-[20px]'>
            <p className='text-[#1E222B] font-normal text-[30px] leading-[38px]'>Recommended</p>
            <div className='mt-[12px] flex flex-wrap gap-x-[15px] gap-y-[22px]'>
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
