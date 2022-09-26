import React, {FC} from 'react';
import {Link, Routing} from "../../utils/enum/routing";
import {LinkCommon} from "../../components/ui/linkCommon/LinkCommon";
import {Navigate, Route, Routes} from "react-router-dom";
import {EditProfile} from "./common/edit-profile/Edit-profile";


type MainType = {};

export const Main: FC<MainType> = ({}) => {
  return (
    <div>
      <Routes>
        <Route index element={<LinkCommon routing={Link.EDIT_PROFILE}>EDIT_PROFILE</LinkCommon>}/>
        <Route path={Routing.EDIT_PROFILE} element={<EditProfile/>}/>
        <Route path={Routing.EDIT_PROFILE + '/*'} element={<Navigate to={Link.EDIT_PROFILE}/>}/>
      </Routes>
    </div>
  );
};