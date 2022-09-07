import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase"
const SignIn = () => {
    const loggingGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocFromAuth(user);
    }
    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={loggingGoogleUser}>Sign in with Google</button>
        </div>
    )
}
export default SignIn