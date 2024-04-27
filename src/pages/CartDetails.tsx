import React from 'react';
import emptyImage from '../assets/emptyImage.svg';
import back from '../assets/back.svg';
import plusDark from '../assets/plusDark.svg';
import minusDark from '../assets/minusDark.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import Product from '../interfaces/Product';

function CartDetails() {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity({ id: productId }));
    };

    const handleDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity({ id: productId }));
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((total: number, item: Product) => total + (item.price * item.quantity), 0);

    // Calculate delivery fee
    const deliveryFee = 3.96; // Assuming fixed delivery fee

    // Calculate total amount
    const totalAmount = subtotal + deliveryFee;

    return (
        <div className='mt-[45px]'>
            <div className='flex items-center gap-[21px] mb-[41px] mx-[24px]'>
                <Link to='/'>
                    <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center'>
                        <img src={back} alt='' />
                    </div>
                </Link>
                <p className='text-[#1E222B] font-normal text-[16px] leading-6'>Shopping Cart (5)</p>
            </div>

            <div className='sm:w-[500px] mx-[24px]'>
                {cartItems.length === 0 ? (
                    <p className="text-[#1E222B] font-medium text-[14px] leading-[19.12px]">Your cart is empty. 🛒</p>
                ) : (
                    <div>
                        {cartItems.map((item: Product) => (
                            <div key={item.id}>
                                <div className='flex flex-wrap gap-4 justify-between items-center border-b-[0.5px] border-solid border-[#EBEBFB] pt-5 pb-4 px-[6px]'>
                                    <div className='flex items-center gap-[26px]'>
                                        <img className='w-[30px] h-[30px]' src={item.thumbnail || emptyImage} alt="Product" />

                                        <div>
                                            <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px]'>{item.title}</p>
                                            <p className='text-[#1E222B] font-normal text-[14px] leading-[20px] mt-[3px]'>${item.price}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center w-[110px]'>
                                        <div className='w-[40px] h-[40px] cursor-pointer bg-[#F8F9FB] rounded-[50%] flex justify-center items-center' onClick={() => handleDecreaseQuantity(item.id)}>
                                            <img src={minusDark} alt="Decrease Quantity" />
                                        </div>
                                        <p className='text-[#1E222B] font-medium text-[14px] leading-[19.12px] w-[30px] text-center'>{item.quantity}</p>
                                        <div className='w-[40px] h-[40px] cursor-pointer bg-[#F8F9FB] rounded-[50%] flex justify-center items-center' onClick={() => handleIncreaseQuantity(item.id)}>
                                            <img src={plusDark} alt="Increase Quantity" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                )}
                {cartItems.length === 0 ? "" : (
                <div className='flex justify-end mt-[10px]'>
                    <p className='text-[#2A4BA0] font-medium text-[12px] leading-4'>Edit</p>
                    </div>)}
            </div>


            <div className='bg-[#F8F9FB] mt-[62px] mx-[8px] sm:mx-[24px] pt-[17px] pb-[69px] sm:w-[359px] rounded-[30px]'>
                <div className='px-[36px]'>
                    <div className='flex justify-between flex-wrap gap-2'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Subtotal</p>
                        <p className='text-[#1E222B] font-medium text-[14px] leading-[20px]'>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mt-[13px]'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Delivery</p>
                        <p className='text-[#1E222B] font-medium text-[14px] leading-[20px]'>${deliveryFee.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between flex-wrap gap-2 mt-[16px]'>
                        <p className='text-[#616A7D] font-normal text-[14px] leading-[20px]'>Total</p>
                        <p className='text-[#1E222B] font-semibold text-[14px] leading-[20px]'>${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
                <div className='pt-[35px] px-[16px]'>
                    <button className='w-[100%] h-[56px] rounded-[20px] bg-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#FFFFFF]'>Proceed To checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartDetails;
