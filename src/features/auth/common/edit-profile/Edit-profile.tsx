import React, {FC, useEffect} from 'react';
import s from './Edit-profile.module.scss';
import {Title} from "../../../../components/ui/title/Title";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../../components/bll/input/Input";
import {Caption} from "../../../../components/ui/caption/Caption";
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {editProfileSchema} from "../../../../utils/helpers/validate/Edit-profile-validate";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {appSelect} from "../../../../app/App-select";
import {Button} from "../../../../components/bll/button/Button";
import {InputFileAvatar} from "../../../../components/bll/inputFileAvatar/InputFileAvatar";
import {IconLogout} from "../../../../components/icons/icon-logout/Icon-logout";
import {InputEditName} from "../../../../components/bll/inputEditName/InputEditName";

type EditProfileType = {

};

export const EditProfile: FC<EditProfileType> = ({

}) => {
  const {user} = useAppSelector(appSelect);

  return (
    <AnimationAuth className={s.login}>
      <Title className={s.title} type={'h2'}>
        Personal Information
      </Title>

      <Formik
        initialValues={{
          name: user.name,
          avatar: '',
        }}
        validationSchema={editProfileSchema}
        onSubmit={(dataEditProfile: any) => {
          console.log(dataEditProfile)
        }}
      >
        {formik => (
          <Form className={s.form}>
            <Field
              className={s.input_avatar}
              name={'avatar'}
              type={'file'}
              component={InputFileAvatar}/>

            <Field
              className={s.input}
              name={'name'}
              type={'text'}
              label={'Nickname'}
              component={InputEditName}/>

            <Caption className={s.caption}>
              {user.email || 'email'}
            </Caption>

            <Button type={'button'} buttonType={'logout'}>
              <div className={s.wrap}>
                <IconLogout className={s.icon}/>
                Log out
              </div>
            </Button>
          </Form>
        )}
      </Formik>
    </AnimationAuth>
  );
};