import React, {FC} from 'react';
import s from './Register.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {registerSchema} from "../../../../utils/helpers/validate/register-validate";
import {useNavigate} from "react-router-dom";
import {Link} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type RegisterType = {};

type RegisterValuesType = {
  email: ''
  password: ''
  confirmPassword: ''
}

export const Register: FC<RegisterType> = () => {
  const navigate = useNavigate();
  return (
    <AnimationAuth className={s.register}>
      <Title className={s.title} type={'h2'}>
        Sign In
      </Title>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values: RegisterValuesType) => {
          console.log(values)
          navigate(Link.CHECK_EMAIL)
        }}
      >
        {formik => (
          <Form>
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

              <Field
                name={'confirmPassword'}
                type={'password'}
                label={'Confirm password'}
                component={Input}/>
            </div>

            <div className={s.wrap}>
              <Button
                type={'reset'}
                buttonType={'cansel'}>
                Cansel
              </Button>

              <Button
                type={'submit'}
                disabled={!(formik.isValid && formik.dirty)}
                className={s.button_register}>
                Login
              </Button>
            </div>

            <LinkCommon routing={Link.AUTH}>
              Try logging in
            </LinkCommon>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};