import React, {FC} from 'react';
import s from './New-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {newPasswordSchema} from "../../../../utils/helpers/validate/new-password-validate";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";

type NewPasswordType = {

};

export const NewPassword: FC<NewPasswordType> = props => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: newPasswordSchema,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.CHECK_EMAIL)
        },
    });

    return (
      <AnimationAuth className={s.new_password}>
          <TitleAuth stylesRules={s.title}>
              Create new password
          </TitleAuth>

          <form className={s.form} onSubmit={formik.handleSubmit}>
              <Input
                label={'Password'}
                type={'password'}
                id={'password'}
                stylesRules={s.input}
                formikError={formik.getFieldMeta('password')}
                {...formik.getFieldProps('password')}/>

              <Caption stylesRules={s.caption}>
                  Create new password and we will send you further instructions to email
              </Caption>

              <Button
                type={'submit'}
                disabled={!(formik.isValid && formik.dirty)}
                styleRules={s.button}>
                  Create new password
              </Button>
          </form>
      </AnimationAuth>
    );
};