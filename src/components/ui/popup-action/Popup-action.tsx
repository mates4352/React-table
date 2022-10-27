import React, {FC, memo} from 'react';
import s from './Popup-action.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {ContentNewPack} from "./content/content-new-pack/Content-new-pack";
import {ContentEditPack} from "./content/content-edit-pack/Content-edit-pack";
import {ContentDeletePack} from "./content/content-delete-pack/Content-delete-pack";

type ChildrenType = ReturnType<typeof ContentNewPack> | ReturnType<typeof ContentEditPack> | ReturnType<typeof ContentDeletePack>
type PopupActionType = {
  className?: string
  title: string
  children: ChildrenType
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
