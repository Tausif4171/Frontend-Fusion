import React from 'react'
import Header from '../components/Header'
import Discount from '../components/Discount'
import ProductList from '../components/ProductList'
import Product from '../interfaces/Product';

interface HomeProps {
    products: Product[];
}

function Home(props: HomeProps) {
    return (
        <div>
            <Header />
            <Discount />
            <ProductList products={props.products} />
        </div>
    )
}

export default Home