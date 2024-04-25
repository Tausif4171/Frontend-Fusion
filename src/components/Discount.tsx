import React from 'react'
import emptyInWhite from '../assets/emptyInWhite.svg'

function Discount() {
    return (
        <div className='my-[27px] mx-[20px]'>
            <div className='flex justify-between px-[22px] items-center bg-[#F9B023] w-[269px] h-[123px] rounded-[18px]'>
                <div>
                    <img src={emptyInWhite} />
                </div>
                <div className='text-[#FFFFFF]'>
                    <p className='font-light text-[20px] leading-[27.32px]'>Get</p>
                    <p className='text-[26px] leading-[35.52px] font-extrabold'>50% OFF</p>
                    <p className='text-[13px] font-medium leading-[17.76px]'>On first 03 order</p>
                </div>
            </div>
        </div>
    )
}

export default Discount