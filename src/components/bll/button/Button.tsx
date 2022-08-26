import React, {FC} from 'react';
import s from './Button.module.scss';
import classNames from "classnames/bind";

type ButtonType = {
    type: "button" | "submit" | "reset"
    buttonType?: 'cansel'
    children: string
    styleRules?: string
    onClickButton?: () => void
};

export const Button: FC<ButtonType> = props => {
    const {
        type,
        buttonType,
        styleRules,
        children,
        onClickButton,
    } = props;

    return (
        <button
            className={classNames(
                s.button,
                buttonType === 'cansel' && s.button_cansel,
                styleRules
            )}
            type={type}
            onClick={onClickButton}>
            {children}
        </button>
    );
};