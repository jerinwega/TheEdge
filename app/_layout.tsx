import AnimatedSplashScreen from '@/components/AnimatedSplashScreen';
import CustomTabBarButton from '@/components/CustomTabBarButton';
import '@/global.css';
import { useCustomFonts } from '@/hooks/useCustomFonts';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';


// Prevent splash from auto hiding
// SplashScreen.preventAutoHideAsync();

const { width } = Dimensions.get('window');
const horizontalMargin = Math.min(width * 0.28, 105); // cap at 105

export default function RootLayout() {

  const fontsLoaded = useCustomFonts();
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      // SplashScreen.hideAsync(); // Hide native splash
      setAppReady(true);
    }
  }, [fontsLoaded]);

  if (!appReady || !splashAnimationFinished) {
    return <AnimatedSplashScreen onAnimationFinish={(isCancelled) => {
      if (!isCancelled) {
        setSplashAnimationFinished(true);
      }
    }} />;
  }


  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => (
            <View
              style={{
                flex: 1,
                borderRadius: 40,
                overflow: 'hidden',
              }}
            >
              <BlurView tint="light" intensity={20} style={StyleSheet.absoluteFill} />
            </View>
          ),
          tabBarItemStyle: {
            marginTop: 2.5,
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 40,
            height: 63,
            marginHorizontal: horizontalMargin,
            borderRadius: 40,
            borderWidth: 0,
            borderTopWidth: 0,
            elevation: 5,
            paddingHorizontal: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            zIndex: 999,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: (props) => (
              <CustomTabBarButton
                {...props}
                activeIconName="home"
                inactiveIconName="home-outline"
              />
            ),
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="favourites"
          options={{
            tabBarButton: (props) => (
              <CustomTabBarButton
                {...props}
                activeIconName="star"
                inactiveIconName="star-outline"
              />
            ),
            title: 'Favourites',
          }}
        />
      </Tabs>
    </Provider>
  );
}
