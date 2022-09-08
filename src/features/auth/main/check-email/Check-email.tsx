import React, {FC} from 'react';
import s from './Check-email.module.scss';
import {Routing} from "../../../../utils/enum/routing";
import image_check_email from '../../../../assets/images/check-email.svg'
import {AnimationAuth} from "../../../../utils/animations/animationAuth";
import {TitleAuth} from "../../common/titleAuth/TitleAuth";
import {Caption} from "../../../../components/ui/caption/Caption";
import {LinkCommon} from "../../../../components/ui/linkCommon/LinkCommon";

type CheckEmailType = {};

export const CheckEmail: FC<CheckEmailType> = () => {
  return (
    <AnimationAuth className={s.check_email}>
      <TitleAuth className={s.title}>
        Check Email
      </TitleAuth>

      <img className={s.image} src={image_check_email} alt={'Email'}/>

      <Caption className={s.caption}>
        We’ve sent an Email with instructions to example@mail.com
      </Caption>

      <LinkCommon className={s.link} routing={Routing.AUTH}>
        Try logging in
      </LinkCommon>
    </AnimationAuth>
  );
};