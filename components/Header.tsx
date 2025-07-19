import { Text, View } from "react-native";

const Header = () => {
  return (
  <View className="flex-row justify-center py-5">
  <Text className="text-textPrimary text-xl font-mrDafoe pt-0.1">
    the{"  "}
  </Text>
   <View className="flex-row items-end">
        <Text className="text-logoRed text-4xl font-bungee">
          ED
        </Text>
         <View style={{ transform: [{ scaleX: -1 }] }}>
          <Text className="text-logoRed text-4xl font-bungee">
            EG
          </Text>
        </View>
      </View>
</View>
  );
};

export default Header;