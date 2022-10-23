import React, {FC} from 'react';

type IconTeacherType = {
  className?: string
};

export const IconTeacher: FC<IconTeacherType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="m6.7 1.687-4.013 2.62a2.124 2.124 0 0 0 0 3.56l4.013 2.62c.72.473 1.907.473 2.627 0l3.993-2.62a2.124 2.124 0 0 0 0-3.554l-3.993-2.62c-.72-.48-1.907-.48-2.627-.006Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3.753 8.72-.006 3.127c0 .846.653 1.753 1.453 2.02l2.127.706c.366.12.973.12 1.346 0l2.127-.706c.8-.267 1.453-1.174 1.453-2.02V8.753M14.267 10V6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
