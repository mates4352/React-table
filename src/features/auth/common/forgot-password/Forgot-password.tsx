import React, {FC} from 'react';
import s from './Forgot-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {validate} from "../../../../utils/helpers/validate/forgot-password-validate";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";

type ForgotPasswordType = {

};

export const ForgotPassword: FC<ForgotPasswordType> = props => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.NEW_PASSWORD)
        },
    });

    return (
      <AnimationAuth>
          <section className={s.forgot_password}>
              <h2 className={s.title}>Forgot your password?</h2>

              <form className={s.form} onSubmit={formik.handleSubmit}>
                  <Input
                    label={'Email'}
                    type={'email'}
                    id={'email'}
                    stylesRules={s.input}
                    formikError={formik.getFieldMeta('email')}
                    {...formik.getFieldProps('email')}/>

                  <p className={s.text}>Enter your email address and we will send you further instructions</p>

                  <Button
                    type={'submit'}
                    disabled={!(formik.isValid && formik.dirty)}
                    styleRules={s.button}>
                      Send Instructions
                  </Button>

                  <p className={s.subtext}>Did you remember your password?</p>

                  <Link className={s.link} to={Routing.AUTH}>Try logging in</Link>
              </form>
          </section>
      </AnimationAuth>
    );
};