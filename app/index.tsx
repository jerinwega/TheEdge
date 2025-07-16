import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
// import HomeCards from '@/components/HomeCards';
import HomeCards from '@/components/HomeCards';
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
     <SafeAreaView className="flex-1 bg-backgroundPrimary" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <Header />
        <DateTabSelector />
        <HomeCards />
      </View>
    </SafeAreaView>
  );
}