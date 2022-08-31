import React, {FC, memo} from 'react';
import s from './Header.module.scss'
import classNames from "classnames/bind";
import logo from './../../../assets/images/logo.svg'
import {Button} from "../../bll/button/Button";
import {useNavigate} from "react-router-dom";
import {Routing} from "../../../utils/enum/routing";

type HeaderType = {

};

export const Header: FC<HeaderType> = memo(props => {
    const navigate = useNavigate();
    const onClickButtonRedirect = () => {
        navigate(Routing.AUTH)
    }
    return (
        <header className={s.header}>
            <div className={classNames(s.wrap, s.container)}>
                <img className={s.logo} src={logo}/>

                <Button
                    styleRules={s.button}
                    type={'button'}
                    onClickButton={onClickButtonRedirect}>
                    Sign in
                </Button>
            </div>
        </header>
    );
})