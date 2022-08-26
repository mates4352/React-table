import {FC} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Routing} from "../utils/enum/routing";
import {Login} from "../features/auth/common/login/Login";
import {Register} from "../features/auth/common/register/Register";

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Routes>
        <Route path={'/'} element={<Navigate to={Routing.AUTH}/>}/>
        <Route path={'/*'} element={<Navigate to={Routing.AUTH}/>}/>
        <Route path={Routing.AUTH} element={<Auth/>}>
            <Route path={'/Auth'} element={<Login/>}/>
            <Route path={Routing.REGISTER} element={<Register/>}/>
        </Route>

      </Routes>
    </div>
  );
};