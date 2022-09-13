import React, {FC} from 'react';
import s from './Forgot-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik, useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {forgotPasswordSchema} from "../../../../utils/helpers/validate/forgot-password-validate";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type ForgotPasswordType = {};

type ForgotPasswordValuesType = {
  email: string
}

export const ForgotPassword: FC<ForgotPasswordType> = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values: ForgotPasswordValuesType) => {
      console.log(values)
      navigate(Routing.NEW_PASSWORD)
    },
  });

  return (
    <AnimationAuth className={s.forgot_password}>
      <TitleAuth className={s.title}>
        Forgot your password?
      </TitleAuth>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={forgotPasswordSchema}
        onSubmit={(values: ForgotPasswordValuesType) => {
          console.log(values)
          navigate(Routing.NEW_PASSWORD)
        }}
      >
        {(formik => (
          <Form>
            <Field
              className={s.input}
              name={'email'}
              type={'email'}
              label={'Email'}
              component={Input}/>

            <Caption className={s.text}>
              Enter your email address and we will send you further instructions
            </Caption>

            <Button
              type={'submit'}
              disabled={!(formik.isValid && formik.dirty)}
              className={s.button}>
              Send Instructions
            </Button>

            <Caption className={s.caption}>
              Did you remember your password?
            </Caption>

            <LinkCommon routing={Routing.AUTH}>
              Try logging in
            </LinkCommon>
          </Form>
        ))}
      </Formik>
    </AnimationAuth>
  );
};