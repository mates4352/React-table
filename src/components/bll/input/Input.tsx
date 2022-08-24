import React, {ChangeEvent, FC, memo, useState} from 'react';
import s from './Input.module.scss';
import classNames from "classnames/bind";
import {IconEye} from "../../icons/eye/Eye";

type InputType = {
    value: string
    label: string
    error?: string
    name: string
    type: string
    id: string
    stylesRules?: string // кастомные стили для компоненты через css var().
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: FC<InputType> = memo(({
        label,
        error,
        type,
        id,
        stylesRules,
        ...props
    }) => {
    const [typeInput, setTypeInput] = useState<string>(type);
    const isType = typeInput === 'password' ? 'text' : 'password';
    const editTypeInput = (type: string) => () => {
        setTypeInput(type)
    }

    return (
        <div className={classNames(s.input, stylesRules)}>
            <input
                className={s.field}
                type={typeInput}
                id={id}
                {...props}
            />

            <label
                className={s.label}
                htmlFor={id}>
                {label}
            </label>

            {type === 'password' &&
                <button
                    className={s.button}
                    type={'button'}
                    onClick={editTypeInput(isType)}>
                    <IconEye></IconEye>
                </button>
            }

            <div className={classNames(s.line, error && s.line_error)}></div>

            {error && <small className={s.error}>{error}</small>}
        </div>
    );
})