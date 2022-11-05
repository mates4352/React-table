import React, {FC, memo} from 'react';
import s from './Button-action.module.scss';
import {IconDelete} from "../../icons/icon-delete/Icon-delete";
import {IconEdit} from "../../icons/icon-edit/Icon-edit";
import {IconTeacher} from "../../icons/icon-teacher/Icon-teacher";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";
import classNames from "classnames";

export type buttonActionType = TypeButtonAction.DELETE | TypeButtonAction.EDIT | TypeButtonAction.TEACHER
type ButtonActionType = {
  className?: string
  typeButton: buttonActionType
  onClickButton?: () => void
};

export const ButtonAction: FC<ButtonActionType> = memo(({
  className,
  typeButton,
  onClickButton,
  ...restProps
}) => {
  return (
    <button
      className={classNames(s.button, s.className)}
      type={'button'}
      onClick={onClickButton}
      {...restProps}>
      {typeButton === TypeButtonAction.DELETE && <IconDelete className={classNames(s.icon, s.iconDelete)}/>}
      {typeButton === TypeButtonAction.EDIT && <IconEdit className={classNames(s.icon, s.iconEdit)}/>}
      {typeButton === TypeButtonAction.TEACHER && <IconTeacher className={classNames(s.icon, s.iconTeacher)}/>}
    </button>
  );
})
