import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Product from '../interfaces/Product';

interface ProductListProps {
    products: Product[];
}


function ProductList(props: ProductListProps) {

    return (
        <div className='mx-[20px]'>
            <p className='text-[#1E222B] font-normal text-[30px] leading-[38px]'>Recommended</p>
            <div className='mt-[12px] flex flex-wrap gap-x-[15px] gap-y-[22px]'>
                {props.products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
