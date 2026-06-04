// [TEFA] src/utils/exportHelper.js (Simulasi Export CSV)
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export const exportTransactionsToCSV = async (transactions) => {
  // [TEFA] 1. Buat Header CSV
  let csvContent = "ID Transaksi,Tanggal,Jumlah Item,Total Harga\n";

  // [TEFA] 2. Tambahkan Data baris demi baris
  transactions.forEach(trx => {
    const row = `${trx.id},${new Date(trx.date).toLocaleDateString()},${trx.items},${trx.total}\n`;
    csvContent += row;
  });

  // [TEFA] 3. Tentukan lokasi file sementara
  const fileName = `Laporan_WARUNGku_${new Date().getTime()}.csv`;
  const fileUri = FileSystem.cacheDirectory + fileName;

  try {
    // [TEFA] 4. Tulis file ke penyimpanan lokal
    await FileSystem.writeAsStringAsync(fileUri, csvContent, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    // [TEFA] 5. Panggil menu Sharing ponsel
    const isAvailable = await Sharing.isAvailableAsync();
    if (isAvailable) {
      await Sharing.shareAsync(fileUri);
    } else {
      Alert.alert('Sukses', `File tersimpan di: ${fileUri}`);
    }
  } catch (error) {
    Alert.alert('Error', 'Gagal melakukan export data: ' + error.message);
  }
};

// [TEFA] Contoh penggunaan di Screen:
// <MyButton title="Export ke Excel" onPress={() => exportTransactionsToCSV(data)} />
