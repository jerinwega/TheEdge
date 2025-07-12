import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row px-2 py-3">
      <Text
        numberOfLines={1}
        className="flex-1 text-textPrimary text-center font-black text-3xl"
      >
        THE EDGE
      </Text>
    </View>
  );
};

export default Header;