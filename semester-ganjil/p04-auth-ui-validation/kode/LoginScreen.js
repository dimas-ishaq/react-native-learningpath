// [TEFA] src/screens/auth/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { MyButton } from '../../components/MyButton';
import { COLORS } from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  };

  const handleLogin = async () => {
    setError('');
    
    // [TEFA] Validasi Client-side
    if (!validateEmail(email)) {
      setError('Format email tidak valid!');
      return;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter!');
      return;
    }

    setLoading(true);

    // [TEFA] Simulasi Request API selama 2 detik
    setTimeout(async () => {
      setLoading(false);
      try {
        await AsyncStorage.setItem('user_session', 'active');
        Alert.alert('Sukses', 'Selamat Datang di WARUNGku!');
        // navigation.replace('MainApp'); // [TEFA] Ganti ke layar utama
      } catch (e) {
        Alert.alert('Error', 'Gagal menyimpan session');
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masuk ke WARUNGku</Text>
      <Text style={styles.subtitle}>Kelola bisnismu lebih mudah sekarang</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, error.includes('email') && styles.inputError]}
          placeholder="admin@warungku.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, error.includes('Password') && styles.inputError]}
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} style={{ marginVertical: 20 }} />
        ) : (
          <MyButton title="Masuk" onPress={handleLogin} style={{ marginTop: 20 }} />
        )}

        <MyButton 
          title="Belum punya akun? Daftar" 
          type="outline" 
          onPress={() => Alert.alert('Info', 'Fitur Register segera hadir!')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: 30, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.black },
  subtitle: { fontSize: 16, color: COLORS.grayMedium, marginBottom: 30 },
  inputContainer: { width: '100%' },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.black, marginBottom: 5, marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
    fontSize: 16,
  },
  inputError: { borderColor: COLORS.danger },
  errorText: { color: COLORS.danger, fontSize: 12, marginTop: 5 },
});
