import React, {FC} from 'react';
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
import {setLogin} from "../../Auth-slice";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {Error} from "../../../../components/ui/error/Error";
import {authSelect} from "../../Auth-select";
import {appSelect} from "../../../../app/App-select";

type LoginType = {};

export const Login: FC<LoginType> = () => {
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(authSelect)
  const {loading} = useAppSelector(appSelect)

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
                component={Input}/>

              <Field
                name={'password'}
                type={'password'}
                label={'Password'}
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
              disabled={!(formik.isValid && formik.dirty) || loading === 'PENDING'}>
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