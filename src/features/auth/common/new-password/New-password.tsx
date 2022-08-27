import React, {FC} from 'react';
import s from './New-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {validate} from "../../../../utils/helpers/validate/new-password-validate";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";

type NewPasswordType = {

};

export const NewPassword: FC<NewPasswordType> = props => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.CHECK_EMAIL)
        },
    });

    return (
        <section className={s.new_password}>
            <h2 className={s.title}>Create new password</h2>

            <form className={s.form} onSubmit={formik.handleSubmit}>
                <Input
                    label={'Password'}
                    type={'password'}
                    id={'password'}
                    stylesRules={s.input}
                    formikError={formik.getFieldMeta('password')}
                    {...formik.getFieldProps('password')}/>

                <p className={s.text}>Create new password and we will send you further instructions to email</p>

                <Button
                    type={'submit'}
                    styleRules={s.button}>
                    Create new password
                </Button>
            </form>
        </section>
    );
};