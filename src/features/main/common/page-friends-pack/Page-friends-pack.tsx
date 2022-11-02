import React, {FC} from 'react';
import s from './Page-friends-pack.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";

type PageFriendsPackType = {

};

export const PageFriendsPack: FC<PageFriendsPackType> = ({}) => {
  return (
    <Container className={s.pageFriendsPack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

    </Container>
  );
};
