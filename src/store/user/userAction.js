import { createAction } from "../../utils/reducer/reducerUtils"
import { USER_ACTIONS } from "./userTypes"

export const setUser = (user) => {
  return createAction(USER_ACTIONS.SET_CURRENT_USER, user)
  }