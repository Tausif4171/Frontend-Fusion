import React from 'react';
import emptyImage from '../assets/emptyImage.svg';
import plus from '../assets/plus.svg';
import heart from '../assets/heart.svg';
import heartFilled from '../assets/heartFilled.svg';
import Product from '../interfaces/Product';

interface ProductItemProps {
    product: Product;
}

function ProductItem(props: ProductItemProps) {
    const { product } = props;

    return (
        <div className='bg-[#F8F9FB] py-5 px-[17px] w-[160px] h-[194px] rounded-xl relative'>
            <div className='absolute top-[13px] left-[13px]'>
                <img src={heart} alt="Favorite" />
            </div>
            <div className='flex justify-center'>
                <img className='w-[68px] h-[68px]' src={product.thumbnail || emptyImage} alt="Product" />
            </div>
            <div className='flex justify-between mt-[56px]'>
                <div>
                    <p className='text-[#1E222B] font-semibold text-[14px] leading-5'>${product.price}</p>
                    <p className='text-[#616A7D] font-normal text-[12px] leading-4'>{product.title}</p>
                </div>
                <div className='bg-[#2A4BA0] w-6 h-6 flex justify-center items-center rounded-[50%] '>
                    <img src={plus} alt="Add to Cart" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
