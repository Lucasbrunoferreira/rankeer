import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@RANKEER:USER'

export const setUser= async (value: string) => {
  return await AsyncStorage.setItem(STORAGE_KEY, value)
}

export const getUser= async () => {
  return await AsyncStorage.getItem(STORAGE_KEY)
}

export const clearUser= async () => {
  return await AsyncStorage.removeItem(STORAGE_KEY)
}
