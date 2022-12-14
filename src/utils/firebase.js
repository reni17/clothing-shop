import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    // FacebookAuthProvider
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

  export const addCollectionAndDocuments = async (collectionName, objectsToAdd) => {
    const collectionRef = collection(db, collectionName)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    })

    await batch.commit()
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
  }

  export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth){
        return
    }

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef) 

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
return userSnapshot
  }


  export const createUserWithEmailAndPass = async (email, password) => {
    if(!email || !password){
        return
    }
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  
  export const signInUserWithEmailAndPass = async (email, password) => {
    if(!email || !password){
        return
    }
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const logOut = async () => {
    return await signOut(auth)
  }

  export const onAuthStateListener = async(callback) => onAuthStateChanged(auth, callback)

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
         (userAuth) => {
          unsubscribe()
          resolve(userAuth)
        }, 
        reject
      )
    })
  }