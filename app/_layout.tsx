import CustomTabBarButton from '@/components/CustomTabBarButton';
import '@/global.css';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';

const { width } = Dimensions.get('window');
const horizontalMargin = Math.min(width * 0.28, 105); // cap at 105

export default function RootLayout() {
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
