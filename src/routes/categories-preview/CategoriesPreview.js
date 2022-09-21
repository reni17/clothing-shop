import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector'
import CategoryPreview from '../category-preview/CategoryPreview'
import './CategoriesPreview.scss'
const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)

return(
  <>
      {Object.keys(categoriesMap).map(title => {
            return  <CategoryPreview key={title} title = {title} products = {categoriesMap[title]}/>
            })
        }
  </>

)
}

export default CategoriesPreview