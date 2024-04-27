import React, { useState } from "react";
import heart from '../assets/heart.svg'
import heartFilled from '../assets/heartFilled.svg';

interface CarouselProps {
    product: any;
    productIsFavorite: boolean;
    handleIconClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => void;
}

export const Carousel = ({ product, productIsFavorite, handleIconClick }: CarouselProps) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === product.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? product.length - 1 : slide - 1);
    };

    return (
        <div className="carousel mt-[15px] mb-[26px]">
            <p onClick={prevSlide} className="arrow arrow-left"></p>
            {product.map((item: string, idx: number) => {
                return (
                    <img
                        src={item}
                        alt={item}
                        key={idx}
                        className={slide === idx ? "slide object-fill" : "slide slide-hidden"}
                    />
                );
            })}
            <p
                onClick={nextSlide}
                className="arrow arrow-right"
            ></p>

            <button onClick={(e) => handleIconClick(e, 'heart')} className="absolute top-[14px] right-[35px] w-[58px] h-[58px] bg-[#FFFFFF] rounded-[20px] flex justify-center items-center">
                <img className="w-[19px] h-[18px]" src={productIsFavorite ? heartFilled : heart} alt="Favorite" />
            </button>

            <span className="indicators">
                {product.map((_: string, idx: number) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div >
    );
};