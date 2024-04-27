import React, { useMemo } from 'react'
import back from '../assets/back.svg'
import stars from '../assets/stars.svg'
import Product from '../interfaces/Product';
import { Link, useParams } from 'react-router-dom';
import Cart from '../components/Cart';
import { Carousel } from '../components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../store/favoritesSlice';

interface ProductDetailsProps {
    products: Product[];
}

function ProductDetails(props: ProductDetailsProps) {
    const { products } = props;
    const { id } = useParams<{ id: string }>();

    const cartItems = useSelector(selectCartItems);
    const favoriteProducts = useSelector(selectFavorites);


    const dispatch = useDispatch();

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
                images: []
            };
        }
        return product;
    }, [id, products]);

    // Return early if id is undefined
    if (!id) {
        return <div>No product ID provided</div>;
    }

    // Check if the product is in favorites
    const productIsFavorite = favoriteProducts.some((favProduct: Product) => favProduct.id === filteredProduct?.id);


    const handleIconClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
        // Prevent event propagation
        event.stopPropagation();

        // Perform action based on the provided action parameter
        if (action === 'heart') {
            if (productIsFavorite) {
                dispatch(removeFromFavorites(filteredProduct));
            } else {
                dispatch(addToFavorites(filteredProduct));
            }
        } else if (action === 'plus') {
            const isInCart = cartItems.some((item: Product) => item.id === filteredProduct?.id);
            if (!isInCart) {
                // If not in cart, add the product
                dispatch(addToCart(filteredProduct));
            } else {
                // If already in cart, show a message or perform some other action
                console.log('Product is already in the cart');
            }
        }
    };

    const getRandomDiscount = () => {
        // Generate a random number between 10 and 50 for example
        return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    };

    const discount = getRandomDiscount();


    return (
        <div className='my-[45px]'>
            <div className='flex justify-between items-center mx-[20px]'>
                <Link to='/'>
                    <div className='w-[40px] h-[40px] bg-[#F8F9FB] rounded-[50%] flex justify-center items-center cursor-pointer'>
                        <img src={back} alt='' />
                    </div>
                </Link>
                <Cart />
            </div>

            <div className='mt-[21px] mx-[20px]'>
                <p className='text-[50px] text-[#1E222B] leading-[62.55px] font-light'>
                    {filteredProduct?.title.split(' ').map((word, index, array) => (
                        index === array.length - 1 ? <span className='font-extrabold' key={index}>{word}</span> : word + ' '
                    ))}
                </p>
            </div>


            <div className='flex gap-[5px] mt-[15px] mx-[20px]'>
                <img src={stars} alt='' />
                <p className='text-[#A1A1AB] font-normal text-[14px] left-5'>
                    {filteredProduct?.rating} Reviews
                </p>
            </div>

            <div className='sm:mx-[20px]'>
                <Carousel product={filteredProduct?.images} productIsFavorite={productIsFavorite} handleIconClick={handleIconClick} />
            </div>

            <div className='flex gap-[14px] mt-[26px] mx-[20px]'>
                <p className='text-[#2A4BA0] text-[16px] font-bold leading-6'>
                    ${filteredProduct?.price}
                </p>
                <button className='w-[84px] h-[24px] bg-[#2A4BA0] rounded-[70px] py-[4px] px-[10px] font-normal text-[12px] leading-4 text-[#FAFBFD]'>
                    ${discount} OFF
                </button>
            </div>

            <div className='flex gap-[23px] mt-[30px] mx-[20px]'>
                <button onClick={(e) => handleIconClick(e, 'plus')} className='w-[143px] h-[56px] rounded-[20px] border-[1px] border-solid border-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#2A4BA0]'>
                    Add To Cart
                </button>
                <Link to='/cart-details'><button className='w-[169px] h-[56px] rounded-[20px] bg-[#2A4BA0] leading-[19.12px] text-[14px] font-semibold text-[#FFFFFF]'>
                    Buy Now
                </button>
                </Link>
            </div>

            <div className='mt-[30px] md:w-[600px] mx-[20px]'>
                <p className='text-[#1E222B] font-normal text-[16px] leading-6'>Details</p>
                <p className='text-[#8891A5] font-normal text-[#8891A5] font-normal text-[16px] leading-6 mt-[6px]'>{filteredProduct?.description}</p>
            </div>

        </div>
    )
}

export default ProductDetails