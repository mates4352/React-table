import {FC, useEffect} from "react";
import s from "./App.module.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../features/auth/Auth";
import {Link, Routing} from "../utils/enum/routing";
import {Header} from "../components/ui/header/Header";
import {Alert} from "../components/ui/alert/Alert";
import {useAppSelector} from "../hooks/useAppSelector";
import {appSelect, authSelect} from "./App-select";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {getDataUser} from "./App-thunk";
import {Main} from "../features/main/Main";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(authSelect);
  const {user} = useAppSelector(appSelect);
  const verified = !user.verified;

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
            <Route path={Routing.AUTH} element={verified ? <Auth/> : <Navigate to={Link.MAIN}/>}/>
            <Route path={Routing.MAIN} element={verified ? <Navigate to={Link.AUTH}/> : <Main/>}/>
          </Routes>
      </div>
      {loading && <Alert status={loading}/>}
    </>
  );
};