# [TEFA] Kode Smart Sync & NetInfo

## 1. Monitor Koneksi (`src/hooks/useConnectivity.js`)
```javascript
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useConnectivity = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // [TEFA] Subscribe ke perubahan status internet
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected && state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  return isConnected;
};
```

## 2. Logic Antrean Sync (`src/services/syncService.js`)
```javascript
import api from './api';
import { getUnsyncedTransactions, markAsSynced } from '../db/localDB';

export const processSyncQueue = async () => {
  const transactions = await getUnsyncedTransactions();
  
  if (transactions.length === 0) return;

  console.log(`Memulai sinkronisasi ${transactions.length} data...`);

  for (const trx of transactions) {
    try {
      // [TEFA] Pastikan endpoint API menangani idempotensi
      await api.post('/transactions/sync', trx);
      
      // Jika sukses, tandai di lokal
      await markAsSynced(trx.id);
    } catch (error) {
      console.log(`Gagal sync ID: ${trx.id}, akan dicoba lagi nanti.`);
      break; // Berhenti sebentar jika memang internet masih bermasalah
    }
  }
};
```

## 3. UI Indicator (`src/components/OfflineNotice.js`)
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useConnectivity } from '../hooks/useConnectivity';

export const OfflineNotice = () => {
  const isConnected = useConnectivity();

  if (isConnected) return null; // [TEFA] Sembunyikan jika online

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mode Offline: Data disimpan secara lokal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#ef4444', padding: 5, alignItems: 'center' },
  text: { color: 'white', fontSize: 12, fontWeight: 'bold' }
});
```
