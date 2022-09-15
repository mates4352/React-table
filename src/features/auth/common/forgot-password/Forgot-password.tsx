import React, {FC} from 'react';
import s from './Forgot-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {Link} from "../../../../utils/enum/routing";
import {forgotPasswordSchema} from "../../../../utils/helpers/validate/Forgot-password-validate";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";
import {ForgotPasswordSubmitType} from "../../Auth-type";

type ForgotPasswordType = {};

export const ForgotPassword: FC<ForgotPasswordType> = () => {
  let navigate = useNavigate();

  return (
    <AnimationAuth className={s.forgot_password}>
      <Title className={s.title} type={'h2'}>
        Forgot your password?
      </Title>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={forgotPasswordSchema}
        onSubmit={(data: ForgotPasswordSubmitType) => {
          navigate(Link.NEW_PASSWORD)
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

            <LinkCommon routing={Link.AUTH}>
              Try logging in
            </LinkCommon>
          </Form>
        ))}
      </Formik>
    </AnimationAuth>
  );
};