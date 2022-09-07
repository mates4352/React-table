import React, {FC} from 'react';
import s from './Forgot-password.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {validate} from "../../../../utils/helpers/validate/forgot-password-validate";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type ForgotPasswordType = {

};

export const ForgotPassword: FC<ForgotPasswordType> = props => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.NEW_PASSWORD)
        },
    });

    return (
      <AnimationAuth className={s.forgot_password}>
          <TitleAuth stylesRules={s.title}>
              Forgot your password?
          </TitleAuth>

          <form className={s.form} onSubmit={formik.handleSubmit}>
              <Input
                label={'Email'}
                type={'email'}
                id={'email'}
                stylesRules={s.input}
                formikError={formik.getFieldMeta('email')}
                {...formik.getFieldProps('email')}/>

              <Caption stylesRules={s.text}>
                  Enter your email address and we will send you further instructions
              </Caption>

              <Button
                type={'submit'}
                disabled={!(formik.isValid && formik.dirty)}
                styleRules={s.button}>
                  Send Instructions
              </Button>

              <Caption stylesRules={s.caption}>
                  Did you remember your password?
              </Caption>

              <LinkCommon routing={Routing.AUTH}>
                  Try logging in
              </LinkCommon>
          </form>
      </AnimationAuth>
    );
};