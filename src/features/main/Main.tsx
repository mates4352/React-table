import React, {FC} from 'react';
import {Link} from "../../utils/enum/routing";
import {LinkCommon} from "../../components/ui/linkCommon/LinkCommon";

type MainType = {};

export const Main: FC<MainType> = ({}) => {
  return (
    <div>
      <LinkCommon routing={Link.EDIT_PROFILE}>main</LinkCommon>
    </div>
  );
};