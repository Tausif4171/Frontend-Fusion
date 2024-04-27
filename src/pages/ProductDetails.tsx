import React, { useMemo } from 'react'
import back from '../assets/back.svg'
import bagBlack from '../assets/bagBlack.svg'
import stars from '../assets/stars.svg'
import Product from '../interfaces/Product';
import { Link, useParams } from 'react-router-dom';
import Cart from '../components/Cart';

interface ProductDetailsProps {
    products: Product[];
}

function ProductDetails(props: ProductDetailsProps) {
    const { products } = props;
    const { id } = useParams<{ id: string }>();

    const filteredProduct = useMemo(() => {
        if (!id) {
            return null;
        }

        const product = products.find(p => p.id === parseInt(id, 10));
        if (!product) {
            return {
                id: 0,
                title: 'Product not found',
                description: '',
                price: 0,
                thumbnail: '',
                rating: 0,
            };
        }
        return product;
    }, [id, products]);

    // Return early if id is undefined
    if (!id) {
        return <div>No product ID provided</div>;
    }

    return (
        <div className='mt-[45px] mx-[20px]'>
            <div className='flex justify-between items-center'>
                <Link to='/'>
                    <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center cursor-pointer'>
                        <img src={back} />
                    </div>
                </Link>
                <Cart />
            </div>

            <div className='mt-[21px]'>
                <p className='text-[50px] text-[#1E222B] leading-[62.55px] font-light'>
                    {filteredProduct?.title} <span className=' font-extrabold'>{filteredProduct?.title}</span>
                </p>
            </div>

            <div className='flex gap-[5px] mt-[15px]'>
                <img src={stars} />
                <p className='text-[#A1A1AB] font-normal text-[14px] left-5'>
                    {filteredProduct?.rating} Reviews
                </p>
            </div>

            <div id='slider'>
                {/* Add your slider code here */}
            </div>

            <div className='flex gap-[14px] mt-[26px]'>
                <p className='text-[#2A4BA0] text-[16px] font-bold leading-6'>
                    ${filteredProduct?.price}<span className='font-normal'>/KG</span>
                </p>
                <button className='w-[84px] h-[24px] bg-[#2A4BA0] rounded-[70px] py-[4px] px-[10px] font-normal text-[12px] leading-4 text-[#FAFBFD]'>
                    ${filteredProduct?.price} OFF
                </button>
            </div>

            <div className='flex gap-[23px] mt-[30px]'>
                <button className='w-[143px] h-[56px] rounded-[20px] border-[1px] border-solid border-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#2A4BA0]'>
                    Add To Cart
                </button>
                <Link to='/cart-details'><button className='w-[169px] h-[56px] rounded-[20px] bg-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#FFFFFF]'>
                    Buy Now
                </button>
                </Link>
            </div>

            <div className='mt-[30px] md:w-[600px]'>
                <p className='text-[#1E222B] font-normal text-[16px] leading-6'>Details</p>
                <p className='text-[#8891A5] font-normal text-[#8891A5] font-normal text-[16px] leading-6 mt-[6px]'>{filteredProduct?.description}</p>
            </div>

        </div>
    )
}

export default ProductDetails