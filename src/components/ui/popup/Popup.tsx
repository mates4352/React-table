import React, {memo, ReactNode, useRef} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {FC} from "react";
import s from './Popup.module.scss';
import classNames from "classnames";
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";


type PopupType = {
  children: ReactNode
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
