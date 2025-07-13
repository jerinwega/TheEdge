import Header from "@/components/Header";
import HomeCards from '@/components/HomeCards';
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favourites = () => {
  return (
  <SafeAreaView className="flex-1 bg-backgroundPrimary" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <Header />
        <HomeCards />
      </View>
    </SafeAreaView>
  );
};

export default Favourites;