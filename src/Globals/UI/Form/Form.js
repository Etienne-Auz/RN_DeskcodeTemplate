import React, {useContext, useState} from 'react';

import { 
TouchableOpacity,
Text,
StyleSheet
} from 'react-native';

import { FetchAPI } from '../../Utils/RequestAPI';
import { Context as AuthContext } from '../../Contexts/AuthContext';
import {Context as ThemeContext} from '../../Contexts/ThemeContext';

import Button from '../Button/Button';
import Input from '../Input/Input';

import { removeValue } from '../../Utils/SecureStorage';

const Form = ({fields, submitLabel, type, style}) => {
    const {signin, signout} = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);


    const body = {};
    const onSubmit = async () => {
        switch(type) {
            case "LOGIN":
                try {
                    const {data} = await FetchAPI("LOGIN", {body: body});
                    signin(data);
                }
                catch(e) {
                    console.log("test", e);
                }
                break;

            case "LOGOUT":
            default:
                await removeValue();
                signout();
                break;
        }
    };


    return (
        <>
        {fields && fields.map((elem) => {
            return (
            <Input
               placeholder={elem.placeholder || ""} 
               onChangeText={text => body[elem.name] = text}
               type={elem.type}
               required={elem.required}
            />);
        })}
        <Button onSubmit={onSubmit}>{submitLabel || "Envoyer"}</Button>
        </>
    )

};

export default Form; 