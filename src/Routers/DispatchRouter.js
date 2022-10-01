import React, {useContext, useEffect} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Context as AuthContext} from '../Globals/Contexts/AuthContext';


const Stack = createNativeStackNavigator();

/* User Routers */
import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';
import EncryptedStorage from 'react-native-encrypted-storage';
/* User Routers */



const DispatchRouter = () => {
    
    /* AuthContext can only be append inside context provider */
    const { user, setbackup, signout } = useContext(AuthContext);

    const STORAGE_KEY = "USER_SESSION";

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

      React.useEffect(() => {
        searchUserSession();
        //logout();
      }, []);

    useEffect(() => {
        const saveUserSession = async () => {
            await setValue();
        }
        user.token &&
            saveUserSession();

    }, [user])


    const setValue = async () => {
        try {
          await EncryptedStorage.setItem(STORAGE_KEY, JSON.stringify(user));
            return true;
        } catch (error) {
            return false;
        }
      }

    const getValue = async() => {
        try {
          const data = await EncryptedStorage.getItem(STORAGE_KEY);
    
          if (data) {
            return data;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        } 
    }

    /* Unused for now */
    const removeValue = async() => {
        try {
          await EncryptedStorage.removeItem(STORAGE_KEY);
          console.log(`The value with key ${STORAGE_KEY} was succesfully deleted`);
        } catch (error) {
          console.log(
            `The value with key ${STORAGE_KEY} could not be deleted - ${error}`
          );
        }
      }

    /* Unused for now */
    const clearValues = async() => {
        try {
          await EncryptedStorage.clear();
          console.log('The storage has been successfully cleared');
        } catch (error) {
          console.log(`The storage could not be cleared - ${error}`);
        }
      }

    console.log(user);

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