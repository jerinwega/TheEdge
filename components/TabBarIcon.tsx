import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect } from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  activeIconName: keyof typeof Ionicons.glyphMap;
  inactiveIconName: keyof typeof Ionicons.glyphMap;
  animate?: boolean;
};

export default function TabBarIcon({
  focused,
  color,
  activeIconName,
  inactiveIconName,
  animate = false,
}: TabBarIconProps) {
  const scale = useSharedValue(1);

//   useEffect(() => {
//     if (focused) {
//       scale.value = withSpring(
//         1.4,
//         undefined,
//         (finished) => finished && (scale.value = withSpring(1))
//       );
//     } else {
//       scale.value = withSpring(1);
//     }
//   }, [focused]);

  useEffect(() => {
    if (animate) {
      scale.value = withSpring(
        1.3,
        undefined,
        (finished) => finished && (scale.value = withSpring(1))
      );
    }
  }, [animate]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[{ width: 48, height: 48 }, animatedStyle]}
      className="rounded-[24px] justify-center items-center"
    >
      <Ionicons
        name={focused ? activeIconName : inactiveIconName}
        size={20}
        color={color}
      />
    </Animated.View>
  );
}
