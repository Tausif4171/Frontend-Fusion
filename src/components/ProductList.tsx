import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
    return (
        <div className='mx-[20px]'>
            <p className='text-[#1E222B] font-normal text-[30px] leading-[38px]'>Recommended</p>
            <div className='mt-[12px] flex flex-wrap gap-x-[15px] gap-y-[22px]'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default ProductList