import React, {FC, useEffect} from 'react';
import s from './Page-pack.module.scss'
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {Button} from "../../../../components/bll/button/Button";
import {useParams} from "react-router-dom";
import {getPackCards} from "./Page-pack-thunk";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";


type PagePackType = {};

export const PagePack: FC<PagePackType> = ({}) => {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {cards} = useAppSelector(state => state.pagePack);

  useEffect(() => {
    if(params.id) dispatch(getPackCards(params.id))
  }, [dispatch, params.id])

  return (
    <Container className={s.pagePack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

      {cards.length === 0 &&
          <div className={s.contentNotCards}>
              <Title className={s.title} type={"h2"}>Name Pack</Title>

              <Caption className={s.caption}>This pack is empty. Click add new card to fill this pack</Caption>
              <Button className={s.buttonAddCard} type={'button'}>Add new card</Button>
          </div>
      }
    </Container>
  );
};
