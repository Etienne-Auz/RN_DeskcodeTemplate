import React, {useContext, useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Context as AuthContext} from '../Globals/Contexts/AuthContext';


/* User Routers */
import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';

import { getValue, setValue} from '../Globals/Utils/SecureStorage';





const DispatchRouter = () => {
    
    /* AuthContext can only be append inside context provider */
    const { user, setbackup, signout } = useContext(AuthContext);


    const searchUserSession = async () => {
        const data = await getValue();
        if(data)
        {
          setbackup(data);
        }
    }
    const logout = async () => {
      await removeValue();
      signout();
    }

      useEffect(() => {
        searchUserSession();
        //logout();
      }, []);

    useEffect(() => {
        const saveUserSession = async () => {
            await setValue(user);
        }
        user.token &&
            saveUserSession();

    }, [user])




    switch(user.role) {
        case 'ADMIN':
        case 'SUPER-ADMIN':
            return <AdminRouter />
        case 'USER':
        default:
            return <UserRouter />
    }
}


export default DispatchRouter;