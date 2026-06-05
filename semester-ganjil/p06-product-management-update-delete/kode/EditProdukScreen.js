// [TEFA] src/screens/EditProdukScreen.js (Contoh Logika Edit & Hapus)
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { MyButton } from '../../components/MyButton';
import { COLORS } from '../../theme/colors';

export default function EditProdukScreen({ route, navigation }) {
  // [TEFA] Mengambil data produk yang dikirim dari layar list
  const { product } = route.params || { product: { name: '', price: 0, stock: 0 } };
  
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price.toString());
  const [stock, setStock] = useState(product.stock.toString());

  const handleUpdate = () => {
    if (!name || !price || !stock) {
      Alert.alert('Gagal', 'Semua field harus diisi!');
      return;
    }
    
    // [TEFA] Logika Update ke Database/State
    Alert.alert('Sukses', 'Produk berhasil diperbarui');
    navigation.goBack();
  };

  const handleDelete = () => {
    // [TEFA] Jaring Pengaman Industri (Confirmation Dialog)
    Alert.alert(
      'Konfirmasi Hapus',
      `Apakah Anda yakin ingin menghapus "${name}"? Data yang dihapus tidak bisa dikembalikan.`,
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Hapus', 
          style: 'destructive', 
          onPress: () => {
            // [TEFA] Logika hapus data
            Alert.alert('Terhapus', 'Produk telah dihapus dari sistem');
            navigation.goBack();
          } 
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Produk</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Harga (Rp)</Text>
      <TextInput 
        style={styles.input} 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
      />

      <Text style={styles.label}>Stok</Text>
      <TextInput 
        style={styles.input} 
        value={stock} 
        onChangeText={setStock} 
        keyboardType="numeric" 
      />

      <MyButton title="Simpan Perubahan" onPress={handleUpdate} style={{ marginTop: 20 }} />
      <MyButton 
        title="Hapus Produk" 
        type="danger" 
        onPress={handleDelete} 
        style={{ marginTop: 10 }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.white },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});
