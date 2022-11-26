import React, {FC, memo, useRef, useState} from 'react';
import s from './SelectCustom.module.scss';
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import classNames from "classnames";
import {AnimatePresence, motion} from "framer-motion";

type SelectCustomType = {
  title?: string
  options: Array<string>
  onCallback?: (valueOption: string) => void
  setArrayOptions?: (ArrayOptions: Array<string>) => void
};

const animations = {
  initial: {height: 0, opacity: 0, padding: 12, rowGap: 12},
  animate: {height: 'auto', opacity: 1, padding: 12, rowGap: 12},
  exit: {height: 0, opacity: 0, padding: 0, rowGap: 0},
}


export const SelectCustom: FC<SelectCustomType> = memo(({
  options,
  title,
  setArrayOptions,
  ...props
}) => {
  const wrapRef = useRef(null)
  const [isSelect, setSelect] = useState<boolean>(false)
  const onClickOption = (valueOption: string) => () => {
    const deleteNewArrayOptions = options.filter(item => item !== valueOption)
    deleteNewArrayOptions.unshift(valueOption)
    setArrayOptions && setArrayOptions(deleteNewArrayOptions)
  }

  useOnClickOutside(wrapRef, () => setSelect(false))

  return (
    <div className={s.wrap} ref={wrapRef}>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={s.select}>
        <button className={classNames(s.nameSelect, isSelect && s.nameSelectActive)} type={'button'}
                onClick={() => setSelect(value => !value)}>{options[0]}</button>

        <AnimatePresence>
          {isSelect &&
              <motion.ul
                  className={s.list}
                  variants={animations}
                  initial={'initial'}
                  animate={'animate'}
                  exit={'exit'}>

                {options.slice(1).map(item =>
                  <li className={s.item} key={item}>
                    <button className={s.optionButton} type={'button'} onClick={onClickOption(item)}>{item}</button>
                  </li>
                )}
              </motion.ul>
          }
        </AnimatePresence>

      </div>
    </div>
  );
})
