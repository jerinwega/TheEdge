import '@/global.css';
import colors from '@/theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarItemStyle: {
            marginTop: 11,
             height: 63,         // Match tab bar height
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            backgroundColor: colors.backgroundPrimary,
            position: 'absolute',
            bottom: 40,
            height: 63,
            marginHorizontal: 100,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: colors.backgroundPrimary,
            borderTopColor: colors.backgroundPrimary,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 9 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
            paddingHorizontal: 20,
            alignSelf: 'center',
            justifyContent: 'center',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                width: 48,
                height: 48,
                borderRadius: 30,
                backgroundColor: focused ? colors.logoRed : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                }}
              >
                <Ionicons name="home" size={22} color={color} />
              </View>
            ),
            title: 'Home',
          }}
        />

        <Tabs.Screen
          name="favourites"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                 width: 48,
                height: 48,
                borderRadius: 30,
                backgroundColor: focused ? colors.logoRed : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                }}
              >
                <Ionicons name="star" size={22} color={color} />
              </View>
            ),
            title: 'Favourites',
          }}
        />
      </Tabs>
    </Provider>
  );
}
