import colors from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.92;
const CARD_HEIGHT = 120;
const BORDER_RADIUS = 24;
const BORDER_THICKNESS = 0.2;
const CARD_SPACING = 12;
const ROTATE_SIZE = CARD_WIDTH + 40;

const DATA = Array.from({ length: 20 }).map((_, i) => ({ id: i.toString() }));

const HomeCards: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const renderItem: ListRenderItem<{ id: string }> = ({ index }) => {
    const position = Animated.subtract(
      Animated.divide(scrollY, CARD_HEIGHT + CARD_SPACING),
      index
    );

    const opacity = position.interpolate({
      inputRange: [-1, 0, 1, 2],
      outputRange: [0.4, 0.8, 0.8, 0.4],
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
        style={[
          styles.cardAnimated,
          {
            opacity,
            transform: [{ translateY }, { scale }],
          },
        ]}
      >
        <View style={styles.outerContainer}>
          {/* Rotating Gradient Border Layer */}
          <Animated.View style={[styles.gradientLayer, { transform: [{ rotate }] }]}>
            <LinearGradient
            colors={[
            colors.animatedBorder,
            colors.backgroundCard,       
            colors.backgroundCard,      
            ]}
            locations={[0.0, 0.4, 1]} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1.5 }}
              style={styles.gradient}
            />
          </Animated.View>

          {/* Inner Card */}
          <View style={styles.innerCard} />
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingTop: 16, paddingBottom: CARD_HEIGHT * 2 }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: CARD_SPACING }} />}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  cardAnimated: {
    marginHorizontal: width * 0.04,
  },

  outerContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  gradientLayer: {
    position: "absolute",
    width: ROTATE_SIZE,
    height: ROTATE_SIZE,
    borderRadius: ROTATE_SIZE / 2,
    top: -(ROTATE_SIZE - CARD_HEIGHT) / 2,
    left: -(ROTATE_SIZE - CARD_WIDTH) / 2,
    zIndex: 2,
  },

  gradient: {
    flex: 1,
    borderRadius: ROTATE_SIZE / 2,
  },

  innerCard: {
    width: CARD_WIDTH - BORDER_THICKNESS * 2,
    height: CARD_HEIGHT - BORDER_THICKNESS * 2,
    backgroundColor: colors.backgroundCard,
    borderRadius: BORDER_RADIUS - BORDER_THICKNESS,
    zIndex: 3,
  },
});

export default HomeCards;
