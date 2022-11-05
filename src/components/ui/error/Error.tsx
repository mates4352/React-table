import React, {FC} from 'react';
import s from './Error.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import classNames from "classnames";

type ErrorType = {
  isError: boolean
  error: string
  className?: string
};

const animations = {
  initial: {height: 0, opacity: 0},
  animate: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0, marginBottom: 0},
}

export const Error: FC<ErrorType> = ({
  error,
  isError,
  className,
  ...restProps
}) => {
  return (
    <AnimatePresence>
      {isError && (
        <motion.small
          className={classNames(s.error, className)}
          variants={animations}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}>
          {error}
        </motion.small>
      )}
    </AnimatePresence>
  );
};
