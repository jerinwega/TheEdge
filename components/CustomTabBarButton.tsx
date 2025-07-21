import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import TabBarIcon from './TabBarIcon';


type CustomTabBarButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
  ['aria-selected']?: boolean;
  activeIconName: keyof typeof Ionicons.glyphMap;
  inactiveIconName: keyof typeof Ionicons.glyphMap;
  tintColor?: string;
};

function CustomTabBarButton({
  onPress,
  style,
  ['aria-selected']: selected = false,
  activeIconName,
  inactiveIconName,
  tintColor = '#999',
}: CustomTabBarButtonProps) {

  const [animate, setAnimate] = useState(false);

 const handlePress = (event: GestureResponderEvent) => {
  setAnimate(true);
  setTimeout(() => setAnimate(false), 300);
  onPress?.(event);
};

  return (
    <Pressable onPress={handlePress} style={style}>
      <TabBarIcon
        focused={selected}
        color={selected ? '#fff' : tintColor}
        activeIconName={activeIconName}
        inactiveIconName={inactiveIconName}
        animate={animate}
      />
    </Pressable>
  );
}

export default CustomTabBarButton;
