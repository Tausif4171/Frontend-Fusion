import React from 'react'
import favouriteIconMenu from '../assets/favouriteIconMenu.svg'
import categoryIconMenu from '../assets/categoryIconMenu.svg'
import homeIconMenu from '../assets/homeIconMenu.svg'
import moreIconMenu from '../assets/moreIconMenu.svg'

function BottomMenu() {
    return (

        <div className=' absolute bottom-0 flex justify-between pt-4 pb-[31px] px-[42px] w-[100%] h-[89px] bg-[#F8F7FB] rounded-[30px] shadow-md'>
                <div className='flex flex-col items-center cursor-pointer'>
                <img src={homeIconMenu} alt='' />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Home</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                <img src={categoryIconMenu} alt='' />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Categories</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                <img src={favouriteIconMenu} alt='' />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Favourite</p>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                <img src={moreIconMenu} alt='' />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>More</p>
                </div>
            </div>

    )
}

export default BottomMenu