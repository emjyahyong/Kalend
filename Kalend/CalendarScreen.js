import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StyleSheet } from 'react-native';

export default function CalendarScreen({ subscriptions }) {
  const markedDates = subscriptions.reduce((acc, subscription) => {
    acc[subscription.renewalDate] = { marked: true, dotColor: 'blue' };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={(day) => {
          console.log('Date sélectionnée :', day.dateString);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
