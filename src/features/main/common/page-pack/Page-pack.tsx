import React, {FC, useEffect} from 'react';
import s from './Page-pack.module.scss'
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {Button} from "../../../../components/bll/button/Button";


type PagePackType = {

};

export const PagePack: FC<PagePackType> = ({}) => {

  useEffect(()=> {

  }, [])

  return (
    <Container className={s.pagePack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>
      <div className={s.contentNotCards}>
        <Title className={s.title} type={"h2"}>Name Pack</Title>

        <Caption className={s.caption}>This pack is empty. Click add new card to fill this pack</Caption>
        <Button className={s.buttonAddCard} type={'button'}>Add new card</Button>
      </div>
    </Container>
  );
};
