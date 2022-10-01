import React, {useContext} from 'react';
import { Text, View } from 'react-native';

import {Context as ThemeContext} from '../../Globals/Contexts/ThemeContext';
import Title from '../../Globals/UI/Title/Title';


const Welcome = () => {
    
  const { theme } = useContext(ThemeContext);

    return (
        <View
          style={{
            backgroundColor: theme.colors.background
          }}
        >
          <Title>I'am Admin !</Title>
        </View>
      )
};

export default Welcome