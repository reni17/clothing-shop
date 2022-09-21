import {Route, Routes} from 'react-router-dom'
import './Shop.scss'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../category/Category'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import { setCategories } from '../../store/categories/categoriesAction'
import { useDispatch } from 'react-redux'
export const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async() => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
  }, [])

return(   
  <Routes>
    <Route index element = {<CategoriesPreview/>}></Route>
    <Route path=':category' element = {<Category/>}></Route>
  </Routes> 
)
}