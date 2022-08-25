import React, {FC} from 'react';
import s from './Button.module.scss';
import classNames from "classnames/bind";

type ButtonType = {
    type: "button" | "submit" | "reset"
    children: string
    styleRules?: string
    onClickButton?: () => void
};

export const Button: FC<ButtonType> = props => {
    const {
        type,
        styleRules,
        children,
        onClickButton,
    } = props;

    return (
        <button
            className={classNames(s.button, styleRules)}
            type={type}
            onClick={onClickButton}>
            {children}
        </button>
    );
};