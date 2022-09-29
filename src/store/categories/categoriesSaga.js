import { takeLatest, call, all, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categoriesAction";
import { CATEGORIES_ACTIONS } from "./categoriesTypes";

export function* fetchCategoriesAsync () {

    try {
    const categoriesArray = yield call(getCategoriesAndDocuments,'categories')
    yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
   
}

export function* onFetchCategories () {
   yield takeLatest(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga () {
    yield all([call(onFetchCategories)])
}