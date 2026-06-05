// [TEFA] src/services/notificationService.js
import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';

// [TEFA] Konfigurasi tampilan notifikasi saat app terbuka
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const requestNotificationPermission = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    Alert.alert('Izin Ditolak', 'Aktifkan notifikasi untuk mendapatkan info stok menipis!');
    return false;
  }
  return true;
};

// [TEFA] Fungsi untuk memicu notifikasi stok menipis
export const triggerStockAlert = async (productName, currentStock) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "⚠️ Stok Menipis!",
      body: `Produk ${productName} sisa ${currentStock} item. Segera belanja stok baru!`,
      data: { screen: 'Produk' },
    },
    trigger: null, // [TEFA] null berarti kirim SEKARANG
  });
};

// [TEFA] Fungsi untuk menjadwalkan pengingat laporan harian
export const scheduleDailyReminder = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📝 Waktunya Laporan!",
      body: "Hari sudah malam, yuk cek omzet tokomu hari ini di WARUNGku.",
    },
    trigger: {
      hour: 21,
      minute: 0,
      repeats: true, // [TEFA] Berulang setiap hari jam 21.00
    },
  });
};
