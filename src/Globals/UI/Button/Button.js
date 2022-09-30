import React, {useContext} from 'react';
import { 
TouchableOpacity,
Text,
StyleSheet
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Button = ({children, onSubmit}) => {

    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    )

};

export default Button; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });