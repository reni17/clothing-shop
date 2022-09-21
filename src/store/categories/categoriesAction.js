import { createAction } from "../../utils/reducer/reducerUtils"
import { CATEGORIES_ACTIONS } from "./categoriesTypes" 

export const setCategories = (categories) => {
  return createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories)
  }