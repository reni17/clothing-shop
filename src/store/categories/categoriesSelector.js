import {createSelector} from 'reselect'
const selectCategorieReducer = state => state.categories

const selectCategories = createSelector(
  [selectCategorieReducer], 
  (categories) => categories.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories => categories
.reduce((acc, category) => {
    const {title, items} = category
    acc[title.toLowerCase()] = items
    return acc
  }, {}))

export const selectCategoriesIsLoading = createSelector(
  [selectCategories],
  (categories) => categories.isLoading
)