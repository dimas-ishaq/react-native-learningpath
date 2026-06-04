// [TEFA] src/components/OptimizedProductCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import * as Haptics from 'expo-haptics';

// [TEFA] Gunakan React.memo agar kartu tidak render ulang jika data produk tetap sama
const ProductCard = React.memo(({ item, onAdd }) => {
  console.log(`Rendering: ${item.name}`); // Cek di console untuk melihat optimasi

  const handlePress = () => {
    // [TEFA] Memberikan feedback getaran halus saat ditekan
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onAdd(item);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
      </View>
      <View style={styles.plusIcon}>
        <Text style={styles.plusText}>+</Text>
      </View>
    </TouchableOpacity>
  );
});

// [TEFA] Contoh Skeleton Loading Sederhana
export const ProductSkeleton = () => (
  <View style={[styles.card, { backgroundColor: '#eee', elevation: 0 }]}>
    <View style={{ width: '60%', height: 15, backgroundColor: '#ddd', borderRadius: 4 }} />
    <View style={{ width: '30%', height: 12, backgroundColor: '#ddd', borderRadius: 4, marginTop: 8 }} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'space-between'
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { color: COLORS.primary, marginTop: 4 },
  plusIcon: { width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  plusText: { color: COLORS.white, fontSize: 20, fontWeight: 'bold' }
});

export default ProductCard;
