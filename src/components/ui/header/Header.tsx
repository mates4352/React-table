import React, {FC, memo, useState} from 'react';
import s from './Header.module.scss'
import classNames from "classnames/bind";
import logo from './../../../assets/images/logo.svg'
import {Button} from "../../bll/button/Button";
import {useNavigate} from "react-router-dom";
import {Link} from "../../../utils/enum/routing";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {appSelect} from "../../../app/App-select";
import {Avatar} from "../avatar/Avatar";
import {Popup} from "../popup/Popup";
import {ContentPopupAvatar} from "../popup/children/content-popup-avatar/Content-popup-avatar";

type HeaderType = {};

export const Header: FC<HeaderType> = memo(() => {
  const {user} = useAppSelector(appSelect);
  const [isPopup, showPopup] = useState(false);
  const navigate = useNavigate();
  const onClickShowPopup = () => {
    showPopup(true)
  }
  const onClosePopup = () => {
    showPopup(false)
  }
  const onClickButtonRedirect = () => {
    navigate(Link.AUTH)
  }

  return (
    <header className={s.header}>
      <div className={classNames(s.wrap, s.container)}>
        <img className={s.logo} src={logo} alt={'Logo'}/>

        {!user.verified ?
          <Button
            className={s.button}
            type={'button'}
            onClickButton={onClickButtonRedirect}>
            Sign in
          </Button>
          :
          <button
            className={s.user}
            type={'button'}
            onClick={onClickShowPopup}>
            <p className={classNames(s.name, isPopup && s.name_active)}>{user.name}</p>
            <Avatar src={user.avatar} alt="Пользователь"/>
            <Popup
              className={s.popup}
              isPopup={isPopup}
              onClosePopup={onClosePopup}>
              <ContentPopupAvatar/>
            </Popup>
          </button>
        }
      </div>
    </header>
  );
})
