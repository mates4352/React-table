import React, {FC, memo, useState} from 'react';
import s from './Select.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {ButtonPaginationArrow} from "../button-pagination-arrow/Button-pagination-arrow";
import classNames from "classnames";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {IconSmallArrow} from "../../icons/icon-small-arrow/Icon-small-arrow";

type SelectType = {
  select: number
  options: Array<number>
  onClickSelect: (option: number) => void
};

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0},
}

export const Select: FC<SelectType> = memo(({
  select,
  options,
  onClickSelect
}) => {
  const dispatch = useAppDispatch();
  const [selectName, setSelectName] = useState(select)
  const [isOptions, setOptions] = useState<boolean>(false)
  const [arrOptions, setArrOptions] = useState(options)

  return (
    <div className={s.select}>
      <button
        className={s.mainOption}
        type={'button'}
        onClick={() => {setOptions(value => !value)}}>
        {selectName}
        <IconSmallArrow className={classNames(s.icon, isOptions && s.iconActive)}/>
      </button>

      <AnimatePresence>
        {isOptions &&
            <motion.ul className={s.list}
                       variants={animations}
                       initial={'initial'}
                       animate={'animate'}
                       exit={'exit'}>
              {arrOptions.map((option: number) =>
                <li className={s.item} key={option}>
                  <button className={s.option} type={'button'} onClick={() => {
                    const arr = arrOptions.filter(item => option !== item)
                    arr.push(selectName)
                    setArrOptions(arr)
                    setSelectName(option)
                    onClickSelect(option)
                  }}>{option}</button>
                </li>
              )}
            </motion.ul>
        }
      </AnimatePresence>
    </div>
  );
})
