import React, {FC} from 'react';
import s from './Register.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {validate} from "../../../../utils/helpers/validate/register-validate";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";

type RegisterType = {

};

export const Register: FC<RegisterType> = props => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.CHECK_EMAIL)
        },
    });

    return (
        <section className={s.register}>
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

                    <Input
                        label={'Confirm password'}
                        type={'password'}
                        id={'Confirm password'}
                        formikError={formik.getFieldMeta('confirmPassword')}
                        {...formik.getFieldProps('confirmPassword')}/>
                </div>

                <div className={s.wrap}>
                    <Button
                        type={'reset'}
                        onClickButton={() => formik.resetForm()}
                        buttonType={'cansel'}>
                        Cansel
                    </Button>

                    <Button
                        type={'submit'}
                        disabled={!(formik.isValid && formik.dirty)}
                        styleRules={s.button_register}>
                        Login
                    </Button>
                </div>
            </form>
        </section>
    );
};