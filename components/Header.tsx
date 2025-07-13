import { Text, View } from "react-native";

const Header = () => {
  return (
  <View className="flex-row justify-center py-5">
  <Text numberOfLines={1} className="text-textPrimary text-2xl font-black pt-0.5">
    the{" "}
  </Text>
  <Text numberOfLines={1} className="text-red-700 text-3xl font-black">
    EDGE
  </Text>
</View>
  );
};

export default Header;