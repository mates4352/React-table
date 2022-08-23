import {FC} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Routing} from "../utils/enum/routing";

export const App: FC = () => {
  return (
    <div className={s.app}>
      <Routes>
        <Route path={'/'} element={<Navigate to={Routing.AUTH}/>}/>
        <Route path={'/*'} element={<Navigate to={Routing.AUTH}/>}/>
        <Route path={Routing.AUTH} element={<Auth/>}/>
      </Routes>
    </div>
  );
};