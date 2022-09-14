import {Route, Routes} from 'react-router-dom'
import './Shop.scss'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../category/Category'
export const Shop = () => {

return(   
  <Routes>
    <Route index element = {<CategoriesPreview/>}></Route>
    <Route path=':category' element = {<Category/>}></Route>
  </Routes> 
)
}