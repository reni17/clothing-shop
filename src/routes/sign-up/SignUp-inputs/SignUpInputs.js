import { FormInput, FormInputLabel, Group } from './SignUpInputs.styles.js'
const SignUpInput = ({label, ...otherProps}) => {
    return(
        <Group>
            <FormInput {...otherProps}></FormInput>
            <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
        </Group>
    )
}

export default SignUpInput