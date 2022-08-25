import React, {FC} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {useFormik} from "formik";
import {validate} from "../../../../utils/helpers/login-validate/login-validate";

type LoginType = {

};

export const Login: FC<LoginType> = Props => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <section className={s.login}>
            <h2 className={s.title}>Sign In</h2>

            <form className={s.form} onSubmit={formik.handleSubmit}>
                <Input
                    label={'Email'}
                    type={'email'}
                    id={'email'}
                    formikError={formik.getFieldMeta('email')}
                    {...formik.getFieldProps('email')}/>

                <Input
                    label={'Password'}
                    type={'password'}
                    id={'password'}
                    formikError={formik.getFieldMeta('password')}
                    {...formik.getFieldProps('password')}/>
            </form>
        </section>
    );
};