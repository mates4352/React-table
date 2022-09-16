import React, {FC} from 'react';
import s from './Register.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {registerSchema} from "../../../../utils/helpers/validate/Register-validate";
import {Navigate} from "react-router-dom";
import {Link} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";
import {RegisterSubmitType} from "../../Auth-type";
import {Error} from "../../../../components/ui/error/Error";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {authSelect} from "../../../../app/App-select";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {register} from "../../Auth-thunk";

type RegisterType = {};

export const Register: FC<RegisterType> = () => {
  const dispatch = useAppDispatch();
  const {error, isRegister} = useAppSelector(authSelect)

  if(isRegister) return <Navigate to={Link.CHECK_EMAIL}/>

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
        onSubmit={(dataRegister: RegisterSubmitType) => {
          dispatch(register({
            email: dataRegister.email,
            password: dataRegister.password
          }))
        }}
      >
        {formik => (
          <Form>
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

              <Field
                name={'confirmPassword'}
                type={'password'}
                label={'Confirm password'}
                errorResponse={error}
                component={Input}/>
            </div>

            <Error className={s.error} isError={!!error} error={error}/>

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