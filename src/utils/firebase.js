import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


  export const db = getFirestore()
  export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef) 
    // console.log(userSnapshot.exist());
  }
