import React, {FC, ReactNode} from 'react';
import {motion} from 'framer-motion';

type AnimationAuthType = {
  children: ReactNode
  className?: string
};

const animations = {
  initial: {opacity: 0, scale: 0.7},
  animate: {opacity: 1, scale: 1},
  exit: {opacity: 0, scale: 0.7},
}

export const AnimationPage: FC<AnimationAuthType> = props => {
  const {
    children,
    className
  } = props;

  return (
    <motion.div
      className={className}
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};