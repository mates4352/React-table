import React, {FC} from 'react';

type IconEllipseType = {
  className: string
};

export const IconEllipse: FC<IconEllipseType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <circle cx={12} cy={12} r={8.5} stroke="#0D0C0B" />
      <circle cx={12.001} cy={8.5} r={0.875} fill="#000" />
      <circle cx={12.001} cy={12} r={0.875} fill="#000" />
      <circle cx={12.001} cy={15.5} r={0.875} fill="#000" />
    </svg>
  );
};
