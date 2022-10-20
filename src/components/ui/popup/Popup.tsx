import React, { memo, useRef} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {FC} from "react";
import s from './Popup.module.scss';
import classNames from "classnames/bind";
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import {ContentPopupAvatar} from "./children/content-popup-avatar/Content-popup-avatar";

type childrenType = ReturnType<typeof ContentPopupAvatar>
type PopupType = {
  children: childrenType
  className?: string
  isPopup: boolean
  onClickPopup?: () => void
  onClosePopup: () => void
};

const animations = {
  initial: {translateY: '-10px', opacity: 0},
  animate: {translateY: 0, opacity: 1},
  exit: {translateY: '10px', opacity: 0},
}

export const Popup: FC<PopupType> = memo(({
  className,
  isPopup,
  children,
  onClosePopup,
  ...restProps
}) => {
  const popupRef = useRef(null);
  useOnClickOutside(popupRef, onClosePopup);

  return (
    <AnimatePresence>
      {isPopup &&
          <motion.div
              className={classNames(s.popup, className)}
              variants={animations}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              ref={popupRef}
              {...restProps}
          >
            {children}
          </motion.div>
      }
    </AnimatePresence>
  );
})
