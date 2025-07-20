import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        MrDafoe: require('../assets/fonts/MrDafoe-Regular.ttf'),
        BungeeTint: require('../assets/fonts/BungeeInline-Regular.ttf'),
        Lato: require('../assets/fonts/Lato-Regular.ttf'),
        LatoBlack: require('../assets/fonts/Lato-Black.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return fontsLoaded;
};
