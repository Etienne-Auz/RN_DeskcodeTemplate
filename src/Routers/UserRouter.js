import React, {useContext} from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Context as AuthContext} from '../Globals/Contexts/AuthContext';
const Stack = createNativeStackNavigator();

/* Import Screens */
import Login from '../Screens/Login/Login';
import Welcome from '../Screens/Welcome/Welcome';
import Home from '../Screens/Home/Home';
/* Import Screens */

const UserRouter = () => {
    
    const { user } = useContext(AuthContext);

    return (
      <>
      <NavigationContainer>
        <Stack.Navigator>
        {(user.token === null || user.token === undefined) ? (

            <>
            <Stack.Screen options={{headerShown: false}}  name="Login" component={Login} />
            </>

        ) : (
            <Stack.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
            />
        )}
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
}

export default UserRouter