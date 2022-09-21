import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector'
import ProductCard from '../shop/shop-card/ProductCard'
import './Category.scss'

const Category = () => {
const {category} = useParams()
const categoriesMap = useSelector(selectCategoriesMap)
const [products, setProducts] = useState(categoriesMap[category])



useEffect(()=> {
    setProducts(categoriesMap[category])
}, [category, categoriesMap])
return(
    <>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {products && products.map(product => <ProductCard key={product.id} product = {product}/>)}
    </div>
    </>
)
}
export default Category