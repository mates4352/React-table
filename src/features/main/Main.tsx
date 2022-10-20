import React, {FC} from 'react';
import {Link, Routing} from "../../utils/enum/routing";
import {Navigate, Route, Routes} from "react-router-dom";
import {EditProfile} from "./common/edit-profile/Edit-profile";
import {PacksList} from "./common/packs-list/Packs-list";


type MainType = {};

export const Main: FC<MainType> = ({}) => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<PacksList/>}/>
        <Route path={'/*'} element={<Navigate to={Link.MAIN}/>}/>
        <Route path={Routing.EDIT_PROFILE} element={<EditProfile/>}/>
        <Route path={Routing.EDIT_PROFILE + '/*'} element={<Navigate to={Link.EDIT_PROFILE}/>}/>
      </Routes>
    </>
  );
};
