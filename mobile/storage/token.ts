import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@RANKEER:TOKEN'

export const setToken = async (value: string) => {
  return await AsyncStorage.setItem(STORAGE_KEY, value)
}

export const getToken = async () => {
  return await AsyncStorage.getItem(STORAGE_KEY)
}

export const clearToken = async () => {
  return await AsyncStorage.removeItem(STORAGE_KEY)
}
