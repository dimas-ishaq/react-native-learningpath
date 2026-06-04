# [TEFA] Kode Keamanan & Optimasi

## 1. Pembersihan Console Log (`babel.config.js`)
Mencegah bocornya data sensitif ke log sistem Android/iOS.
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['transform-remove-console'], // [TEFA] Hapus log otomatis di mode rilis
      },
    },
  };
};
```

## 2. Enkripsi Data Lokal Tambahan
```javascript
import * as AES from 'crypto-js/aes';
import * as SecureStore from 'expo-secure-store';

// [TEFA] Enkripsi data sebelum disimpan ke SecureStore (Double Layer Security)
export const saveSecureData = async (key, value) => {
  const secretKey = "KUNCI-RAHASIA-DEVELOPER"; // Harusnya dari .env
  const encryptedValue = AES.encrypt(value, secretKey).toString();
  await SecureStore.setItemAsync(key, encryptedValue);
};
```

## 3. Laravel: Audit Log Middleware
Mencatat siapa yang mengakses API untuk melacak aktivitas mencurigakan.
```php
public function handle(Request $request, Closure $next)
{
    $response = $next($request);

    // [TEFA] Catat hanya untuk aksi penting (POST, PUT, DELETE)
    if ($request->isMethod('post') || $request->isMethod('delete')) {
        \Log::info("Audit Log: User " . Auth::id() . " melakukan " . $request->path());
    }

    return $response;
}
```
