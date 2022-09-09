import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from './shop-card/ProductCard'
import './Shop.scss'
export const Shop = () => {

    const {products} = useContext(ProductContext)
return(
    <div className='products-container'>
        {products.map((product) => (
            <ProductCard key = {product.id} product={product}>
            </ProductCard>
        ))}

    </div>
)
}