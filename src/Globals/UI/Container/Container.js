import React, {useContext} from 'react';

import { 
View
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Container = ({children, style}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            ...style,
            width: style?.width || "100%",
            height: style?.height ||"100%",
            backgroundColor: style?.background || theme.Container.background,
            top: style?.top || null,
            bottom: style?.bottom || null,
            position: style?.position || "relative",
            zIndex: style?.zIndex || 1
        }}
        >
            {children}
        </View>
    )

};

export default Container; 
