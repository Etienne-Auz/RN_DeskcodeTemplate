import React, {useContext, useEffect} from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Context as AuthContext} from '../Globals/Contexts/AuthContext';


const Stack = createNativeStackNavigator();

/* User Routers */
import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';
/* User Routers */



const DispatchRouter = () => {
    
    /* AuthContext can only be append inside context provider */
    const { user } = useContext(AuthContext);



    switch(user.role) {
        case 'ADMIN':
            return <AdminRouter />
        case 'USER':
        default:
            return <UserRouter />
    }
}

export default DispatchRouter;