import React, {FC, memo} from 'react';
import s from './Header.module.scss'
import classNames from "classnames/bind";
import logo from './../../../assets/images/logo.svg'
import {Button} from "../../bll/button/Button";
import {useNavigate} from "react-router-dom";
import {Link} from "../../../utils/enum/routing";

type HeaderType = {};

export const Header: FC<HeaderType> = memo(() => {
  const navigate = useNavigate();
  const onClickButtonRedirect = () => {
    navigate(Link.AUTH)
  }

  return (
    <header className={s.header}>
      <div className={classNames(s.wrap, s.container)}>
        <img className={s.logo} src={logo} alt={'Logo'}/>

        <Button
          className={s.button}
          type={'button'}
          onClickButton={onClickButtonRedirect}>
          Sign in
        </Button>
      </div>
    </header>
  );
})