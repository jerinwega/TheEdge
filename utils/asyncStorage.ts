import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string | object): Promise<void> => {
  try {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    console.log('Error storing value for key:', key, error);
  }
};


export const getData = async <T = any>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      try {
        return JSON.parse(value) as T;
      } catch {
        // Return as string if it's not JSON
        return value as unknown as T;
      }
    }
    return null;
  } catch (error) {
    console.log('Error retrieving value for key:', key, error);
    return null;
  }
};