import { takeLatest, put, call, all, take } from "redux-saga/effects";
import { USER_ACTIONS } from "./userTypes";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from "./userAction";
import { getCurrentUser, createUserDocFromAuth, signInWithGooglePopup, signInUserWithEmailAndPass, createUserWithEmailAndPass, logOut } from "../../utils/firebase";

 
export function* signOut () {
    try {
        yield call(logOut)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailed(error))
    }
}

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
try {
    const userSnapshot = yield call(createUserDocFromAuth, userAuth, additionalInfo)
    yield put(signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id}))
} catch (error) {
    yield put(signInFailed(error))
}
}

export function* signInWithEmail ({payload: {email, password}}) {
    try {
        const {user} = yield call(signInUserWithEmailAndPass, email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }

}

export function* isUserAuthenticated () {

    try {
        const userAuth = yield call(getCurrentUser) 
        if(!userAuth) return
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInwithGoogle () {
try {
  const {user} = yield call(signInWithGooglePopup)
  yield call(getSnapshotFromUserAuth, user)

} catch (error) {
    yield put(signInFailed(error))
}
}

export function* onGoogleSignInStart () {
    yield takeLatest(USER_ACTIONS.GOOGLE_SIGN_IN_START, signInwithGoogle)
}

export function* onCheckUserSession () {
    yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart () {
    yield takeLatest(USER_ACTIONS.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* signUp({payload: {email, password, displayName}}) {
try {
  const {user} = yield call(createUserWithEmailAndPass, email, password)
  yield put(signUpSuccess(user, {displayName: displayName}))
} catch (error) {
  yield put(signUpFailed(error))
}
}
 
export function* onSignUpStart () {
    yield takeLatest(USER_ACTIONS.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp ({payload: {user, additionalInfo}}) {
yield call(getSnapshotFromUserAuth, user, additionalInfo)
}

export function* onSignUpSuccess () {
    yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart () {
    yield takeLatest(USER_ACTIONS.SIGN_OUT_START, signOut)
}

export function* userSagas () {
yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpSuccess), call(onSignUpStart), call(onSignOutStart)])
}

