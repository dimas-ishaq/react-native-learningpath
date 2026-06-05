// [TEFA] src/screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ScrollView, Alert } from 'react-native';
import { COLORS } from '../theme/colors';
import { MyButton } from '../components/MyButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {
  const [storeName, setStoreName] = useState('WARUNGku');
  const [address, setAddress] = useState('Jl. Pendidikan No. 123');
  const [tax, setTax] = useState('0');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotification, setIsNotification] = useState(true);

  // [TEFA] Load settings saat komponen dibuka
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('store_settings');
      if (savedSettings) {
        const data = JSON.parse(savedSettings);
        setStoreName(data.storeName);
        setAddress(data.address);
        setTax(data.tax);
        setIsDarkMode(data.isDarkMode);
      }
    } catch (e) {
      console.log("Gagal memuat pengaturan");
    }
  };

  const handleSave = async () => {
    try {
      const settings = { storeName, address, tax, isDarkMode };
      await AsyncStorage.setItem('store_settings', JSON.stringify(settings));
      Alert.alert('Sukses', 'Pengaturan toko berhasil disimpan!');
    } catch (e) {
      Alert.alert('Error', 'Gagal menyimpan pengaturan');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.sectionTitle}>Profil Toko</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nama Toko</Text>
        <TextInput style={styles.input} value={storeName} onChangeText={setStoreName} />
        
        <Text style={styles.label}>Alamat</Text>
        <TextInput 
          style={[styles.input, { height: 80 }]} 
          value={address} 
          onChangeText={setAddress} 
          multiline 
        />
      </View>

      <Text style={styles.sectionTitle}>Preferensi Aplikasi</Text>
      <View style={styles.card}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Mode Gelap (Dark Mode)</Text>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Notifikasi Stok</Text>
          <Switch value={isNotification} onValueChange={setIsNotification} />
        </View>
        
        <Text style={styles.label}>Pajak (%)</Text>
        <TextInput 
          style={styles.input} 
          value={tax} 
          onChangeText={setTax} 
          keyboardType="numeric" 
        />
      </View>

      <MyButton title="SIMPAN PENGATURAN" onPress={handleSave} style={{ marginTop: 20 }} />
      
      <View style={styles.footer}>
        <Text style={styles.versionText}>WARUNGku Versi 1.0.0</Text>
        <Text style={styles.supportText}>Butuh Bantuan? Hubungi Support</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.grayLight },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginBottom: 10, marginTop: 10 },
  card: { backgroundColor: COLORS.white, padding: 15, borderRadius: 12, marginBottom: 20, elevation: 2 },
  label: { fontSize: 14, color: COLORS.black, marginBottom: 5, fontWeight: '500' },
  input: { borderWidth: 1, borderColor: COLORS.grayLight, padding: 10, borderRadius: 8, marginBottom: 15, fontSize: 16 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  footer: { marginTop: 30, alignItems: 'center' },
  versionText: { fontSize: 12, color: COLORS.grayMedium },
  supportText: { fontSize: 14, color: COLORS.primary, marginTop: 5, fontWeight: 'bold' }
});
