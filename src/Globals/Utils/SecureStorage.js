import EncryptedStorage from 'react-native-encrypted-storage';
import {STORAGE_KEY} from '@env';

export const setValue = async (user) => {
    try {
      await EncryptedStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        return true;
    } catch (error) {
        return false;
    }
  }
export const getValue = async() => {
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
export const removeValue = async() => {
    try {
      await EncryptedStorage.removeItem(STORAGE_KEY);
      console.log(`The value with key ${STORAGE_KEY} was succesfully deleted`);
    } catch (error) {
      console.log(
        `The value with key ${STORAGE_KEY} could not be deleted - ${error}`
      );
    }
  }
export const clearValues = async() => {
    try {
      await EncryptedStorage.clear();
      console.log('The storage has been successfully cleared');
    } catch (error) {
      console.log(`The storage could not be cleared - ${error}`);
    }
  }