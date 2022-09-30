import React, {useContext} from 'react';

import { 
View,
Text
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Card = ({children, left, top, width, height, background}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            left: left || "10%",
            top: top || "10%",
            width: width || "80%",
            height: height ||"40%",
            backgroundColor: background || theme.Card.background
        }}
        >
            {children}
        </View>
    )

};

export default Card; 
