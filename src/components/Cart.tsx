import React from 'react';
import { useLocation } from 'react-router-dom';
import bag from '../assets/bag.svg';
import bagBlack from '../assets/bagBlack.svg';

function Cart() {
    const location = useLocation();

    return (
        <div className='cursor-pointer'>
            <div>
                <img src={location.pathname === '/' ? bag : bagBlack} alt="Cart" />
            </div>
            <div className={`absolute top-9 right-2 w-6 h-6 border-[2px] bg-[#F9B023]  border-solid ${location.pathname === '/' ? 'border-[#2A4BA0]' : 'border-white'} rounded-[50%] text-[#FFFFFF] font-semibold text-[14px] leading-[19.12px] flex justify-center items-center bg-${location.pathname === '/' ? 'blue' : 'transparent'}`}>
                3
            </div>
        </div>
    );
}

export default Cart;
