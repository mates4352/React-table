import React, {FC, useEffect} from 'react';
import s from './Input-range.module.scss';
import classNames from "classnames/bind";
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";

export type newValueInputRangeType = number | number[];

type InputRangeType = {
  min: number
  max: number
  title: string
  onChangeValue?: (newValue: newValueInputRangeType) => void
  className?: {
    inputRange?: string
  }
};

export const InputRange: FC<InputRangeType> = ({
  min,
  max,
  title,
  onChangeValue,
  className
}) => {
  const [value, setValue] = React.useState<number[]>([min, max]);

  const handleChange = (event: Event, newValue: newValueInputRangeType) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      onChangeValue && onChangeValue(value)
    }, 300)
    return () => clearTimeout(idTimeout)
  }, [value[0], value[1]])

  return (
    <div className={s.inputRange}>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={s.wrap}>
        <div className={classNames(s.value, s.value_min,)}>{value[0]}</div>

        <Box sx={{ width: 155 }}>
          <Slider
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            getAriaLabel={() => 'Temperature range'}
            valueLabelDisplay="auto"
          />
        </Box>

        <div className={classNames(s.value, s.value_max,)}>{value[1]}</div>
      </div>
    </div>
  );
};
