import React, {useContext} from 'react';
import { 
TouchableOpacity,
Text,
StyleSheet
} from 'react-native';

import {
  NavigationContext,
} from '@react-navigation/native';


const Link = ({children, target, style}) => {
  const navigation = React.useContext(NavigationContext);
    return (
        <TouchableOpacity
        style={{
          ...styles.button,
          ...style
        }}
        onPress={() => navigation.navigate(`${target}`)}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    )

};

export default Link; 

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