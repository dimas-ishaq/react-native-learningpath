# [TEFA] Kode Sinkronisasi Produk

## 1. Laravel: ProductController
`php artisan make:controller Api/ProductController --api`

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index()
    {
        // [TEFA] Hanya ambil produk milik toko user yang sedang login
        $storeId = Auth::user()->store->id;
        return Product::where('store_id', $storeId)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $product = Product::create([
            'store_id' => Auth::user()->store->id,
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
        ]);

        return response()->json($product, 201);
    }
}
```

## 2. React Native: productService.js
```javascript
import api from './api';
import * as SecureStore from 'expo-secure-store';

export const syncProducts = async (localProducts) => {
  const token = await SecureStore.getItemAsync('user_token');
  
  // [TEFA] Ambil hanya produk yang belum di-sync
  const un-synced = localProducts.filter(p => !p.is_synced);

  for (const product of un-synced) {
    try {
      await api.post('/products', product, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // [TEFA] Jika sukses, update status di database lokal Anda
      // updateLocalDBStatus(product.id, true);
    } catch (e) {
      console.error("Gagal sync item: " + product.name);
    }
  }
};
```

## 3. API Route Terlindungi (`routes/api.php`)
```php
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('products', ProductController::class);
});
```
