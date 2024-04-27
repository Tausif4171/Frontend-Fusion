import React from 'react';
import emptyImage from '../assets/emptyImage.svg';
import plus from '../assets/plus.svg';
import heart from '../assets/heart.svg';
import heartFilled from '../assets/heartFilled.svg';
import { useNavigate } from 'react-router-dom';
import Product from '../interfaces/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../store/favoritesSlice';

interface ProductItemProps {
    product: Product;
}

function ProductItem(props: ProductItemProps) {
    const { product } = props;
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const favoriteProducts = useSelector(selectFavorites);
    // Check if the product is in favorites
    const productIsFavorite = favoriteProducts.some((favProduct: Product) => favProduct.id === product.id);

    const handleClick = () => {
        navigate(`/product-details/${product.id}`);
    };

    const dispatch = useDispatch();

    const handleIconClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, action: string) => {
        // Prevent event propagation
        event.stopPropagation();

        // Perform action based on the provided action parameter
        if (action === 'heart') {
            if (productIsFavorite) {
                dispatch(removeFromFavorites(product));
            } else {
                dispatch(addToFavorites(product));
            }
        } else if (action === 'plus') {
            const isInCart = cartItems.some((item: Product) => item.id === product.id);
            if (!isInCart) {
                // If not in cart, add the product
                dispatch(addToCart(product));
            } else {
                // If already in cart, show a message or perform some other action
                console.log('Product is already in the cart');
            }
        }
    };



    return (
        <div className='bg-[#F8F9FB] py-5 px-[17px] cursor-pointer w-[160px] h-[194px] rounded-xl relative' onClick={handleClick}>
            <div className='absolute top-[13px] left-[13px] cursor-pointer' onClick={(e) => handleIconClick(e, 'heart')}>
                <img src={productIsFavorite ? heartFilled : heart} alt="Favorite" />
            </div>

            <div className='flex justify-center'>
                <img className='w-[68px] h-[68px] object-cover' src={product.thumbnail || emptyImage} alt="Product" />
            </div>
            <div className='flex justify-between mt-[56px]'>
                <div>
                    <p className='text-[#1E222B] font-semibold text-[14px] leading-5'>${product.price}</p>
                    <p className='text-[#616A7D] font-normal text-[12px] leading-4 w-[102px] truncate'>{product.title}</p>
                </div>
                <div className='bg-[#2A4BA0] w-6 h-6 flex justify-center items-center rounded-[50%] cursor-pointer ' onClick={(e) => handleIconClick(e, 'plus')}>
                    <img src={plus} alt="Add to Cart" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;