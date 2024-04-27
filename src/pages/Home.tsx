import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Discount from '../components/Discount';
import ProductList from '../components/ProductList';
import Product from '../interfaces/Product';
import BottomMenu from '../components/BottomMenu';

interface HomeProps {
    products: Product[];
}

function Home(props: HomeProps) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 641);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='relative'>
            <Header />
            <Discount />
            <ProductList products={props.products} />
            {isMobile && <BottomMenu />}
        </div>
    );
}

export default Home;
