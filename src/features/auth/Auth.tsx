import React, {FC} from "react";
import s from './Auth.module.scss';
import classNames from "classnames/bind";
import {Route, Routes, useLocation} from "react-router-dom";
import {Routing} from "../../utils/enum/routing";
import {Login} from "./main/login/Login";
import {Register} from "./main/register/Register";
import {ForgotPassword} from "./main/forgot-password/Forgot-password";
import {NewPassword} from "./main/new-password/New-password";
import {CheckEmail} from "./main/check-email/Check-email";
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