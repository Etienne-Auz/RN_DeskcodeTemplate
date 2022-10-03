import React, {useContext} from 'react';

import { 
View,
Text
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Card = ({children, style}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            ...style,
            left: style?.left || "10%",
            top: style?.top || "10%",
            width: style?.width || "80%",
            height: style?.height ||"40%",
            backgroundColor: style?.background || theme.Card.background
        }}
        >
            {children}
        </View>
    )

};

export default Card; 
