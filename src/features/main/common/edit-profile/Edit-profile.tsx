import React, {FC, useEffect, useState} from 'react';
import s from './Edit-profile.module.scss';
import {Title} from "../../../../components/ui/title/Title";
import {Field, Form, Formik} from "formik";
import {Caption} from "../../../../components/ui/caption/Caption";
import {editProfileSchema} from "../../../../utils/helpers/validate/Edit-profile-validate";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {appSelect} from "../../../../app/App-select";
import {Button} from "../../../../components/bll/button/Button";
import {InputFileAvatar} from "../../../../components/bll/inputFileAvatar/InputFileAvatar";
import {IconLogout} from "../../../../components/icons/icon-logout/Icon-logout";
import {InputEditName} from "../../../../components/bll/inputEditName/InputEditName";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useLocation} from "react-router-dom";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Container} from "../../../../components/ui/container/Container";
import {WrapperCard} from "../../../../components/ui/wrapper-card/Wrapper-card";
import {Link} from "../../../../utils/enum/routing";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {logout} from "../../Main-thunk";

type EditProfileType = {};

export const EditProfile: FC<EditProfileType> = ({}) => {
  const {user} = useAppSelector(appSelect);
  const location = useLocation()
  const dispatch = useAppDispatch();
  const [image, setImage] = useState(user.avatar);
  const onButtonLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    return setImage(user.avatar);
  }, [user.avatar])

  return (
    <Container className={s.edit_profile} type={'section'}>
      {location.pathname === Link.EDIT_PROFILE &&
          <ButtonBack className={s.button} to={Link.MAIN}>Back to Packs List</ButtonBack>
      }
      <AnimationPage className={s.animation}>
        <WrapperCard>
          <Title className={s.title} type={'h2'}>
            Personal Information
          </Title>

          <Formik
            initialValues={{
              name: '',
              avatar: '',
            }}
            validationSchema={editProfileSchema}
            onSubmit={() => {
            }}
          >
            {formik => (
              <Form className={s.form}>
                <Field
                  className={s.input_avatar}
                  name={'avatar'}
                  type={'file'}
                  src={image}
                  setImage={setImage}
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

                <Button
                  type={'button'}
                  buttonType={'logout'}
                  onClickButton={onButtonLogout}
                >
                  <div className={s.wrap}>
                    <IconLogout className={s.icon}/>
                    Log out
                  </div>
                </Button>
              </Form>
            )}
          </Formik>
        </WrapperCard>
      </AnimationPage>
    </Container>
  );
};