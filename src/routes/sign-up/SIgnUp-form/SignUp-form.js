import { useState, useContext } from "react"
import { createUserWithEmailAndPass, createUserDocFromAuth } from "../../../utils/firebase"
import SignUpInput from "../../sign-up/SignUp-inputs/SignUpInputs"
import './SignUpForm.scss'
import Button from "../SignUp-buttons/Button"
import { UserContext } from "../../../contexts/UserContext"
import { selectUser } from "../../../store/user/userSelector"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../../store/user/userAction"
const SignUpForm = () => {
    const dispatch = useDispatch()
       let defaultFields = {
            displayName : '',
            email : '',
            password: '',
            rePassword: ''
    
        }
        const [fields, setFields] = useState(defaultFields)
        // const {setUser} = useContext(UserContext)
        const {displayName, email, password, rePassword} = fields
    
        const resetValues = () => {
            setFields(defaultFields)
        }

    const changeHandler = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
     }
     const submitHandler =async (e) => {
        e.preventDefault()
        if(password !== rePassword){
            return
        }
        try {
            const {user} = await createUserWithEmailAndPass(email, password)
            await createUserDocFromAuth(user, {displayName: {displayName}})
            resetValues()
        } catch (err) {
            console.log('User creation error:' , err);
        }
       
     }
    return(
        <div className="sign-up-container">
           <h2> Sign Up with your email and password</h2>
            <form onSubmit={submitHandler}>
                <SignUpInput label='Display name' value={displayName} onChange={changeHandler} name = 'displayName' required type = 'text'/>
     

                <SignUpInput label='Email' value={email} onChange={changeHandler} name = 'email' required type = 'email'/>


                <SignUpInput label='Paasowrd' value={password} onChange={changeHandler} name = 'password' required type = 'password'/>


                <SignUpInput label='Repeat Password' value={rePassword} onChange={changeHandler} name = 'rePassword' required type = 'password'/>
                <Button buttonType='' type = 'submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm