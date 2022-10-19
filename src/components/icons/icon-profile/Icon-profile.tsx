import React from 'react';
import {FC} from "react";

type IconProfileType = {
  className: string
};

export const IconProfile: FC<IconProfileType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M8 8a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 8 8ZM13.727 14.667C13.727 12.087 11.16 10 8 10s-5.727 2.087-5.727 4.667"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
