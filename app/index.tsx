import DateTabSelector from "@/components/DateTabSelector";
import Header from "@/components/Header";
import HomeCards from "@/components/HomeCards";
import { fetchFixturesByDate } from "@/redux/actions";
import { AppDispatch, RootState } from '@/redux/store';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux';



export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.fixtures
  );

    // State for currently selected date tab index & date
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Default to today in YYYY-MM-DD format
    const today = dayjs().format('YYYY-MM-DD');
    return today;
  });


useEffect(() => {
  if (selectedDate) {
    dispatch(fetchFixturesByDate(selectedDate));
  }
}, [dispatch, selectedDate]);


    // Handler for date change from DateTabSelector
  const handleDateChange = (date: Date, index: number) => {
    setSelectedIndex(index);
    setSelectedDate(dayjs(date).format('YYYY-MM-DD'));
  };


  console.log("selectedDate1", selectedDate);


  return (
    <SafeAreaView className="flex-1 bg-backgroundPrimary" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <Animated.View entering={FadeInUp} className="flex-1">
        <Header />
        <DateTabSelector
          selectedIndex={selectedIndex}
          onDateChange={handleDateChange}
        />
        <HomeCards 
          fixtures={data} 
          isFetching={loading}
          error={error}
          selectedDate={selectedDate}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
