import React, {FC, memo, useEffect} from 'react';
import s from './Input-range.module.scss';
import classNames from "classnames";
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";

export type newValueInputRangeType = number | number[];

type InputRangeType = {
  min: number
  max: number
  value: number[]
  title: string
  onChangeValue: (newValue: number[]) => () => void
  setValue: (newValue: number[]) => void
  className?: {
    inputRange?: string
  }
};

export const InputRange: FC<InputRangeType> = memo(({
  min,
  max,
  value,
  title,
  onChangeValue,
  setValue,
  className
}) => {
  const handleChange = (event: Event, newValue: newValueInputRangeType) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    const id = setTimeout(onChangeValue(value), 500)

    return () => clearTimeout(id)
  }, [value])

  return (
    <div className={s.inputRange}>
      {title && <h3 className={s.title}>{title}</h3>}

      <div className={s.wrap}>
        <div className={classNames(s.value, s.value_min,)}>{value[0]}</div>

        <Box sx={{width: 155}}>
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
})
