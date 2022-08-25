type ErrorsType = {
    email?: string
    password?: string
}

export const validate = (values: ErrorsType) => {
    const errors: ErrorsType = {};
    if (!values.email) {
        errors.email = 'Required value email';
    } else if(values.email.length > 30) {
        errors.email = 'Less characters required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password) {
        errors.password = 'Required value password';
    } else if(values.password.length < 6) {
        errors.password = 'Less than 6 characters';
    }

    return errors;
};