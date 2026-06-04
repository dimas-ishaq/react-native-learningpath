# [TEFA] Kode WhatsApp & QR Ecosystem

## 1. WhatsApp Helper (`src/utils/whatsappHelper.js`)
```javascript
import { Linking } from 'react-native';

export const sendWhatsAppReceipt = (phone, storeName, transaction) => {
  // [TEFA] Gunakan * untuk bold di WhatsApp
  let message = `*STRUK DIGITAL ${storeName}*\n`;
  message += `--------------------------\n`;
  message += `No: ${transaction.id}\n`;
  message += `Tgl: ${new Date().toLocaleString()}\n\n`;
  
  transaction.items.forEach(item => {
    message += `${item.name} x${item.qty}\n`;
    message += `Rp ${item.price.toLocaleString()} \n`;
  });
  
  message += `\n*TOTAL: Rp ${transaction.total.toLocaleString()}*\n`;
  message += `--------------------------\n`;
  message += `Terima kasih telah berlangganan!`;

  // [TEFA] Wajib URL Encode agar pesan tidak rusak
  const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
  
  Linking.openURL(url).catch(() => {
    alert("Pastikan WhatsApp terinstall di HP Anda");
  });
};
```

## 2. QR Scanner Component (`src/components/QRScanner.js`)
```javascript
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRScanner({ onScanSuccess, onClose }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // [TEFA] Berikan feedback visual/audio di sini
    onScanSuccess(data); // Kirim ID produk hasil scan ke layar Kasir
  };

  if (hasPermission === null) return <Text>Meminta izin kamera...</Text>;
  if (hasPermission === false) return <Text>Akses kamera ditolak</Text>;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Button title="Tutup Scanner" onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center' },
});
```
