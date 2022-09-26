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
import {EditProfile} from "../features/edit-profile/Edit-profile";

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
            <Route path={Routing.AUTH} element={verified ? <Auth/> : <Navigate to={Link.EDIT_PROFILE}/>}/>
            <Route path={Routing.EDIT_PROFILE} element={verified ? <Navigate to={Link.AUTH}/> : <EditProfile/>}/>
            <Route path={Routing.EDIT_PROFILE + '/*'} element={<Navigate to={Link.EDIT_PROFILE}/>}/>
            <Route path={Routing.TABLE} element={verified ? <Navigate to={Link.AUTH}/> : <Main/>}/>
          </Routes>
      </div>
      {loading && <Alert status={loading}/>}
    </>
  );
};


// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/landing" replace />;
//   }
//
//   return children;
// };