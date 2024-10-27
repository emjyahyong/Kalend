import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddSubscription({ onAddSubscription }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [renewalDate, setRenewalDate] = useState('');

  const handleAdd = () => {
    const subscription = {
      name,
      amount: parseFloat(amount),
      renewalDate,
    };
    onAddSubscription(subscription);
    setName('');
    setAmount('');
    setRenewalDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de l'abonnement</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Netflix"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Montant mensuel</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 9.99"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={styles.label}>Date de renouvellement</Text>
      <TextInput
        style={styles.input}
        placeholder="AAAA-MM-JJ"
        value={renewalDate}
        onChangeText={setRenewalDate}
      />
      <Button title="Ajouter abonnement" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginVertical: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
  },
});
