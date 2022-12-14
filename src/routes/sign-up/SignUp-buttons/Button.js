import './Button.scss'
const Button = ({children, buttonType, ...otherProps}) => {
    const buttonClasses = {
        inverted: 'inverted',
        google: 'google-sign-in'
    }
    return (
        <button className={`buttonsContainer ${buttonClasses[buttonType]}` }{...otherProps}>{children}</button>

    )
}
export default Button