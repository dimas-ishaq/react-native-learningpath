// [TEFA] src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.greeting}>Halo, Pemilik Warung! 👋</Text>
      <Text style={styles.subtitle}>Berikut ringkasan tokomu hari ini</Text>

      {/* [TEFA] Row Kartu Statistik Utama */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: COLORS.primary }]}>
          <Ionicons name="wallet-outline" size={24} color={COLORS.white} />
          <Text style={styles.statLabelWhite}>Omzet Hari Ini</Text>
          <Text style={styles.statValueWhite}>Rp 1.250.000</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: COLORS.white }]}>
          <Ionicons name="cart-outline" size={24} color={COLORS.primary} />
          <Text style={styles.statLabel}>Transaksi</Text>
          <Text style={styles.statValue}>42</Text>
        </View>
      </View>

      {/* [TEFA] Grafik Penjualan Placeholder (Visual representation) */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Tren Penjualan 7 Hari Terakhir</Text>
        <View style={styles.placeholderChart}>
          {/* Simulasi Grafik Batang dengan View */}
          {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
            <View key={i} style={[styles.chartBar, { height: h }]} />
          ))}
        </View>
        <View style={styles.chartLabels}>
          <Text style={styles.labelSmall}>Sen</Text>
          <Text style={styles.labelSmall}>Sel</Text>
          <Text style={styles.labelSmall}>Rab</Text>
          <Text style={styles.labelSmall}>Kam</Text>
          <Text style={styles.labelSmall}>Jum</Text>
          <Text style={styles.labelSmall}>Sab</Text>
          <Text style={styles.labelSmall}>Min</Text>
        </View>
      </View>

      {/* [TEFA] Widget Stok Menipis */}
      <View style={styles.warningCard}>
        <View style={styles.warningHeader}>
          <Ionicons name="warning" size={20} color={COLORS.warning} />
          <Text style={styles.warningTitle}>Peringatan Stok</Text>
        </View>
        <Text style={styles.warningText}>Ada 3 produk yang hampir habis. Segera belanja stok!</Text>
        <Text style={styles.productLink}>Lihat Produk {'>'}</Text>
      </View>

      {/* [TEFA] Top Product List */}
      <Text style={styles.sectionTitle}>Produk Terlaris</Text>
      {[
        { name: 'Minyak Goreng 1L', sold: 15 },
        { name: 'Beras Premium 1kg', sold: 12 },
        { name: 'Gula Pasir 1kg', sold: 10 },
      ].map((item, index) => (
        <View key={index} style={styles.topProductItem}>
          <Text style={styles.rankText}>{index + 1}</Text>
          <Text style={styles.topProductName}>{item.name}</Text>
          <Text style={styles.topProductSold}>{item.sold} Terjual</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.grayLight },
  greeting: { fontSize: 24, fontWeight: 'bold', color: COLORS.black },
  subtitle: { fontSize: 14, color: COLORS.grayMedium, marginBottom: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: { flex: 0.48, padding: 15, borderRadius: 15, elevation: 3 },
  statLabel: { fontSize: 12, color: COLORS.grayMedium, marginTop: 10 },
  statLabelWhite: { fontSize: 12, color: '#e0f2f1', marginTop: 10 },
  statValue: { fontSize: 18, fontWeight: 'bold', color: COLORS.black, marginTop: 5 },
  statValueWhite: { fontSize: 18, fontWeight: 'bold', color: COLORS.white, marginTop: 5 },
  chartContainer: { backgroundColor: COLORS.white, padding: 20, borderRadius: 15, marginBottom: 20, elevation: 2 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: COLORS.black },
  placeholderChart: { height: 120, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 10 },
  chartBar: { width: 15, backgroundColor: COLORS.primary, borderRadius: 5 },
  chartLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 5 },
  labelSmall: { fontSize: 10, color: COLORS.grayMedium },
  warningCard: { backgroundColor: '#fff9db', padding: 15, borderRadius: 12, borderLeftWidth: 5, borderLeftColor: COLORS.warning, marginBottom: 20 },
  warningHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  warningTitle: { fontWeight: 'bold', marginLeft: 5, color: COLORS.warning },
  warningText: { fontSize: 13, color: '#856404' },
  productLink: { marginTop: 10, color: COLORS.primary, fontWeight: 'bold', textAlign: 'right' },
  topProductItem: { flexDirection: 'row', backgroundColor: COLORS.white, padding: 15, borderRadius: 10, marginBottom: 8, alignItems: 'center' },
  rankText: { width: 25, fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
  topProductName: { flex: 1, fontWeight: '500' },
  topProductSold: { color: COLORS.grayMedium, fontSize: 12 },
});
