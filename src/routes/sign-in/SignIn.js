import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from "../../utils/firebase"
import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "./SIgnUp-form/SignUp-form"
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocFromAuth(user);
    }

    useEffect(() => {
        async function getResult() { 
            const res = await getRedirectResult(auth)
            if(res) {
            const userDocRef = await createUserDocFromAuth(res.user)
            }
        }
       getResult()
    }, [])
   
    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn