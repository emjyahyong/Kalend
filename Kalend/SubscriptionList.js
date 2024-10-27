import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function SubscriptionList({ subscriptions, onDelete }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={subscriptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.amount}€ - Renouvellement le {item.renewalDate}</Text>
            <Button title="Supprimer" onPress={() => onDelete(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});
