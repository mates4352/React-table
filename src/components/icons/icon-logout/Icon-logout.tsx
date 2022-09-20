import React, {FC} from 'react';

type IconLogoutType = {
  className: string
};

export const IconLogout: FC<IconLogoutType> = ({
  ...resetProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...resetProps}
    >
      <path
        d="m11.627 9.747 1.706-1.707-1.706-1.707M6.507 8.04h6.78M7.84 13.333c-2.947 0-5.333-2-5.333-5.333S4.893 2.667 7.84 2.667"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};