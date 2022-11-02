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
import {PopupAction} from "../../../../components/ui/popup-action/Popup-action";
import {ContentNewCard} from "../../../../components/ui/popup-action/content/content-new-card/Content-new-card";
import {PopupNewCard} from "../../../../components/ui/popup-action/popups/popup-new-card/Popup-new-card";
import {cardsType} from "./Page-pack-type";
import {TableMyPagePack} from "../../../../components/ui/table-my-page-pack/Table-my-page-pack";


type PagePackType = {};

export const PagePack: FC<PagePackType> = ({}) => {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {cards} = useAppSelector(state => state.pagePack);

  useEffect(() => {
    if(params.id) dispatch(getPackCards({cardsPack_id: params.id}))
  }, [dispatch, params.id])

  return (
    <Container className={s.pagePack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

      {cards === [] &&
          <div className={s.contentNotCards}>
              <Title className={s.title} type={"h2"}>Name Pack</Title>

              <Caption className={s.caption}>This pack is empty. Click add new card to fill this pack</Caption>
              <Button className={s.buttonAddCard} type={'button'}>Add new card</Button>
          </div>
      }

      {cards.length >= 1 &&
        <TableMyPagePack cards={cards}/>
      }

    <PopupNewCard/>
    </Container>
  );
};
