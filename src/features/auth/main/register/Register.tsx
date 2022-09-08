import React, {FC} from 'react';
import s from './Register.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik, useFormik} from "formik";
import {registerSchema} from "../../../../utils/helpers/validate/register-validate";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type RegisterType = {};

type RegisterValuesType = {
  email: '',
  password: '',
  confirmPassword: '',
}

export const Register: FC<RegisterType> = () => {
  const navigate = useNavigate();
  return (
    <AnimationAuth className={s.register}>
      <TitleAuth className={s.title}>
        Sign In
      </TitleAuth>

      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values: RegisterValuesType) => {
          console.log(values)
          navigate(Routing.CHECK_EMAIL)
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

            <LinkCommon routing={Routing.AUTH}>
              Try logging in
            </LinkCommon>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};