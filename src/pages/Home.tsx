import React from 'react'
import Header from '../components/Header'
import Discount from '../components/Discount'
import ProductList from '../components/ProductList'

function Home() {
    return (
        <div>
            <Header />
            <Discount />
            <ProductList />
        </div>
    )
}

export default Home