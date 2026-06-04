// [TEFA] File utama aplikasi. Di sini kita mengatur navigasi awal atau Splash Screen.
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // [TEFA] Simulasi loading asset/data selama 3 detik
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000);
  }, []);

  if (!isAppReady) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#10b981" />
        {/* [TEFA] Ganti source logo dengan image lokal nantinya */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>W</Text>
        </View>
        <Text style={styles.brandName}>WARUNGku</Text>
        <Text style={styles.tagline}>Solusi Digital UMKM</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text style={styles.welcomeText}>Selamat Datang di Dashboard WARUNGku!</Text>
      <Text style={styles.subText}>Project ini baru saja dimulai. Mari buat sesuatu yang luar biasa!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#10b981', // [TEFA] Warna Emerald Green (Brand Identity)
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#10b981',
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  tagline: {
    fontSize: 16,
    color: '#e0f2f1',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
});
