import LottieView from 'lottie-react-native';
import { Text, View } from "react-native";


const Header = () => {
  return (
  <View className="flex-row justify-center py-5">
  <Text className="text-textPrimary text-xl font-mrDafoe pt-0.1">
    the{"  "}
  </Text>
   <View className="flex-row items-end">
        <Text className="text-logoRed text-4xl font-bungee">
          ED
        </Text>
         <View className="scale-x-[-1]">
          <Text className="text-logoRed text-4xl font-bungee">
            EG
          </Text>
        </View>
      </View>
      <View className='relative w-9 h-9 ml-0.5'>
        <LottieView
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require('@/assets/animations/flag.lottie')}
          autoPlay
          loop
          style={{
            width: 38,
            height: 38,
          }}
        />
        <LottieView
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          source={require('@/assets/animations/football.lottie')}
          // autoPlay
          // loop
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            top: 20,
            right: 0, // adjust this to your desired closeness
          }}
        />
      </View>
















</View>
  );
};

export default Header;