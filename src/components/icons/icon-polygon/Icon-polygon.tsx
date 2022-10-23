import React, {FC} from 'react';

type IconPolygonType = {
  className?: string
};

export const IconPolygon: FC<IconPolygonType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path d="M5 6 .67 0h8.66L5 6Z" fill="currentColor"/>
    </svg>
  );
};
