import React, {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import s from './Page-pack.module.scss'
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";
import {Title} from "../../../../components/ui/title/Title";
import {Caption} from "../../../../components/ui/caption/Caption";
import {Button} from "../../../../components/bll/button/Button";
import {useNavigate, useParams} from "react-router-dom";
import {getPackMyCards} from "./Page-pack-thunk";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {PopupNewCard} from "../../../../components/ui/popup-action/popups/popup-new-card/Popup-new-card";
import {TableMyPagePack} from "../../../../components/ui/table-my-page-pack/Table-my-page-pack";
import {searchCard, setPageCards, setPageCountCards, setPopup} from "./Page-pack-slice";
import {PopupCard, PopupPack} from "../../../../utils/enum/popup";
import {InputSearch} from "../../../../components/bll/inputSearch/InputSearch";
import {Pagination} from "../../../../components/bll/pagination/Pagination";
import {PopupDeleteCard} from "../../../../components/ui/popup-action/popups/popup-delete-card/Popup-delete-card";
import {PopupEditCard} from "../../../../components/ui/popup-action/popups/popup-edit-card/Popup-edit-card";
import {ButtonMyPack} from "../../../../components/bll/button-my-pack/Button-my-pack";
import {PopupTitle} from "../../../../components/ui/popup/popups/popup-title/Popup-title";
import {
  PopupActionEditPack
} from "../../../../components/ui/popup-action/popups/popup-action-edit-pack/Popup-action-edit-pack";
import {deletePack, editPack} from "../packs-list/Packs-list-thunk";
import {DataEditPackType} from "../../Main-type";
import {setPopupPack} from "../packs-list/Packs-list-slice";
import {
  PopupActionDeletePack
} from "../../../../components/ui/popup-action/popups/popup-action-delete-pack/Popup-action-delete-pack";
import {AnimationPage} from "../../../../components/animations/animationPage";

type PagePackType = {};

export const PagePack: FC<PagePackType> = ({}) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const {cards, page, pageCount, packCards} = useAppSelector(state => state.pagePack);
  const [isPopupTitle, setPopupTitle] = useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string>('')
  const onChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.currentTarget.value)
  }
  const onOpenPopup = () => {
    dispatch(setPopup({popup: PopupCard.NewCard, isPopup: true}))
  }

  const onClickButton = useCallback((button: number) => {
    dispatch(setPageCards(button))
  }, [dispatch])

  const onClickSelect = useCallback((option: number) => {
    dispatch(setPageCountCards(option))
  }, [dispatch])

  const onSearchCard = () => {
    dispatch(searchCard(valueInput))
  }

  const onOpenPopupTitle = () => {
    setPopupTitle(true)
  }

  const onClosePopupTitle = () => {
    setPopupTitle(false)
  }

  const onPopupEditPackSubmit = useCallback( async (dataEditPack: DataEditPackType) => {
    if(params.id) {
      await dispatch(editPack(({...dataEditPack, _id: params.id})))
      dispatch(setPopupPack({popup: PopupPack.EditPack, isPopup: false}))
      dispatch(getPackMyCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
    }
  }, [params.id, page, pageCount])

  const onClickDeletePack = useCallback(async () => {
    if(params.id) {
      await dispatch(deletePack(params.id))
      await dispatch(setPopupPack({popup: PopupPack.DeletePack, isPopup: false}))
      navigate(Link.MAIN)
    }
  }, [params.id, page, pageCount])

  useEffect(() => {
    if(params.id) dispatch(getPackMyCards({cardsPack_id: params.id, page: page, pageCount: pageCount}))
  }, [dispatch, page, pageCount])

  return (
    <Container className={s.pagePack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

      {cards.length === 0 &&
          <AnimationPage className={s.contentNotCards}>
              <Title className={s.title} type={"h2"}>{packCards.packName ? packCards.packName : 'Name Pack'}</Title>

              <Caption className={s.caption}>This pack is empty. Click add new card to fill this pack</Caption>
              <Button className={s.buttonAddCard} type={'button'} onClickButton={onOpenPopup}>Add new card</Button>
          </AnimationPage>
      }

      {cards.length >= 1 &&
          <>
              <div className={s.wrap}>
                  <div className={s.wrapTitle}>
                      <Title type={'h2'}>{packCards.packName ? packCards.packName : 'Name Pack'}</Title>
                      <ButtonMyPack onClickButton={onOpenPopupTitle}/>
                      <PopupTitle isPopupTitle={isPopupTitle} onClosePopup={onClosePopupTitle}/>
                  </div>

                  <Button className={s.buttonAddCard} type={'button'} onClickButton={onOpenPopup}>Add new card</Button>
              </div>

              <InputSearch
                  className={{inputSearch: s.inputSearch}}
                  type={'text'}
                  placeholder={'Provide your text'}
                  title={'Search'}
                  value={valueInput}
                  onSearchTable={onSearchCard}
                  onChange={onChangeInputSearch}
              />

              <AnimationPage>
                  <TableMyPagePack className={s.table} cards={cards}/>
              </AnimationPage>

              <Pagination
                  page={page}
                  pageCount={pageCount}
                  maxPageNumber={5}
                  pageCurrentCount={packCards.cardsTotalCount}
                  onClickButton={onClickButton}
                  onClickSelect={onClickSelect}
              />
          </>
      }

      <PopupActionEditPack onSubmit={onPopupEditPackSubmit}/>
      <PopupActionDeletePack onDeletePack={onClickDeletePack}/>
      <PopupNewCard/>
      <PopupDeleteCard/>
      <PopupEditCard/>
    </Container>
  );
};
