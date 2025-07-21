import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
// import NoData from "@/components/NoData";
import HomeCards from "@/components/HomeCards";
// import NoDataForToday from "@/components/NoDataForToday";
import { useCustomFonts } from '@/hooks/useCustomFonts';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


// Prevent splash from auto hiding
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const fontsLoaded = useCustomFonts();

   useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // 👈 hide splash when fonts loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-backgroundPrimary">
        <ActivityIndicator size="large" color="#c10007" />
      </View>
    );
  }

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
