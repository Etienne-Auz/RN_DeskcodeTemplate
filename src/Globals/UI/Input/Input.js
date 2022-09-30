import React, {useContext} from 'react';

import { 
TextInput,
StyleSheet
} from 'react-native';

import {Context as ThemeContext} from '../../Contexts/ThemeContext';


const Input = ({placeholder, onChangeText, required, type}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        required={required}
        onChangeText={onChangeText ||  null}
        autoComplete={type}
        autoCapitalize={"none"}
      />
    )

};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Input;