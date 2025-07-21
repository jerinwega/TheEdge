import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
// import NoData from "@/components/NoData";
import HomeCards from "@/components/HomeCards";
// import NoDataForToday from "@/components/NoDataForToday";
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
        {/* <NoDataForToday /> */}
        {/* <NoData /> */}
      </View>
    </SafeAreaView>
  );
}
