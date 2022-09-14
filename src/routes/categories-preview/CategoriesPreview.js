import { useContext, useState } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import CategoryPreview from '../category-preview/CategoryPreview'
import './CategoriesPreview.scss'
const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

return(
  <>
      {Object.keys(categoriesMap).map(title => {
            return    <CategoryPreview key={title} title = {title} products = {categoriesMap[title]}/>

            })
        }
  </>

)
}

export default CategoriesPreview