// [TEFA] src/screens/KasirScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

export default function KasirScreen() {
  const [products] = useState([
    { id: '1', name: 'Beras 1kg', price: 15000 },
    { id: '2', name: 'Minyak 1L', price: 18000 },
    { id: '3', name: 'Telur 1kg', price: 28000 },
    { id: '4', name: 'Gula 1kg', price: 14000 },
  ]);

  const [cart, setCart] = useState([]);

  // [TEFA] Logika Tambah ke Keranjang
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem.qty > 1) {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, qty: item.qty - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  // [TEFA] Derived State: Hitung total belanja
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <View style={styles.container}>
      {/* Katalog Produk */}
      <View style={styles.catalogContainer}>
        <Text style={styles.sectionTitle}>Katalog Produk</Text>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard} onPress={() => addToCart(item)}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>Rp {item.price.toLocaleString()}</Text>
              <View style={styles.addBtn}>
                <Ionicons name="add-circle" size={24} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Area Keranjang Belanja */}
      <View style={styles.cartContainer}>
        <View style={styles.cartHeader}>
          <Text style={styles.cartTitle}>Keranjang ({cart.length})</Text>
          <TouchableOpacity onPress={() => setCart([])}>
            <Text style={{ color: COLORS.danger }}>Reset</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.cartList}>
          {cart.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <View style={styles.qtyControl}>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Ionicons name="remove-circle-outline" size={24} color={COLORS.danger} />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.qty}</Text>
                <TouchableOpacity onPress={() => addToCart(item)}>
                  <Ionicons name="add-circle-outline" size={24} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
              <Text style={styles.cartItemSubtotal}>Rp {(item.price * item.qty).toLocaleString()}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Bayar</Text>
            <Text style={styles.totalAmount}>Rp {totalPrice.toLocaleString()}</Text>
          </View>
          <TouchableOpacity 
            style={[styles.checkoutBtn, cart.length === 0 && { backgroundColor: COLORS.grayMedium }]}
            disabled={cart.length === 0}
            onPress={() => alert('Lanjut ke Pembayaran')}
          >
            <Text style={styles.checkoutText}>BAYAR SEKARANG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  catalogContainer: { flex: 1, padding: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  productCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center'
  },
  productName: { fontWeight: 'bold', textAlign: 'center' },
  productPrice: { color: COLORS.primary, marginTop: 5 },
  addBtn: { marginTop: 10 },
  cartContainer: { flex: 1, backgroundColor: COLORS.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 10, padding: 20 },
  cartHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  cartTitle: { fontSize: 18, fontWeight: 'bold' },
  cartList: { flex: 1 },
  cartItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  cartItemName: { flex: 1, fontWeight: '500' },
  qtyControl: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' },
  qtyText: { marginHorizontal: 10, fontSize: 16, fontWeight: 'bold' },
  cartItemSubtotal: { flex: 1, textAlign: 'right', fontWeight: 'bold' },
  footer: { marginTop: 10 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontSize: 16, color: COLORS.grayMedium },
  totalAmount: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  checkoutBtn: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 10, alignItems: 'center' },
  checkoutText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 }
});
