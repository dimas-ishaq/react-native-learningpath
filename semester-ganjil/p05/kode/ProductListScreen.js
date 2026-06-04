// [TEFA] src/screens/ProdukScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

export default function ProdukScreen() {
  // [TEFA] Data dummy awal (Nanti diganti SQLite)
  const [products, setProducts] = useState([
    { id: '1', name: 'Beras Premium 1kg', price: 15000, stock: 25 },
    { id: '2', name: 'Minyak Goreng 1L', price: 18000, stock: 12 },
    { id: '3', name: 'Gula Pasir 1kg', price: 14500, stock: 5 }, // Low stock!
  ]);

  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image-outline" size={30} color={COLORS.grayMedium} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
        <Text style={[styles.stock, item.stock < 10 && { color: COLORS.danger }]}>
          Stok: {item.stock}
        </Text>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Ionicons name="chevron-forward" size={20} color={COLORS.grayMedium} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={{ padding: 15 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Belum ada produk. Klik + untuk menambah.</Text>
        }
      />
      
      {/* [TEFA] Floating Action Button (FAB) */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => alert('Buka Layar Tambah Produk')}
      >
        <Ionicons name="add" size={30} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.grayLight },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: { flex: 1, marginLeft: 15 },
  name: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
  price: { fontSize: 14, color: COLORS.primary, fontWeight: '600', marginTop: 2 },
  stock: { fontSize: 12, color: COLORS.grayMedium, marginTop: 4 },
  editBtn: { padding: 5 },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  emptyText: { textAlign: 'center', marginTop: 50, color: COLORS.grayMedium },
});
