import React, {FC} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Field, Form, Formik} from "formik";
import {loginSchema} from "../../../../utils/helpers/validate/login-validate";
import {Button} from "../../../../components/bll/button/Button";
import {Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";
import {Checkbox} from "../../../../components/bll/checkbox/Checkbox";

type LoginType = {};

type LoginValuesType = {
  email: string
  password: string
  remember_me: boolean
}

export const Login: FC<LoginType> = () => {
  return (
    <AnimationAuth className={s.login}>
      <TitleAuth className={s.title}>
        Sign In
      </TitleAuth>

      <Formik
        initialValues={{
          email: '',
          password: '',
          remember_me: false,
        }}
        validationSchema={loginSchema}
        onSubmit={(values: LoginValuesType) => {
          console.log(values)
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
              name={'remember_me'}
              type={'checkbox'}
              label={'Remember me'}
              component={Checkbox}/>

            <LinkCommon
              className={s.link_forgot}
              routing={Routing.FORGOT_PASSWORD}>
              Forgot Password
            </LinkCommon>

            <Button
              className={s.button}
              type={'submit'}
              disabled={!(formik.isValid && formik.dirty)}>
              Sign in
            </Button>

            <Caption className={s.caption}>
              Already have an account?
            </Caption>

            <LinkCommon routing={Routing.REGISTER}>
              Registration
            </LinkCommon>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};