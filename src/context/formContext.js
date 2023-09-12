export default function validation(objeto) {
    // {username:  , password:  }
    const errors = {}
    const regExPass1 = new RegExp('(?=.*[0-9])')

    const emailRegex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

    if(objeto.name.length < 3) errors.name = 'Name must have at least 3 characters'
    if(!objeto.name.length) errors.name = ''

    if(!emailRegex.test(objeto.email)){
        errors.email = 'Enter a valid email'
    }
    if(!objeto.email.length) errors.email = ''
    if(!regExPass1.test(objeto.password)){
        errors.password = 'The password must contain 1 digit'
    }
    if(objeto.password.length < 6 || objeto.password.length > 10){
        errors.password = 'Must have 6 to 10 characters'
    }
    if(!objeto.password.length) errors.password = ''
    return errors
}