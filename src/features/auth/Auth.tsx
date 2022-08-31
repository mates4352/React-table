import React, {FC} from "react";
import s from './Auth.module.scss';
import classNames from "classnames/bind";
import {Outlet} from "react-router-dom";

type AuthProps = {

};

export const Auth: FC<AuthProps> = Props => {
    const {} = Props;

    return (
        <section className={classNames(s.auth, s.container)}>
            <div className={s.body}>
                <Outlet/>
            </div>
        </section>
    );
};