import React, {FC} from 'react';

type IconPhotoType = {
  className: string
};

export const IconPhoto: FC<IconPhotoType> = ({
  ...restProps
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <circle cx={16} cy={16} r={15.5} fill="gray" style={{strokeWidth: 'var(--c-circle-stroke-width, 1px)', stroke: 'var(--c-circle-stroke, #fff)', transition: 'stroke 400ms ease, stroke-width 500ms ease'}}/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18.844a2.489 2.489 0 1 0 0-4.977 2.489 2.489 0 0 0 0 4.977Zm0-.622a1.867 1.867 0 1 0 0-3.733 1.867 1.867 0 0 0 0 3.733Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.997 11.378c-.746-.686-1.433-1.245-3.019-1.245s-2.273.56-3.019 1.245H10.4c-1.03 0-1.867.835-1.867 1.866v6.223c0 1.03.836 1.866 1.867 1.866h11.2a1.867 1.867 0 0 0 1.867-1.866v-6.223c0-1.03-.836-1.866-1.867-1.866h-2.603Zm-.244.622-.065-.06-.18-.166a5.408 5.408 0 0 0-.665-.537c-.422-.278-.95-.482-1.865-.482-.914 0-1.443.204-1.865.482a5.408 5.408 0 0 0-.666.537l-.18.166-.065.06H10.4c-.687 0-1.244.557-1.244 1.244v6.223c0 .687.557 1.244 1.244 1.244h11.2c.687 0 1.244-.557 1.244-1.244v-6.223c0-.687-.557-1.244-1.244-1.244h-2.847Z"
        fill="#fff"
      />
    </svg>
  );
};