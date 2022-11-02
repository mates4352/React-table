import React, {FC} from 'react';
import {Link, Routing} from "../../utils/enum/routing";
import {Navigate, Route, Routes} from "react-router-dom";
import {EditProfile} from "./common/edit-profile/Edit-profile";
import {PacksList} from "./common/packs-list/Packs-list";
import {PagePack} from "./common/page-pack/Page-pack";
import {PageFriendsPack} from "./common/page-friends-pack/Page-friends-pack";


type MainType = {};

export const Main: FC<MainType> = ({}) => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<PacksList/>}/>
        <Route path={'/*'} element={<Navigate to={Link.MAIN}/>}/>
        <Route path={Routing.EDIT_PROFILE} element={<EditProfile/>}/>
        <Route path={Routing.EDIT_PROFILE + '/*'} element={<Navigate to={Link.EDIT_PROFILE}/>}/>
        <Route path={Routing.PAGE_PACK} element={<PagePack/>}>
          <Route path={':id'} element={<PagePack/>}/>
        </Route>
        <Route path={Routing.PAGE_PACK + '/*'} element={<Navigate to={Link.PAGE_PACK}/>}/>
        <Route path={Routing.PAGE_FRIENDS_PACK} element={<PageFriendsPack/>}>
          <Route path={':id'} element={<PageFriendsPack/>}/>
        </Route>
        <Route path={Routing.PAGE_FRIENDS_PACK + '/*'} element={<Navigate to={Link.PAGE_FRIENDS_PACK}/>}/>
      </Routes>
    </>
  );
};
