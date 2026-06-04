// [TEFA] src/screens/HistoryScreen.js
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryScreen() {
  const [filter, setFilter] = useState('Semua'); // [TEFA] State untuk filter aktif

  // [TEFA] Dummy data transaksi
  const [transactions] = useState([
    { id: 'TRX-001', date: '2026-06-05T10:00:00', total: 45000, items: 3 },
    { id: 'TRX-002', date: '2026-06-05T11:30:00', total: 12000, items: 1 },
    { id: 'TRX-003', date: '2026-06-04T09:15:00', total: 85000, items: 5 },
    { id: 'TRX-004', date: '2026-05-30T15:00:00', total: 250000, items: 12 },
  ]);

  // [TEFA] Logika Filter Data
  const filteredData = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    if (filter === 'Hari ini') {
      return transactions.filter(t => t.date.startsWith(today));
    }
    return transactions;
  }, [filter, transactions]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.historyCard}>
      <View style={styles.iconContainer}>
        <Ionicons name="receipt-outline" size={24} color={COLORS.primary} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.trxId}>{item.id}</Text>
        <Text style={styles.dateText}>{new Date(item.date).toLocaleString('id-ID')}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.totalAmount}>Rp {item.total.toLocaleString()}</Text>
        <Text style={styles.itemCount}>{item.items} Item</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Filter */}
      <View style={styles.filterBar}>
        {['Semua', 'Hari ini'].map((btn) => (
          <TouchableOpacity 
            key={btn}
            style={[styles.filterBtn, filter === btn && styles.filterBtnActive]}
            onPress={() => setFilter(btn)}
          >
            <Text style={[styles.filterText, filter === btn && styles.filterTextActive]}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={50} color={COLORS.grayMedium} />
            <Text style={styles.emptyText}>Tidak ada transaksi untuk periode ini.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.grayLight },
  filterBar: { flexDirection: 'row', padding: 15, backgroundColor: COLORS.white },
  filterBtn: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, marginRight: 10, backgroundColor: COLORS.grayLight },
  filterBtnActive: { backgroundColor: COLORS.primary },
  filterText: { color: COLORS.black, fontWeight: '600' },
  filterTextActive: { color: COLORS.white },
  historyCard: { backgroundColor: COLORS.white, padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconContainer: { width: 45, height: 45, backgroundColor: '#e6f7f1', borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  infoContainer: { flex: 1, marginLeft: 15 },
  trxId: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
  dateText: { fontSize: 12, color: COLORS.grayMedium, marginTop: 2 },
  amountContainer: { alignItems: 'flex-end' },
  totalAmount: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
  itemCount: { fontSize: 12, color: COLORS.grayMedium },
  emptyContainer: { alignItems: 'center', marginTop: 100 },
  emptyText: { marginTop: 10, color: COLORS.grayMedium }
});
