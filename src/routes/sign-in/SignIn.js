import './SignIn.scss'
import SignUpForm from "../sign-up/SIgnUp-form/SignUp-form"
import SignInForm from "./sign-in-form/SignInForm"
const SignIn = () => {

   
    return(
        <div className="auth-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default SignIn