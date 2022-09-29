import { createAction } from "../../utils/reducer/reducerUtils"
import { CATEGORIES_ACTIONS } from "./categoriesTypes" 
import { getCategoriesAndDocuments } from "../../utils/firebase"
export const setCategories = (categories) => {
  return createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories)
  }

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START) 

export const fetchCategoriesSuccess = (categoriesArr) => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS, categoriesArr)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, error)

//THUNK METHOD
// export const fetchCategoriesAsync = () => async(dispatch) => {
//   dispatch(fetchCategoriesStart())
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories')
//     dispatch(fetchCategoriesSuccess(categoriesArray))
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error))
//   }

// }