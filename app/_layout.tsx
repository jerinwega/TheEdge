import '@/global.css';
import colors from '@/theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Dimensions, View } from 'react-native';
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
          tabBarItemStyle: {
            marginTop: 11.5
          },
          tabBarStyle: {
            backgroundColor: colors.backgroundPrimary,
            position: 'absolute',
            bottom: 40,
            height: 63,
            marginHorizontal: horizontalMargin,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.backgroundPrimary,
            shadowColor: colors.shadowColor,
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
                style={{ width: 48, height: 48 }}
                className={`rounded-[24px] justify-center items-center ${
                  focused ? 'bg-logoRed' : 'bg-transparent'
                }`}
              >
                <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
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
              style={{ width: 48, height: 48 }}
                className={`rounded-[24px] justify-center items-center ${
                  focused ? 'bg-logoRed' : 'bg-transparent'
                }`}
              >
                <Ionicons name={focused ? 'star' : 'star-outline'} size={20} color={color} />
              </View>
            ),
            title: 'Favourites',
          }}
        />
      </Tabs>
    </Provider>
  );
}
