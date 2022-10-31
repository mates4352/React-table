import React, {FC} from 'react';

type IconSmallArrowType = {
  className?: string
};

export const IconSmallArrow: FC<IconSmallArrowType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path d="M5 1 1 4.432l4 3.501" stroke="#000"/>
    </svg>
  );
};
