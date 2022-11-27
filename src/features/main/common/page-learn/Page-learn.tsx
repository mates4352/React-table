import React, {FC, useEffect, useState} from 'react';
import s from './Page-learn.module.scss';
import {Container} from "../../../../components/ui/container/Container";
import {ButtonBack} from "../../../../components/bll/button-back/Button-back";
import {Title} from "../../../../components/ui/title/Title";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {Button} from "../../../../components/bll/button/Button";
import classNames from "classnames";
import {InputRadio} from "../../../../components/bll/inputRadio/InputRadio";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {getPackLearnCards} from "./Page-learn-thunk";
import {useNavigate, useParams} from "react-router-dom";
import {updateRating} from "../../Main-thunk";
import {Link} from "../../../../utils/enum/routing";
import {fitlerCards} from "./Page-learn-slice";
import {AnimationPage} from "../../../../components/animations/animationPage";
import {AnimatePresence, motion} from "framer-motion";

type PageLearnType = {};

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0},
}

export const PageLearn: FC<PageLearnType> = ({
  ...props
}) => {
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const navigate = useNavigate();
  const {packCards, cards} = useAppSelector(state => state.PageLearn)
  const [isOpenContent, setContent] = useState(false);
  const [rating, setRating] = useState<number>(0)
  const onClickInput = (value: number) => () => {
    setRating(value)
  }
  const onClickUpdateRating = (value: number | undefined, id: string | undefined) => async() => {
    if(value && id) {
      await dispatch(updateRating({grade: value, card_id: id}))
      if(cards.length === 1) {
        navigate(Link.MAIN)
      } else {
        await dispatch(fitlerCards(cards[0]._id))
        setContent(false)
        setRating(0)
      }
    }
  }

  useEffect(() => {
    if(!cards[0] && params.id) {
      dispatch(getPackLearnCards({cardsPack_id: params.id, pageCount: 10}))
    }
  }, [])

  console.log(rating)

  return (
    <Container className={s.PageLearn} type={'section'}>
      <ButtonBack className={s.buttonBack} to={-1}>Back to Packs List</ButtonBack>

      <Title className={s.title} type={'h2'}>Learn {packCards.packName ? packCards.packName : '“Pack Name”'}</Title>

      <AnimationPage>
        <div className={s.body}>
          <p className={s.text}>
            <span>Question:</span>
            {cards[0] && cards[0].question.includes('data:image') ?
              <img className={s.image} src={cards[0].question} alt=""/>
              :
              cards[0].question
            }
          </p>
          <p className={s.subText}>Количество попыток ответов на вопрос: {cards.length}</p>


          <AnimatePresence>
            {isOpenContent &&
                <motion.div
                    className={s.wrap}
                    variants={animations}
                    initial={'initial'}
                    animate={'animate'}
                    exit={'exit'}>
                    <p className={s.text}>
                        <span>Answer:</span>
                      {cards[0] && cards[0].answer.includes('data:image') ?
                        <img className={s.image} src={cards[0].answer} alt=""/>
                        :
                        cards[0].answer
                      }
                    </p>
                    <p className={classNames(s.text, s.textRate)}>Rate yourself:</p>

                    <ul className={s.list}>
                        <li className={s.item}>
                            <InputRadio name={'rario'} text={'Did not know'} onClickInputRadio={onClickInput(1)}/>
                        </li>

                        <li className={s.item}>
                            <InputRadio name={'rario'} text={'Forgot'} onClickInputRadio={onClickInput(2)}/>
                        </li>

                        <li className={s.item}>
                            <InputRadio name={'rario'} text={'A lot of thought'} onClickInputRadio={onClickInput(3)}/>
                        </li>

                        <li className={s.item}>
                            <InputRadio name={'rario'} text={'Сonfused'} onClickInputRadio={onClickInput(4)}/>
                        </li>

                        <li className={s.item}>
                            <InputRadio name={'rario'} text={'Knew the answer'} onClickInputRadio={onClickInput(5)}/>
                        </li>
                    </ul>


                    <Button
                        className={s.button}
                        buttonType={'common'}
                        type={'button'}
                        disabled={rating === 0}
                        onClickButton={onClickUpdateRating(rating, cards[0]._id)}
                    >
                        Next question
                    </Button>
                </motion.div>
            }
          </AnimatePresence>

          {!isOpenContent && <Button className={s.button} buttonType={'common'} type={'button'}
                                     onClickButton={() => setContent(true)}>Next</Button>}
        </div>
      </AnimationPage>


    </Container>
  );
};
