import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
// import NoData from "@/components/NoData";
import HomeCards from "@/components/HomeCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// import NoDataForToday from "@/components/NoDataForToday";
import { fetchFixturesByDate } from '@/redux/actions/fixtureActions';
import { AppDispatch, RootState } from '@/redux/store'; // adjust path
import { StatusBar } from "react-native";
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.fixtures
  );

 useEffect(() => {
    dispatch(fetchFixturesByDate('2025-07-24'));
  }, [dispatch]);


  return (
    <SafeAreaView className="flex-1 bg-backgroundPrimary" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <Animated.View entering={FadeInUp} className="flex-1">
        <Header />
        <DateTabSelector />
        <HomeCards 
          fixtures={data} 
          isFetching={loading}
          error={error}
        />
        {/* <NoDataForToday /> */}
        {/* <NoData /> */}
      </Animated.View>
    </SafeAreaView>
  );
}
