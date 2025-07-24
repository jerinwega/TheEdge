import dayjs from 'dayjs';
import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";


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
    date: dayjs().add(i, 'day').toDate(),
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
        className={`w-24 mr-2 items-center rounded-2xl py-1 justify-center ${
          isActive ? "bg-slate-300" : "bg-transparent"
        }`}
      >
        <Text
          className={`text-base ${
            isActive ? "text-black font-bungee" : "text-textInactive font-latoBold"
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
      className={`w-14 items-center rounded-2xl py-1 ${
    isActive ? "bg-slate-300" : "bg-transparent"
  } ${index !== dateTabs.length - 1 ? "mr-2" : ""}`}
    >
      <Text
        className={`text-base ${
          isActive ? "text-black font-bungee" : "text-textInactive font-latoBold"
        }`}
      >
        {day}
      </Text>
      <Text
        className={`text-sm ${
          isActive ? "text-black font-bungee font-bold" : "text-textInactive font-latoBold"
        }`}
      >
        {month}
      </Text>
    </Pressable>
  );
};


  return (
    <View className="bg-transparent mt-3 rounded-lg">
      <FlatList
        ref={flatListRef}
        data={dateTabs}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 2 }}
      />
    </View>
  );
};

export default DateTabSelector;
