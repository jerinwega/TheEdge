import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
import HomeCards from '@/components/HomeCards';
import { useCustomFonts } from '@/hooks/useCustomFonts';
import { ActivityIndicator, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const fontsLoaded = useCustomFonts();

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
      </View>
    </SafeAreaView>
  );
}
