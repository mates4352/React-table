type ErrorsType = {
    password?: string
}

export const validate = (values: ErrorsType) => {
    const errors: ErrorsType = {};

    if(!values.password) {
        errors.password = 'Required value password';
    } else if(values.password.length < 6) {
        errors.password = 'Less than 6 characters';
    }

    return errors;
};