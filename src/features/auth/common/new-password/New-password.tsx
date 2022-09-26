import React, {FC, useEffect} from 'react';
import s from './New-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {Field, Form, Formik} from "formik";
import {newPasswordSchema} from "../../../../utils/helpers/validate/New-password-validate";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Link} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {NewPasswordSubmitType} from "../../Auth-type";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setNewPassword} from "../../Auth-thunk";
import {Error} from "../../../../components/ui/error/Error";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {authSelect} from "../../../../app/App-select";
import {Statuses} from "../../../../utils/enum/statuses";
import {sendError} from "../../Auth-slice";

type NewPasswordType = {};

export const NewPassword: FC<NewPasswordType> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {error, loading} = useAppSelector(authSelect);
  const params = useParams();

  useEffect(() => {
    if(error) dispatch(sendError())
  }, [dispatch])

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
        onSubmit={ async (data: NewPasswordSubmitType) => {
          const response = await dispatch(setNewPassword({
            password: data.password,
            resetPasswordToken: String(params.token),
          }))
          if(response.meta.requestStatus === 'fulfilled') navigate(Link.AUTH)
        }}>
        {formik => (
          <Form>
            <Field
              className={s.input}
              name={'password'}
              type={'password'}
              label={'Password'}
              errorResponse={error}
              component={Input}/>

            <Caption className={s.caption}>
              Create new password and we will send you further instructions to email
            </Caption>

            <Error isError={!!error} error={error}/>

            <Button
              type={'submit'}
              disabled={!(formik.isValid && formik.dirty) || loading === Statuses.PENDING}
              className={s.button}>
              Create new password
            </Button>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};