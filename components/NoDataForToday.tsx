import LottieView from 'lottie-react-native';
import { Dimensions, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");


const NoDataForToday = () => {
  return (
   <View className="absolute inset-0 justify-center items-center">
        <LottieView 
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            source={require('@/assets/animations/restday.lottie')}
            // source={require('@/assets/animations/ufo.lottie')}
            autoPlay
            loop
            resizeMode="cover"
            style={{
              width: SCREEN_WIDTH * 0.9, 
              height: SCREEN_WIDTH * 0.9,
              
            }}
          />
      <View className='relative items-center mt-[-40px]'>
        <Text className="text-textInactive tracking-wider text-lg font-latoBold">
          No Fixtures
        </Text>
      </View>
    </View>
  );
};

export default NoDataForToday;