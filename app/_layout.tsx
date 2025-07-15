import '@/global.css';
import colors from '@/theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';

const { width } = Dimensions.get('window');
const horizontalMargin = Math.min(width * 0.28, 105); // cap at 100px


export default function RootLayout() {

  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarItemStyle: {
            marginTop: 11
          },
          tabBarStyle: {
            backgroundColor: colors.backgroundPrimary,
            position: 'absolute',
            bottom: 40,
            height: 63,
            marginHorizontal: horizontalMargin,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: colors.backgroundPrimary,
            borderTopColor: colors.backgroundPrimary,
            shadowColor: 'rgba(255, 255, 255, 0.03)',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 5,
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
