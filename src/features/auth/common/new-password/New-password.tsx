import React, {FC} from 'react';
import s from './New-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {newPasswordSchema} from "../../../../utils/helpers/validate/New-password-validate";
import {useNavigate} from "react-router-dom";
import {Link, Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";

type NewPasswordType = {};

type NewPasswordValuesType = {
  password: string
}

export const NewPassword: FC<NewPasswordType> = () => {
  let navigate = useNavigate();

  return (
    <AnimationAuth className={s.new_password}>
      <Title className={s.title} type={'h2'}>
        Create new password
      </Title>

      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={newPasswordSchema}
        onSubmit={(data: NewPasswordValuesType) => {
          navigate(Link.CHECK_EMAIL)
        }}>
        {formik => (
          <Form>
            <Field
              className={s.input}
              name={'password'}
              type={'password'}
              label={'Password'}
              component={Input}/>

            <Caption className={s.caption}>
              Create new password and we will send you further instructions to email
            </Caption>

            <Button
              type={'submit'}
              disabled={!(formik.isValid && formik.dirty)}
              className={s.button}>
              Create new password
            </Button>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};