import React, {useContext} from 'react';

import { 
View
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Container = ({children, width, height, background}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            width: width || "100%",
            height: height ||"100%",
            backgroundColor: background || theme.Container.background
        }}
        >
            {children}
        </View>
    )

};

export default Container; 
