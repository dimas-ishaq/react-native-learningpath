// [TEFA] src/screens/PaymentScreen.js (Simulasi Checkout & Receipt)
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../theme/colors';
import { MyButton } from '../components/MyButton';

export default function PaymentScreen({ route, navigation }) {
  const { total } = route.params || { total: 0 };
  const [cashReceived, setCashReceived] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);

  const change = parseInt(cashReceived || 0) - total;

  const handleProcessPayment = () => {
    if (parseInt(cashReceived) < total) {
      Alert.alert('Gagal', 'Uang tunai tidak cukup!');
      return;
    }
    setShowReceipt(true);
  };

  const handleFinish = () => {
    setShowReceipt(false);
    // [TEFA] Reset keranjang dan kembali ke awal
    navigation.popToTop(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Tagihan</Text>
      <Text style={styles.totalAmount}>Rp {total.toLocaleString()}</Text>

      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>Uang Tunai Diterima</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          autoFocus
          value={cashReceived}
          onChangeText={setCashReceived}
        />
        
        <View style={styles.changeRow}>
          <Text style={styles.changeLabel}>Kembalian</Text>
          <Text style={[styles.changeAmount, change < 0 && { color: COLORS.danger }]}>
            Rp {change > 0 ? change.toLocaleString() : 0}
          </Text>
        </View>
      </View>

      <MyButton 
        title="PROSES PEMBAYARAN" 
        onPress={handleProcessPayment} 
        disabled={!cashReceived || change < 0}
      />

      {/* [TEFA] Digital Receipt Modal */}
      <Modal visible={showReceipt} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.receiptCard}>
            <Text style={styles.receiptHeader}>WARUNGku</Text>
            <Text style={styles.receiptSub}>Bukti Pembayaran Sah</Text>
            <View style={styles.divider} />
            
            <View style={styles.receiptRow}>
              <Text>No. Transaksi</Text>
              <Text style={{ fontWeight: 'bold' }}>TRX-00123</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text>Tanggal</Text>
              <Text>{new Date().toLocaleDateString('id-ID')}</Text>
            </View>

            <View style={styles.divider} />
            <View style={styles.receiptRow}>
              <Text style={styles.receiptTotalLabel}>TOTAL</Text>
              <Text style={styles.receiptTotalAmount}>Rp {total.toLocaleString()}</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text>Bayar (Tunai)</Text>
              <Text>Rp {parseInt(cashReceived).toLocaleString()}</Text>
            </View>
            <View style={styles.receiptRow}>
              <Text>Kembali</Text>
              <Text>Rp {change.toLocaleString()}</Text>
            </View>

            <Text style={styles.footerNote}>Terima kasih telah berbelanja!</Text>
            
            <MyButton title="TRANSAKSI BARU" onPress={handleFinish} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: COLORS.grayLight, justifyContent: 'center' },
  label: { fontSize: 16, color: COLORS.grayMedium, textAlign: 'center' },
  totalAmount: { fontSize: 40, fontWeight: 'bold', color: COLORS.primary, textAlign: 'center', marginBottom: 30 },
  inputCard: { backgroundColor: COLORS.white, padding: 20, borderRadius: 15, marginBottom: 20, elevation: 3 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 10 },
  input: { fontSize: 32, fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: COLORS.primary, paddingVertical: 5 },
  changeRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  changeLabel: { fontSize: 16, color: COLORS.grayMedium },
  changeAmount: { fontSize: 20, fontWeight: 'bold', color: COLORS.black },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  receiptCard: { backgroundColor: COLORS.white, borderRadius: 20, padding: 25, alignItems: 'center' },
  receiptHeader: { fontSize: 24, fontWeight: 'bold', color: COLORS.primary },
  receiptSub: { color: COLORS.grayMedium, fontSize: 12, marginBottom: 15 },
  divider: { height: 1, backgroundColor: '#eee', width: '100%', marginVertical: 15, borderStyle: 'dashed' },
  receiptRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 },
  receiptTotalLabel: { fontSize: 18, fontWeight: 'bold' },
  receiptTotalAmount: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary },
  footerNote: { marginTop: 30, color: COLORS.grayMedium, marginBottom: 20 },
});
