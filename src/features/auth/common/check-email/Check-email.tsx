import React, {FC} from 'react';
import s from './Check-email.module.scss';
import {Routing} from "../../../../utils/enum/routing";
import {Link} from "react-router-dom";
import image_check_email from './../../../../assets/images/check-email.svg'
import {AnimationAuth} from "../../../../utils/animations/animationAuth";

type CheckEmailType = {

};

export const CheckEmail: FC<CheckEmailType> = props => {

    return (
      <AnimationAuth>
        <section className={s.check_email}>
          <h2 className={s.title}>Check Email</h2>

          <img className={s.image} src={image_check_email}/>

          <p className={s.text}>We’ve sent an Email with instructions to example@mail.com</p>

          <Link className={s.link} to={Routing.AUTH}>Try logging in</Link>
        </section>
      </AnimationAuth>
    );
};