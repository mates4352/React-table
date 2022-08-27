import {FC} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Routing} from "../utils/enum/routing";
import {Login} from "../features/auth/common/login/Login";
import {Register} from "../features/auth/common/register/Register";
import {ForgotPassword} from "../features/auth/common/forgot-password/Forgot-password";
import {NewPassword} from "../features/auth/common/new-password/New-password";
import {CheckEmail} from "../features/auth/common/check-email/Check-email";

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Routes>
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
    </div>
  );
};