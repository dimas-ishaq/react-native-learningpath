// [TEFA] src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // [TEFA] Standar ikon Expo

// Import Placeholder Screens
import KasirScreen from '../screens/KasirScreen';
import ProdukScreen from '../screens/ProdukScreen';
import LaporanScreen from '../screens/LaporanScreen';
import ProfilScreen from '../screens/ProfilScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// [TEFA] Main App Navigation (Setelah Login)
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Kasir') iconName = focused ? 'cart' : 'cart-outline';
          else if (route.name === 'Produk') iconName = focused ? 'cube' : 'cube-outline';
          else if (route.name === 'Laporan') iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          else if (route.name === 'Profil') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Kasir" component={KasirScreen} />
      <Tab.Screen name="Produk" component={ProdukScreen} />
      <Tab.Screen name="Laporan" component={LaporanScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}

// [TEFA] Root Navigator (Pintu Utama)
export default function AppNavigator() {
  const isUserLoggedIn = true; // [TEFA] Simulasi status login

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isUserLoggedIn ? (
          <Stack.Screen name="MainApp" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
