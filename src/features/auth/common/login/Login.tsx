import React, {FC, useEffect} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Field, Form, Formik} from "formik";
import {Button} from "../../../../components/bll/button/Button";
import {Link} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";
import {Checkbox} from "../../../../components/bll/checkbox/Checkbox";
import {LoginSubmitType} from "../../Auth-type";
import {loginSchema} from "../../../../utils/helpers/validate/Login-validate";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {Error} from "../../../../components/ui/error/Error";
import {authSelect} from "../../../../app/App-select";
import {setLogin} from "../../Auth-thunk";
import {Statuses} from "../../../../utils/enum/statuses";
import {sendError} from "../../Auth-slice";

type LoginType = {};

export const Login: FC<LoginType> = () => {
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(authSelect)
  const {loading} = useAppSelector(authSelect)

  useEffect(() => {
    if(error) dispatch(sendError())
  }, [dispatch])

  return (
    <AnimationAuth className={s.login}>
      <Title className={s.title} type={'h2'}>
        Sign In
      </Title>

      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={loginSchema}
        onSubmit={async(dataLogin: LoginSubmitType) => {
          dispatch(setLogin(dataLogin))
        }}
      >
        {formik => (
          <Form className={s.form}>
            <div className={s.group}>
              <Field
                name={'email'}
                type={'email'}
                label={'Email'}
                errorResponse={error}
                component={Input}/>

              <Field
                name={'password'}
                type={'password'}
                label={'Password'}
                errorResponse={error}
                component={Input}/>
            </div>

            <Field
              className={s.checkbox}
              name={'rememberMe'}
              type={'checkbox'}
              label={'Remember me'}
              component={Checkbox}/>

            <LinkCommon
              className={s.link_forgot}
              routing={Link.FORGOT_PASSWORD}>
              Forgot Password
            </LinkCommon>

            <Error className={s.error} isError={!!error} error={error}/>

            <Button
              className={s.button}
              type={'submit'}
              disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING}>
              Sign in
            </Button>

            <Caption className={s.caption}>
              Already have an account?
            </Caption>

            <LinkCommon routing={Link.REGISTER}>
              Registration
            </LinkCommon>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};