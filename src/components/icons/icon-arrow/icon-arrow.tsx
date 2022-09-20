import React, {FC} from 'react';

type IconArrowType = {
  className: string
};

export const IconArrow: FC<IconArrowType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M16 5.5H2m0 0L6.667 1M2 5.5 6.667 10"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
};