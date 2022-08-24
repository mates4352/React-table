import React, {ChangeEvent, FC, useState} from 'react';
import s from './Login.module.scss';
import {Input} from "../../../../components/bll/input/Input";

type LoginType = {

};

export const Login: FC<LoginType> = Props => {
    const {} = Props;
    const [valueInput, setValueInput]= useState<string>('')

    return (
        <section className={s.login}>
            <h2 className={s.title}>Sign In</h2>

            <Input
                value={valueInput}
                label={'email'}
                name={'email'}
                type={'email'}
                id={'email'}
                stylesRules={s.ddd}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setValueInput(event.currentTarget.value)}/>
        </section>
    );
};