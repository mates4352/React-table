import React, {FC} from 'react';
import {motion} from 'framer-motion';

type AnimationAuthType = {
  children: any
};

const animations = {
  initial: {opacity: 0, scale: 1.5},
  animate: {opacity: 1, scale: 1},
  exit: {opacity: 0, scale: 0.7},
}

export const AnimationAuth: FC<AnimationAuthType> = ({children}) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};