import React, {FC} from 'react';

type IconSearchType = {
  className: string
};

export const IconSearch: FC<IconSearchType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.571 6.857a4.714 4.714 0 1 1-9.428 0 4.714 4.714 0 0 1 9.428 0Zm-1.042 4.379a5.714 5.714 0 1 1 .707-.707l2.832 2.832a.5.5 0 0 1-.707.707l-2.832-2.832Z"
        fill="currentColor"
        opacity={0.4}
      />
    </svg>
  );
};
