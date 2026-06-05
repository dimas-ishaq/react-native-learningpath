# [TEFA] Kode Integrasi Auth (React Native)

## 1. Setup Axios Service (`src/services/api.js`)
```javascript
import axios from 'axios';

// [TEFA] Ganti IP dengan IP Laptop Anda (cek via 'ipconfig' atau 'ifconfig')
const API_URL = 'http://192.168.1.10:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
```

## 2. Auth Service (`src/services/authService.js`)
```javascript
import api from './api';
import * as SecureStore from 'expo-secure-store';

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    if (response.data.access_token) {
      // [TEFA] Simpan token di brankas terenkripsi
      await SecureStore.setItemAsync('user_token', response.data.access_token);
    }
    return response.data;
  } catch (error) {
    // [TEFA] Lempar error agar bisa ditangkap di UI
    throw error.response?.data?.message || 'Terjadi kesalahan koneksi';
  }
};

export const logout = async () => {
  const token = await SecureStore.getItemAsync('user_token');
  await api.post('/logout', {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
  await SecureStore.deleteItemAsync('user_token');
};
```

## 3. Integrasi di UI (`src/screens/auth/LoginScreen.js`)
```javascript
// ... import existing components
import { login } from '../../services/authService';

// Di dalam fungsi LoginScreen:
const handleLogin = async () => {
  setLoading(true);
  setError('');

  try {
    const result = await login(email, password);
    Alert.alert('Sukses', 'Berhasil terhubung ke Cloud!');
    navigation.replace('MainApp');
  } catch (err) {
    setError(err); // [TEFA] Tampilkan pesan error dari server
  } finally {
    setLoading(false);
  }
};
```
