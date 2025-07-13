import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

// const ITEM_WIDTH = 80;

type DateTab = {
  label: string; // for Today/Tomorrow only
  date: Date;
};

const DateTabSelector: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const dateTabs: DateTab[] = Array.from({ length: 15 }, (_, i) => ({
    label: i === 0 ? "TODAY" : "", 
    date: new Date(Date.now() + i * 86400000),
  }));


const handlePress = (index: number) => {
  setSelectedIndex(index);

  flatListRef.current?.scrollToIndex({
    index,
    animated: true,
    viewPosition: 0.5, // center tab — works fine without getItemLayout
  });

  Animated.timing(animatedValue, {
    toValue: index,
    duration: 300,
    useNativeDriver: false,
  }).start();
};



const renderItem = ({ item, index }: { item: DateTab; index: number }) => {
  const day = item.date.getDate();
  const month = item.date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();

  const isActive = index === selectedIndex;

  if (index === 0) {
    // Only "Today" tab - label only, vertically centered
    return (
      <Pressable
        onPress={() => handlePress(index)}
        className={`w-24 mr-1 items-center rounded-lg py-2 justify-center ${
          isActive ? "bg-dateSelectorActiveBg" : "bg-backgroundCard"
        }`}
      >
        <Text
          className={`text-md ${
            isActive ? "text-white font-bold" : "text-textInactive"
          }`}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  }

  // All other dates - day number + month below
  return (
    <Pressable
      onPress={() => handlePress(index)}
      className={`w-16 items-center rounded-lg py-2 ${
    isActive ? "bg-dateSelectorActiveBg" : "bg-backgroundCard"
  } ${index !== dateTabs.length - 1 ? "mr-1" : ""}`}
    >
      <Text
        className={`text-lg font-bold ${
          isActive ? "text-white" : "text-textInactive"
        }`}
      >
        {day}
      </Text>
      <Text
        className={`mt-1 text-sm ${
          isActive ? "text-white font-bold" : "text-textInactive"
        }`}
      >
        {month}
      </Text>
    </Pressable>
  );
};


  return (
    <View className="bg-backgroundCard mt-3 rounded-lg">
      <FlatList
        ref={flatListRef}
        data={dateTabs}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ paddingHorizontal: 16 }} // helps center edge items
        // getItemLayout={(_, index) => ({
        //   length: ITEM_WIDTH,
        //   offset: ITEM_WIDTH * index,
        //   index,
        // })}
      />
    </View>
  );
};

export default DateTabSelector;
