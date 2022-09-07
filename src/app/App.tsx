import {FC} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Routing} from "../utils/enum/routing";
import {Login} from "../features/auth/main/login/Login";
import {Register} from "../features/auth/main/register/Register";
import {ForgotPassword} from "../features/auth/main/forgot-password/Forgot-password";
import {NewPassword} from "../features/auth/main/new-password/New-password";
import {CheckEmail} from "../features/auth/main/check-email/Check-email";
import {Header} from "../components/ui/header/Header";
import {AnimatePresence} from "framer-motion";

export const App: FC = () => {
  const location = useLocation()
  return (
    <div className={s.app}>
      <Header></Header>

      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path={'/'} element={<Navigate to={Routing.AUTH}/>}/>
          <Route path={'/*'} element={<Navigate to={Routing.AUTH}/>}/>
          <Route path={Routing.AUTH} element={<Auth/>}>
            <Route path={Routing.AUTH} element={<Login/>}/>
            <Route path={Routing.REGISTER} element={<Register/>}/>
            <Route path={Routing.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={Routing.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={Routing.CHECK_EMAIL} element={<CheckEmail/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};