import React, {FC} from 'react';
import s from './Check-email.module.scss';
import {Link} from "../../../../utils/enum/routing";
import image_check_email from '../../../../assets/images/check-email.svg'
import {AnimationAuth} from "../../../../components/animations/animationAuth";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type CheckEmailType = {};

export const CheckEmail: FC<CheckEmailType> = () => {
  return (
    <AnimationAuth className={s.check_email}>
      <Title className={s.title} type={'h2'}>
        Check Email
      </Title>

      <img className={s.image} src={image_check_email} alt={'Email'}/>

      <Caption className={s.caption}>
        We’ve sent an Email with instructions to example@mail.com
      </Caption>

      <LinkCommon className={s.link} routing={Link.AUTH}>
        Try logging in
      </LinkCommon>
    </AnimationAuth>
  );
};