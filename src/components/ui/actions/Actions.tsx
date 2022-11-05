import React, {FC, memo} from 'react';
import s from './Actions.module.scss';
import {ButtonAction, buttonActionType} from "../../bll/button-action/Button-action";
import classNames from "classnames";
import {TypeButtonAction} from "../../../utils/enum/type-button-action";

type ActionsType = {
  className?: string
  showActions: Array<buttonActionType>
  onClickButtonTeacher?: () => void
  onClickButtonEdit?: () => void
  onClickButtonDelete?: () => void
};

export const Actions: FC<ActionsType> = memo(({
  onClickButtonTeacher,
  onClickButtonEdit,
  onClickButtonDelete,
  className,
  showActions
}) => {
  return (
    <div className={classNames(s.actions, className)}>
      {showActions.includes(TypeButtonAction.TEACHER) &&
        <ButtonAction typeButton={TypeButtonAction.TEACHER} onClickButton={onClickButtonTeacher}/>
      }
      {showActions.includes(TypeButtonAction.EDIT) &&
          <ButtonAction typeButton={TypeButtonAction.EDIT} onClickButton={onClickButtonEdit}/>
      }
      {showActions.includes(TypeButtonAction.DELETE) &&
          <ButtonAction typeButton={TypeButtonAction.DELETE} onClickButton={onClickButtonDelete}/>
      }
    </div>
  );
})
