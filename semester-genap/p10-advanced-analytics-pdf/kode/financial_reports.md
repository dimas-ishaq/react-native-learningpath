# [TEFA] Kode Laporan Keuangan & PDF Export

## 1. Laravel: ProfitLoss API
```php
public function getProfitLoss(Request $request)
{
    $storeId = Auth::user()->store->id;
    
    // [TEFA] Hitung total penjualan dan total modal (HPP)
    $report = DB::table('transaction_items')
        ->join('transactions', 'transaction_items.transaction_id', '=', 'transactions.id')
        ->join('products', 'transaction_items.product_id', '=', 'products.id')
        ->where('transactions.store_id', $storeId)
        ->select(
            DB::raw('SUM(transaction_items.qty * transaction_items.price_at_time) as total_revenue'),
            DB::raw('SUM(transaction_items.qty * products.cost_price) as total_cost')
        )
        ->first();

    $profit = $report->total_revenue - $report->total_cost;

    return response()->json([
        'revenue' => (int)$report->total_revenue,
        'cost' => (int)$report->total_cost,
        'profit' => (int)$profit
    ]);
}
```

## 2. React Native: Generate PDF (`src/utils/pdfGenerator.js`)
```javascript
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export const generateFinancialPDF = async (storeName, data) => {
  // [TEFA] Desain Laporan dengan HTML & Inline CSS
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="color: #10b981; text-align: center;">${storeName}</h1>
        <h2 style="text-align: center;">Laporan Keuangan Bulanan</h2>
        <hr/>
        <table style="width: 100%; margin-top: 20px;">
          <tr><td>Total Omzet:</td><td style="text-align: right;"><b>Rp ${data.revenue.toLocaleString()}</b></td></tr>
          <tr><td>Total Modal:</td><td style="text-align: right; color: red;">- Rp ${data.cost.toLocaleString()}</td></tr>
          <tr style="font-size: 20px; font-weight: bold;">
            <td>LABA BERSIH:</td><td style="text-align: right; color: #10b981;">Rp ${data.profit.toLocaleString()}</td>
          </tr>
        </table>
        <p style="margin-top: 50px; font-size: 10px; text-align: center;">Dicetak otomatis oleh WARUNGku PRO</p>
      </body>
    </html>
  `;

  try {
    const { uri } = await Print.printToFileAsync({ html: htmlContent });
    await Sharing.shareAsync(uri);
  } catch (error) {
    alert("Gagal mencetak PDF");
  }
};
```
