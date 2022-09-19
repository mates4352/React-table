import {FC, useEffect} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Link, Routing} from "../utils/enum/routing";
import {Header} from "../components/ui/header/Header";
import {Alert} from "../components/ui/alert/Alert";
import {useAppSelector} from "../hooks/useAppSelector";
import {authSelect} from "./App-select";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {getDataUser} from "./App-thunk";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(authSelect)

  useEffect(() => {
    dispatch(getDataUser())
  }, [dispatch])

  return (
    <>
      <div className={s.app}>
        <Header></Header>
        <Routes>
          <Route path={'/'} element={<Navigate to={Link.AUTH}/>}/>
          <Route path={'/*'} element={<Navigate to={Link.AUTH}/>}/>
          <Route path={Routing.AUTH} element={<Auth/>}/>
        </Routes>
      </div>
      {loading && <Alert status={loading}/>}
    </>
  );
};