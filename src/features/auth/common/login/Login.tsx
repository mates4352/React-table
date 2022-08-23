import React,{FC} from 'react';
import s from './Login.module.scss';

type LoginType = {

};

export const Login: FC<LoginType> = Props => {
    const {} = Props;

    return (
        <section className={s.login}>
            <h2 className={s.title}>Sign In</h2>

        </section>
    );
};