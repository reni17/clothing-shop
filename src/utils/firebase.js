import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    // FacebookAuthProvider
    createUserWithEmailAndPassword
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBc_HYMdlFlss3OgqTCRXE0P23mfQ8E6Fw",
    authDomain: "clothing-shop-ed615.firebaseapp.com",
    projectId: "clothing-shop-ed615",
    storageBucket: "clothing-shop-ed615.appspot.com",
    messagingSenderId: "129878976611",
    appId: "1:129878976611:web:90182ead60f0c212597056"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googlePorvider = new GoogleAuthProvider()
//   const fbProvider = new FacebookAuthProvider()

  googlePorvider.setCustomParameters({
    prompt: "select_account"
  })


  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googlePorvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googlePorvider)

  export const db = getFirestore()
  export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth){
        return
    }

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef) 
    // console.log(userSnapshot.exist());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()


        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        } catch (error) {
            console.log('Login error:', error.message);
        }
    }
return userDocRef
  }


  export const createUserWithEmailAndPass = async (email, password) => {
    if(!email || !password){
        return
    }
    return await createUserWithEmailAndPassword(auth, email, password)
  }