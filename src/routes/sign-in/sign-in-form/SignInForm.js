import { useState, useEffect } from "react"
import Button from "../../sign-up/SignUp-buttons/Button"
import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect, signInUserWithEmailAndPass } from "../../../utils/firebase"
import { getRedirectResult } from "firebase/auth"
import SignUpInput from "../../sign-up/SignUp-inputs/SignUpInputs"
import './SignInForm.scss'


const SignInForm = () => {

    const logGoogleUser = async () => {
        await signInWithGooglePopup()
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


    let defaultFields = {
        email: '',
        password: ''
    }
    const [fields, setFields] = useState(defaultFields)


    const changeHandler = (e) => {
        setFields({...fields, [e.target.name] : e.target.value})
    }

    const resetValues = () => {
        setFields(defaultFields)
    }

    const submitHandler =async (e) => {
        e.preventDefault()

        try {
            const {user} = await signInUserWithEmailAndPass(fields.email, fields.password)
            resetValues()
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong password!')
                break
                case 'auth/user-not-found':
                    alert('User does not exist!')
                break
                default:
                    console.log(error);
            }
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email an password</span>
            <form onSubmit={submitHandler}>
            <SignUpInput label='Email' value={fields.email} onChange={changeHandler} name = 'email' required type = 'email'/>
            <SignUpInput label='Paasowrd' value={fields.password} onChange={changeHandler} name = 'password' required type = 'password'/>

            <div>
            <Button type = 'submit' buttonType=''> SIGN IN</Button>
            <Button buttonType='google' type = 'button' onClick={logGoogleUser}>Sign up with Google</Button>
            {/* <Button buttonType='google' type = 'button' onClick={signInWithGoogleRedirect}>Redirect</Button> */}
            </div>
            </form>
           
        </div>
    )
}

export default SignInForm