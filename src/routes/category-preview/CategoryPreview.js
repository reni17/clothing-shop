import { Link } from 'react-router-dom'
import ProductCard from '../shop/shop-card/ProductCard'
import './CategoryPreview.styles'
import { CategoryPreviewContaier, PreviewTitle, Preview} from './CategoryPreview.styles'


const CategoryPreview = ({title, products}) => {

    return(
        <CategoryPreviewContaier as='div'>
            <h2>
                <PreviewTitle as = {Link} to={title}>{title.toUpperCase()}</PreviewTitle>
            </h2>
            <Preview  as='div'>
            {
                products.filter((_, index) => index < 4)
                .map(el => (
                    <ProductCard key={el.id} product = {el}/>
                ))
            }
            </Preview>
        </CategoryPreviewContaier>
    )
}

export default CategoryPreview