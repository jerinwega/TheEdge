import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
// import NoData from "@/components/NoData";
import HomeCards from "@/components/HomeCards";
// import NoDataForToday from "@/components/NoDataForToday";
import { StatusBar } from "react-native";
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-backgroundPrimary" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <Animated.View entering={FadeInUp} className="flex-1">
        <Header />
        <DateTabSelector />
        <HomeCards />
        {/* <NoDataForToday /> */}
        {/* <NoData /> */}
      </Animated.View>
    </SafeAreaView>
  );
}
