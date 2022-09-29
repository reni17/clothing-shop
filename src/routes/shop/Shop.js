import {Route, Routes} from 'react-router-dom'
import './Shop.scss'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../category/Category'
import { useEffect } from 'react'
import { fetchCategoriesAsync, fetchCategoriesStart } from '../../store/categories/categoriesAction'
import { useDispatch } from 'react-redux'
export const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchCategoriesStart())
  }, [])

return(   
  <Routes>
    <Route index element = {<CategoriesPreview/>}></Route>
    <Route path=':category' element = {<Category/>}></Route>
  </Routes> 
)
}