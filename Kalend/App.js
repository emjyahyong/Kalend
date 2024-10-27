import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddSubscription from './AddSubscription';
import SubscriptionList from './SubscriptionList';
import CalendarScreen from './CalendarScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  // Charger les abonnements depuis AsyncStorage
  useEffect(() => {
    const loadSubscriptions = async () => {
      const savedSubscriptions = await AsyncStorage.getItem('subscriptions');
      if (savedSubscriptions) {
        setSubscriptions(JSON.parse(savedSubscriptions));
      }
    };
    loadSubscriptions();
  }, []);

  // Sauvegarder les abonnements dans AsyncStorage
  useEffect(() => {
    const saveSubscriptions = async () => {
      await AsyncStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    };
    if (subscriptions.length > 0) {
      saveSubscriptions();
    }
  }, [subscriptions]);

  // Fonction pour ajouter un abonnement
  const addSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
  };

  // Fonction pour supprimer un abonnement
  const deleteSubscription = (index) => {
    const newSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(newSubscriptions);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Abonnements">
          {() => <SubscriptionList subscriptions={subscriptions} onDelete={deleteSubscription} />}
        </Tab.Screen>
        <Tab.Screen name="Ajouter Abonnement">
          {() => <AddSubscription onAddSubscription={addSubscription} />}
        </Tab.Screen>
        <Tab.Screen name="Calendrier">
          {() => <CalendarScreen subscriptions={subscriptions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
