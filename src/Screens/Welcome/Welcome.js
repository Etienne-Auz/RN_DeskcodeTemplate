import React, {useContext} from 'react';
import { Text, View } from 'react-native';

import {Context as ThemeContext} from '../../Globals/Contexts/ThemeContext';


const Welcome = () => {
    
  const { theme } = useContext(ThemeContext);

    return (
        <View
          style={{
            backgroundColor: theme.colors.background
          }}
        >
          <Text>Hello, world!</Text>
        </View>
      )
};

export default Welcome