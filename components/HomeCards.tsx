import React, { useRef } from "react";
import {
    Animated,
    Dimensions,
    ListRenderItem,
    StyleSheet,
    View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_HEIGHT = 120;
const CARD_SPACING = 16;

const DATA = Array.from({ length: 20 }).map((_, i) => ({ id: i.toString() }));

const HomeCards: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem: ListRenderItem<{ id: string }> = ({ index }) => {
    const position = Animated.subtract(
      Animated.divide(scrollY, CARD_HEIGHT + CARD_SPACING),
      index
    );

    const opacity = position.interpolate({
      inputRange: [-1, 0, 1, 2],
      outputRange: [0.5, 0.8, 0.8, 0.5],
      extrapolate: "clamp",
    });

    const translateY = position.interpolate({
      inputRange: [-1, 0, 1, 2],
      outputRange: [0, 0, -10, -20],
      extrapolate: "clamp",
    });

    const scale = position.interpolate({
      inputRange: [-1, 0, 1, 2],
      outputRange: [0.95, 1, 0.97, 0.95],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        className="bg-backgroundCard rounded-2xl self-center"
        style={[
          styles.card,
          {
            opacity,
            transform: [{ translateY }, { scale }],
          },
        ]}
      />
    );
  };

  return (
    <Animated.FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingTop: 16 }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: CARD_SPACING }} />}
      ListFooterComponent={<View style={{ height: CARD_HEIGHT * 2 }} />}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    height: CARD_HEIGHT,
  },
});

export default HomeCards;
