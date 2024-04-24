import React from 'react'
import back from '../assets/back.svg'
import bagBlack from '../assets/bagBlack.svg'
import stars from '../assets/stars.svg'

function ProductDetails() {
    return (
        <div className='mt-[45px] mx-[20px]'>
            <div className='flex justify-between '>
                <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                    <img src={back} />
                </div>
                <img src={bagBlack} />
            </div>

            <div className='mt-[21px]'>
                <p className='text-[50px] text-[#1E222B] leading-[62.55px] font-light'>Thin Choise <span className=' font-extrabold'>Top Orange</span></p>
            </div>

            <div className='flex gap-[5px] mt-[15px]'>
                <img src={stars} />
                <p className='text-[#A1A1AB] font-normal text-[14px] left-5'>110 Reviews</p>
            </div>

            <div id='slider'>

            </div>

            <div className='flex gap-[14px] mt-[26px]'>
                <p className='text-[#2A4BA0] text-[16px] font-bold leading-6'>$34.70<span className='font-normal'>/KG</span></p>
                <button className='w-[84px] h-[24px] bg-[#2A4BA0] rounded-[70px] py-[4px] px-[10px] font-normal text-[12px] leading-4 text-[#FAFBFD]'>$22.04 OFF</button>
            </div>

            <div className='flex gap-[23px] mt-[30px]'>
                <button className='w-[143px] h-[56px] rounded-[20px] border-[1px] border-solid border-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#2A4BA0]'>Add To Cart</button>
                <button className='w-[169px] h-[56px] rounded-[20px] bg-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#FFFFFF]'>Buy Now</button>
            </div>

            <div className='mt-[30px] md:w-[600px]'>
                <p className='text-[#1E222B] font-normal text-[16px] leading-6'>Details</p>
                <p className='text-[#8891A5] font-normal text-[16px] leading-6 mt-[6px]'>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
            </div>

        </div>
    )
}

export default ProductDetails