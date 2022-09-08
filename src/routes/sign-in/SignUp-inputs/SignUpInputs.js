import '../SignUp-inputs/SignUpInputs.scss'
const SignUpInput = ({label, ...otherProps}) => {
    return(
        <div className='group'>
            <input className='form-input' {...otherProps}></input>
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        </div>
    )
}

export default SignUpInput