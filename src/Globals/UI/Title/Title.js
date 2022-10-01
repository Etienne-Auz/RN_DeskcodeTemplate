import React, {useContext} from 'react';

import { 
TextInput,
StyleSheet,
Text
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Title = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Text style={{
          color: theme.Title.color || "red",
          width: "100%",
          textAlign: "center",
          marginTop: 100,
          fontSize: 40,
          fontWeight: "bold"
        }}
        >
          {children}
        </Text>
    )

};


export default Title;