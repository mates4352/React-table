import React, {FC, useEffect} from 'react';
import s from './Forgot-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {Link, Routing} from "../../../../utils/enum/routing";
import {forgotPasswordSchema} from "../../../../utils/helpers/validate/Forgot-password-validate";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";
import {ForgotPasswordSubmitType} from "../../Auth-type";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {restorePassword} from "../../Auth-thunk";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {authSelect} from "../../../../app/App-select";
import {Error} from "../../../../components/ui/error/Error";
import {useNavigate} from "react-router-dom";
import {sendError} from "../../Auth-slice";

type ForgotPasswordType = {};

export const ForgotPassword: FC<ForgotPasswordType> = () => {
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(authSelect);
  const navigate = useNavigate();

  useEffect(() => {
    if(error) dispatch(sendError())
  }, [dispatch])

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
        onSubmit={async (dataForgotPassword: ForgotPasswordSubmitType) => {
          const response = await dispatch(restorePassword(
            {
              email: dataForgotPassword.email,
              from: "test-front-admin <sergeysabyrkin@gmail.com>",
              message: `<div style="background-color: lime; padding: 15px">
                  password recovery link: 
                  <a href='http://localhost:3000${Link.AUTH}/${Routing.NEW_PASSWORD}/$token$'>link</a>
                </div>`
            }
          ))
          if(response.meta.requestStatus === 'fulfilled') navigate(Link.CHECK_EMAIL);
        }}
      >
        {(formik => (
          <Form>
            <Field
              className={s.input}
              name={'email'}
              type={'email'}
              label={'Email'}
              errorResponse={error}
              component={Input}/>

            <Caption className={s.text}>
              Enter your email address and we will send you further instructions
            </Caption>

            {error && <Error className={s.error} isError={!!error} error={error}/>}

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