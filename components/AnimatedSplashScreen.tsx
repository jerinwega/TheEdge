import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { Dimensions, View } from "react-native";
import Animated, { ZoomOut } from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);
  return (
       <View className="flex-1 justify-center items-center bg-backgroundPrimary">
        <AnimatedLottieView
            exiting={ZoomOut}
            ref={animation}
            onAnimationFinish={onAnimationFinish}
            source={require('@/assets/animations/edgeSplash.json')}
            autoPlay
            loop={false}
            resizeMode="cover"
            style={{
              width: SCREEN_WIDTH * 1, 
              height: SCREEN_WIDTH * 1,
              // backgroundColor: colors.backgroundPrimary
            }}
        />
      </View>
  );
} 

export default AnimatedSplashScreen;