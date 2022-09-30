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


const Form = ({fields, submitLabel, type}) => {
    const {signin} = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);


    const body = {};
    const onSubmit = async () => {
        try {
            const {data} = await FetchAPI("LOGIN", {body: body});
            signin(data);
        }
        catch(e) {
            console.log("test", e);
        }
    };


    return (
        <>
        {fields.map((elem) => {
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