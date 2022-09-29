import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { selectCategoriesIsLoading } from '../../store/categories/categoriesSelector'
import ProductCard from '../shop/shop-card/ProductCard'
import Spinner from '../spinner/Spinner'
import './CategoryPreview.styles'
import { CategoryPreviewContaier, PreviewTitle, Preview} from './CategoryPreview.styles'


const CategoryPreview = ({title, products}) => {

    const isLoading = useSelector(selectCategoriesIsLoading)
    return(
        <CategoryPreviewContaier as='div'>
            <h2>
                <PreviewTitle as = {Link} to={title}>{title.toUpperCase()}</PreviewTitle>
            </h2>
            {isLoading ?
            <Spinner/> :
            <Preview  as='div'>
            {
                products.filter((_, index) => index < 4)
                .map(el => (
                    <ProductCard key={el.id} product = {el}/>
                ))
            }
            </Preview>
            }
        </CategoryPreviewContaier>
    )
}

export default CategoryPreview