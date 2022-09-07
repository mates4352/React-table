import React, {FC} from 'react';
import s from './Register.module.scss';
import {Input} from "../../../../components/bll/input/Input";
import {Button} from "../../../../components/bll/button/Button";
import {useFormik} from "formik";
import {registerSchema} from "../../../../utils/helpers/validate/register-validate";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../../utils/enum/routing";
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type RegisterType = {

};

export const Register: FC<RegisterType> = props => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerSchema,
        onSubmit: values => {
            console.log(values)
            navigate(Routing.CHECK_EMAIL)
        },
    });

    return (
      <AnimationAuth className={s.register}>
          <TitleAuth stylesRules={s.title}>
              Sign In
          </TitleAuth>

          <form className={s.form} onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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

                  <Input
                    label={'Confirm password'}
                    type={'password'}
                    id={'Confirm password'}
                    formikError={formik.getFieldMeta('confirmPassword')}
                    {...formik.getFieldProps('confirmPassword')}/>
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
                    styleRules={s.button_register}>
                      Login
                  </Button>
              </div>

              <LinkCommon routing={Routing.AUTH}>
                  Try logging in
              </LinkCommon>
          </form>
      </AnimationAuth>
    );
};