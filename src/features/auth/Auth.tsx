import React, {FC} from "react";
import s from './Auth.module.scss';
import classNames from "classnames/bind";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Link, Routing} from "../../utils/enum/routing";
import {Login} from "./common/login/Login";
import {Register} from "./common/register/Register";
import {ForgotPassword} from "./common/forgot-password/Forgot-password";
import {NewPassword} from "./common/new-password/New-password";
import {CheckEmail} from "./common/check-email/Check-email";
import {AnimatePresence} from "framer-motion";

type AuthProps = {};

export const Auth: FC<AuthProps> = () => {
  const location = useLocation()

  return (
    <section className={classNames(s.auth, s.container)}>
      <div className={s.body}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route index element={<Login/>}/>
            <Route path={'*'} element={<Navigate to={Link.AUTH}/>}/>
            <Route path={Routing.REGISTER} element={<Register/>}/>
            <Route path={Routing.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={Routing.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={Routing.CHECK_EMAIL} element={<CheckEmail/>}/>
          </Routes>
        </AnimatePresence>
      </div>
    </section>
  );
};