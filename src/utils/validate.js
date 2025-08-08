const validateCredentials = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);


    const isPasswordValid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);

    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid password"

    return null;

}

export default validateCredentials;