# [TEFA] Kode Dashboard Real-time & Role Access

## 1. Laravel: DashboardController
`php artisan make:controller Api/DashboardController`

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function stats()
    {
        $storeId = Auth::user()->store->id;
        $today = Carbon::today();

        // [TEFA] Agregasi data di server agar respons API sangat cepat
        $omzet = Transaction::where('store_id', $storeId)
            ->whereDate('created_at', $today)
            ->sum('total_price');

        $trxCount = Transaction::where('store_id', $storeId)
            ->whereDate('created_at', $today)
            ->count();

        $lowStock = Product::where('store_id', $storeId)
            ->where('stock', '<', 5)
            ->count();

        return response()->json([
            'omzet' => (int)$omzet,
            'transactions' => $trxCount,
            'low_stock_count' => $lowStock,
            'last_update' => now()->toDateTimeString()
        ]);
    }
}
```

## 2. React Native: Auto-refresh Logic (Polling)
```javascript
import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function DashboardScreen() {
  const [stats, setStats] = useState({ omzet: 0, transactions: 0 });

  const fetchStats = async () => {
    try {
      const response = await api.get('/dashboard/stats');
      setStats(response.data);
    } catch (e) {
      console.error("Gagal update dashboard");
    }
  };

  useEffect(() => {
    fetchStats(); // [TEFA] Ambil data awal saat buka layar

    // [TEFA] Set interval polling setiap 30 detik
    const interval = setInterval(() => {
      fetchStats();
    }, 30000);

    return () => clearInterval(interval); // [TEFA] Bersihkan memori saat layar ditutup
  }, []);

  return (
    // ... UI Dashboard menggunakan data dari state 'stats'
  );
}
```
