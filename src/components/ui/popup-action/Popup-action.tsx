import React, {FC, memo, ReactNode} from 'react';
import s from './Popup-action.module.scss';
import {AnimatePresence, motion} from "framer-motion";

type PopupActionType = {
  className?: string
  title: string
  children: ReactNode
  isPopup: boolean
  onClickPopup: () => void
};

const animations = {
  initial: {translateY: '-10px', opacity: 0},
  animate: {translateY: 0, opacity: 1},
  exit: {translateY: '10px', opacity: 0},
}

export const PopupAction: FC<PopupActionType> = memo(({
  title,
  children,
  className,
  isPopup,
  onClickPopup,
  ...restProps
}) => {
  return (
    <AnimatePresence>
      {isPopup &&
          <motion.section
              className={s.popup}
              variants={animations}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
          >
              <div className={s.bg} onClick={onClickPopup}></div>
              <div className={s.body}>
                <div className={s.wrap}>
                  <h2 className={s.title}>
                    {title}
                  </h2>
                    <button className={s.close} type={'button'} onClick={onClickPopup}></button>
                </div>

                {children}
              </div>
          </motion.section>
      }
    </AnimatePresence>
  );
})
