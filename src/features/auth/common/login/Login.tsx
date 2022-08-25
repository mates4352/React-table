import React, {FC} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {useFormik} from "formik";
import {validate} from "../../../../utils/helpers/login-validate/login-validate";
import {Link} from "react-router-dom";
import {Button} from "../../../../components/bll/button/Button";

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
                <div className={s.group}>
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
                </div>

                <Link className={s.link_Forgot} to={'/'}>Forgot Password</Link>

                <Button
                    type={'submit'}
                    styleRules={s.button}>
                    Login
                </Button>

                <p className={s.text}>Don’t have an account?</p>

                <Link className={s.link_Sign} to={'/'}>Sign Up</Link>
            </form>
        </section>
    );
};