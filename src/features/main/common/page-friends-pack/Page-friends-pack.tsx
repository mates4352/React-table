import React, {FC, useCallback} from 'react';
import s from './Page-friends-pack.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Link} from "../../../../utils/enum/routing";
import {TableFriendsPagePack} from "../../../../components/ui/table-friends-page-pack/Table-friends-page-pack";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {Pagination} from "../../../../components/bll/pagination/Pagination";
import {Title} from "../../../../components/ui/title/Title";
import {Button} from "../../../../components/bll/button/Button";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {setPageCards, setPageCountCards} from "./Page-friends-pack-slice";
import {useNavigate, useParams} from "react-router-dom";
import {getPackLearnCards} from "../page-learn/Page-learn-thunk";

type PageFriendsPackType = {

};

export const PageFriendsPack: FC<PageFriendsPackType> = ({}) => {
  const dispatch = useAppDispatch()
  const params = useParams<{id: string}>()
  const navigate = useNavigate()
  const {page, pageCount, packCards} = useAppSelector(state => state.pagePackFriends)

  const onClickButton = useCallback((button: number) => {
    dispatch(setPageCards(button))
  }, [dispatch])

  const onClickSelect = useCallback((option: number) => {
    dispatch(setPageCountCards(option))
  }, [dispatch])

  const onClickButtonLearn = useCallback((idPack: string) => async () => {
    await dispatch(getPackLearnCards({cardsPack_id: idPack}))
    navigate(Link.PAGE_LEARN + '/' + idPack)
  }, [])

  return (
    <Container className={s.pageFriendsPack} type={'section'}>
      <ButtonBack className={s.buttonBack} to={Link.MAIN}>Back to Packs List</ButtonBack>

      <div className={s.wrap}>
        <Title type={'h2'}>Friend’s Pack</Title>

        <Button className={s.button} type={'button'} onClickButton={onClickButtonLearn(String(params.id))}>Learn to pack</Button>
      </div>

      <TableFriendsPagePack className={s.table}/>

      <Pagination
        page={page}
        pageCount={pageCount}
        maxPageNumber={5}
        pageCurrentCount={packCards.cardsTotalCount}
        onClickButton={onClickButton}
        onClickSelect={onClickSelect}
      />

    </Container>
  );
};
