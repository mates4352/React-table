import React, {FC} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {useFormik} from "formik";
import {validate} from "../../../../utils/helpers/login-validate/login-validate";

type LoginType = {

};

export type FormikType = ReturnType<typeof useFormik>;

export const Login: FC<LoginType> = Props => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
        },
    });

    const {} = Props;

    return (
        <section className={s.login}>
            <h2 className={s.title}>Sign In</h2>

            <form onSubmit={formik.handleSubmit}>
                <Input
                    label={'email'}
                    type={'email'}
                    id={'email'}
                    formikError={formik.getFieldMeta('email')}
                    {...formik.getFieldProps('email')}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};