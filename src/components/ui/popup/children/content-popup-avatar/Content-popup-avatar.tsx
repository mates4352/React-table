import React, {FC, memo} from 'react';
import s from './Content-popup-avatar.module.scss';
import {ButtonLinear} from "../../../../bll/button-linear/Button-linear";
import {IconProfile} from "../../../../icons/icon-profile/Icon-profile";
import {IconLogout} from "../../../../icons/icon-logout/Icon-logout";
import {Link} from "../../../../../utils/enum/routing";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {logout} from "../../../../../features/main/Main-thunk";

type ContentPopupAvatarType = {};

export const ContentPopupAvatar: FC<ContentPopupAvatarType> = memo(({}) => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout())
  }
  return (
    <div className={s.content}>
      <ButtonLinear
        link
        href={Link.EDIT_PROFILE}
        icon={<IconProfile className={s.icon}/>}>
        Profile
      </ButtonLinear>

      <ButtonLinear
        button
        icon={<IconLogout className={s.icon}/>}
        onClickButton={onLogout}>
        Log out
      </ButtonLinear>
    </div>
  );
})
