import React from 'react'
import searchIcon from '../assets/searchIcon.svg'
import arrowIcon from '../assets/arrowIcon.svg'
import Cart from './Cart'

function Header() {
    return (
        <div>
            <div className='relative w-[100%] h-auto bg-[#2A4BA0] pt-[52px] px-[20px] pb-[17px] '>
                <div className='flex justify-between items-center w-[100%]'>
                    <div>
                        <h1 className='text-[#F8F9FB] text-[22px] font-semibold leading-[30.05px] '>Hey, Rahul</h1>
                    </div>
                    <div>
                        <Cart />
                    </div>
                </div>

                <div className='mt-[35px]'>
                    <div className='flex gap-[12px] sm:w-[335px] h-[56px] rounded-[28px] bg-[#153075] py-[19px] px-[28px]'>
                        <img src={searchIcon} alt='Search Icon' />
                        <input type='text' placeholder='Search Products or store' className='w-full h-full border-none outline-none bg-[#153075] text-[#8891A5] text-[14px] font-medium leading-[19.12px]' />
                    </div>
                </div>

                <div className='sm:w-[336px] mt-[29px] flex justify-between'>
                    <div>
                        <div>
                            <p className='text-[#F8F9FB] text-[11px] font-extrabold leading-[15.03px] opacity-[50%] uppercase'>Delivery to</p>
                        </div>
                        <div className='flex gap-[10px] mt-1'>
                            <p className='text-[#F8F9FB] text-[14px] font-medium leading-[19.12px]'>Green Way 3000, Sylhet</p>
                            <img className=' cursor-pointer' src={arrowIcon} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='text-[#F8F9FB] text-[11px] font-extrabold leading-[15.03px] opacity-[50%] uppercase'>Within</p>
                        </div>
                        <div className='flex gap-[10px] mt-1'>
                            <p className='text-[#F8F9FB] text-[14px] font-medium leading-[19.12px]'>1 Hour</p>
                            <img className=' cursor-pointer' src={arrowIcon} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header