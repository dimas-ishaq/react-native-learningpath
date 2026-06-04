# [TEFA] Kode API Transaksi & Sinkronisasi

## 1. Laravel: TransactionController
`php artisan make:controller Api/TransactionController`

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\TransactionItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        $storeId = Auth::user()->store->id;

        // [TEFA] Gunakan DB Transaction untuk keamanan data
        return DB::transaction(function () use ($request, $storeId) {
            // 1. Simpan Header Transaksi
            $transaction = Transaction::create([
                'store_id' => $storeId,
                'total_price' => $request->total_price,
                'cash_received' => $request->cash_received,
                'change_amount' => $request->change_amount,
            ]);

            // 2. Simpan Detail Item & Update Stok
            foreach ($request->items as $item) {
                TransactionItem::create([
                    'transaction_id' => $transaction->id,
                    'product_id' => $item['id'],
                    'qty' => $item['qty'],
                    'price_at_time' => $item['price'],
                ]);

                // [TEFA] Kurangi stok di server
                $product = Product::find($item['id']);
                $product->decrement('stock', $item['qty']);
            }

            return response()->json(['message' => 'Transaksi tersinkron!', 'id' => $transaction->id], 201);
        });
    }
}
```

## 2. React Native: Logic di PaymentScreen
```javascript
import api from '../services/api';
import { triggerStockAlert } from '../services/notificationService';

const handleProcessPayment = async () => {
    // ... logika simpan lokal tetap ada ...

    try {
        const payload = {
            total_price: total,
            cash_received: parseInt(cashReceived),
            change_amount: change,
            items: cart // [TEFA] Kirim seluruh isi keranjang belanja
        };

        const response = await api.post('/transactions', payload, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        // [TEFA] Update status lokal menjadi 'Synced'
        markAsSynced(localId); 
    } catch (e) {
        console.log("Offline: Transaksi disimpan di antrean sync lokal");
    }
};
```
