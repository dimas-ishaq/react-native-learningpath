# [TEFA] Kode Onboarding & Help Center

## 1. Onboarding Manager (`src/utils/onboarding.js`)
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkFirstTime = async () => {
  try {
    const value = await AsyncStorage.getItem('@is_first_time');
    if (value === null) {
      // [TEFA] Ini adalah pertama kalinya user masuk
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const markAsIntroduced = async () => {
  await AsyncStorage.setItem('@is_first_time', 'false');
};
```

## 2. Help Center UI (`src/screens/HelpScreen.js`)
```javascript
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAQ_DATA = [
  { q: "Cara tambah produk baru?", a: "Buka menu Produk, klik tombol (+) di kanan bawah." },
  { q: "Data saya aman jika HP hilang?", a: "Ya, WARUNGku PRO menyimpan data Anda di Cloud secara otomatis." },
];

export default function HelpScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pusat Bantuan</Text>
      
      {/* [TEFA] Video Tutorial Section */}
      <TouchableOpacity 
        onPress={() => Linking.openURL('https://youtube.com/tutorial-warungku')}
        style={styles.videoCard}
      >
        <Ionicons name="play-circle" size={40} color="red" />
        <Text>Tonton Video Panduan</Text>
      </TouchableOpacity>

      {/* [TEFA] Accordion FAQ Sederhana */}
      {FAQ_DATA.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={{ fontWeight: 'bold' }}>{item.q}</Text>
          <Text style={{ color: 'gray', marginTop: 5 }}>{item.a}</Text>
        </View>
      ))}

      {/* [TEFA] Chat Support Button */}
      <MyButton 
        title="Chat Support WhatsApp" 
        onPress={() => Linking.openURL('https://wa.me/62812345678')} 
      />
    </ScrollView>
  );
}
```
