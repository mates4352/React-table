import React, {FC, useEffect} from 'react';
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
import {RegisterSubmitType} from "../../Auth-type";
import {Error} from "../../../../components/ui/error/Error";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {authSelect} from "../../../../app/App-select";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {register} from "../../Auth-thunk";
import {Statuses} from "../../../../utils/enum/statuses";
import {sendError} from "../../Auth-slice";

type RegisterType = {};

export const Register: FC<RegisterType> = () => {
  const dispatch = useAppDispatch();
  const {error, loading} = useAppSelector(authSelect);
  const navigate = useNavigate();

  useEffect(() => {
    if(error) dispatch(sendError())
  }, [dispatch])

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
        onSubmit={async(dataRegister: RegisterSubmitType) => {
          const response = await dispatch(register({
            email: dataRegister.email,
            password: dataRegister.password
          }));
          if(response.meta.requestStatus === 'fulfilled') navigate(Link.AUTH);
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
                disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING}
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
