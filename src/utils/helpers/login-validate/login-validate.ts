type ErrorsType = {
    email?: string
}

export const validate = (values: ErrorsType) => {
    const errors: ErrorsType = {};
    if (!values.email) {
        errors.email = 'Required value email';
    } else if(values.email.length > 30) {
        errors.email = 'Less characters required';
    }
    return errors;
};