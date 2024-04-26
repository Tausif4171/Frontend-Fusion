import React from 'react'
import favouriteIconMenu from '../assets/favouriteIconMenu.svg'
import categoryIconMenu from '../assets/categoryIconMenu.svg'
import homeIconMenu from '../assets/homeIconMenu.svg'
import moreIconMenu from '../assets/moreIconMenu.svg'

function BottomMenu() {
    return (
        <div>
            <div className=' flex gap-x-[46px] pt-4 pb-[31px] pl-[41px] pr-[42px] w-[375px] h-[89px] bg-[#F8F7FB] rounded-[30px]'>
                <div className='flex flex-col items-center'>
                    <img src={homeIconMenu} />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Home</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={categoryIconMenu} />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Categories</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={favouriteIconMenu} />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>Favourite</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={moreIconMenu} />
                    <p className=' font-normal text-[12px] text-[#8891A5] leading-[16.39px]'>More</p>
                </div>
            </div>
        </div>
    )
}

export default BottomMenu