import React, {FC, memo, useEffect, useState} from 'react';
import s from './Alert.module.scss';
import classNames from "classnames/bind";
import {LoadingType} from "../../../app/App-type";
import {AnimatePresence, motion} from "framer-motion";
import {Staatuses} from "../../../utils/enum/staatuses";

type AlertType = {
  className?: string
  status: LoadingType
};

const animations = {
  initial: {translateX: '-50%', translateY: '140%', opacity: 0},
  animate: {translateX: '-50%', translateY: 0, opacity: 1},
  exit: {translateX: '-50%', translateY: '140%', opacity: 0},
}

export const Alert: FC<AlertType> = memo(({
  className,
  status,
}) => {
  const statusPending = status === Staatuses.PENDING;
  const statusSucceeded = status === Staatuses.SUCCEEDED;
  const statusFailed = status === Staatuses.FAILED;
  const [isAlert, setAlert] = useState<boolean>(false)

  useEffect(() => {
    setAlert(true)

    const timeoutId = setTimeout(() => {
      setAlert(false)
    }, 1500)

    return () => clearTimeout(timeoutId)
  }, [status])

  return (
    <AnimatePresence>
      {isAlert &&
          <motion.div
              className={classNames(
                s.alert,
                statusPending && s.pending,
                statusSucceeded && s.succeeded,
                statusFailed && s.failed,
                className
              )}
              variants={animations}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
          >
            {statusPending && 'Ожидание!'}
            {statusSucceeded && 'Успешно!'}
            {statusFailed && 'Не удалось!'}
          </motion.div>
      }
    </AnimatePresence>
  );
})