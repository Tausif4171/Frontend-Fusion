import React from 'react'
import emptyImage from '../assets/emptyImage.svg'
import back from '../assets/back.svg'
import plusDark from '../assets/plusDark.svg'
import minusDark from '../assets/minusDark.svg'
import { Link } from 'react-router-dom'

function CartDetails() {
    return (
        <div className='mt-[45px] mx-[24px]'>
            <div className='flex items-center gap-[21px] mb-[41px]'>
                <Link to='/'>
                    <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                        <img src={back} />
                    </div>
                </Link>
                <p className='text-[#1E222B] font-normal text-[16px] leading-6'>Shopping Cart (5)</p>
            </div>

            <div className='sm:w-[500px]'>
                <div>
                    <div className='flex justify-between items-center border-b-[0.5px] border-solid border-[#EBEBFB] pt-5 pb-4 px-[6px]'>
                        <div className='flex items-center gap-[26px]'>
                            <img className='w-[30px] h-[30px]' src={emptyImage} />
                            <div>
                                <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px]'>Bananas</p>
                                <p className='text-[#1E222B] font-normal text-[14px] leading-[20px] mt-[3px]'>$7.90</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                                <img src={minusDark} />
                            </div>
                            <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px]'>1</p>
                            <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                                <img src={plusDark} />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-b-[0.5px] border-solid border-[#EBEBFB] pt-5 pb-4 px-[6px]'>
                        <div className='flex items-center gap-[26px]'>
                            <img className='w-[30px] h-[30px]' src={emptyImage} />
                            <div>
                                <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px]'>Bananas</p>
                                <p className='text-[#1E222B] font-normal text-[14px] leading-[20px] mt-[3px]'>$7.90</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                                <img src={minusDark} />
                            </div>
                            <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px]'>1</p>
                            <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                                <img src={plusDark} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[10px]'>
                    <p className='text-[#2A4BA0] font-medium text-[12px] leading-4'>Edit</p>
                </div>
            </div>



            <div className='bg-[#F8F9FB] mt-[62px] pt-[17px] pb-[69px] sm:w-[359px] rounded-[30px]'>
                <div className=' px-[36px]'>
                    <div className='flex justify-between'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Subtotal</p>
                        <p className='text-[#1E222B] font-medium text-[14px] leading-[20px]'>$35.96</p>
                    </div>
                    <div className='flex justify-between mt-[13px]'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Delivery</p>
                        <p className='text-[#1E222B] font-medium text-[14px] leading-[20px]'>$3.96</p>
                    </div>
                    <div className='flex justify-between mt-[16px]'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Total</p>
                        <p className='text-[#1E222B] font-semibold text-[14px] leading-[20px]'>$35.96</p>
                    </div>
                </div>
                <div className='pt-[35px] px-[16px]'>
                    <button className='w-[100%] h-[56px] rounded-[20px] bg-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#FFFFFF]'>Proceed To checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartDetails