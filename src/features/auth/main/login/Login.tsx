import React, {FC} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {useFormik} from "formik";
import {loginSchema} from "../../../../utils/helpers/validate/login-validate";
import {Button} from "../../../../components/bll/button/Button";
import {Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type LoginType = {

};

export const Login: FC<LoginType> = Props => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
      <AnimationAuth className={s.login}>
          <TitleAuth stylesRules={s.title}>
              Sign In
          </TitleAuth>

          <form className={s.form} onSubmit={formik.handleSubmit}>
              <div className={s.group}>
                  <Input
                    label={'Email'}
                    type={'email'}
                    id={'email'}
                    formikError={formik.getFieldMeta('email')}
                    {...formik.getFieldProps('email')}/>

                  <Input
                    label={'Password'}
                    type={'password'}
                    id={'password'}
                    formikError={formik.getFieldMeta('password')}
                    {...formik.getFieldProps('password')}/>
              </div>


              <LinkCommon stylesRules={s.link_forgot} routing={Routing.FORGOT_PASSWORD}>
                  Forgot Password
              </LinkCommon>

              <Button
                type={'submit'}
                disabled={!(formik.isValid && formik.dirty)}
                styleRules={s.button}>
                  Sign in
              </Button>

              <Caption stylesRules={s.caption}>
                  Already have an account?
              </Caption>

              <LinkCommon routing={Routing.REGISTER}>
                  Registration
              </LinkCommon>
          </form>
      </AnimationAuth>
    );
};