# [TEFA] Kode Monetisasi & Paywall

## 1. Migration: Subscription Fields
```php
// Tambahkan di migration stores
Schema::table('stores', function (Blueprint $table) {
    $table->enum('plan', ['free', 'trial', 'pro'])->default('free');
    $table->dateTime('expired_at')->nullable();
});
```

## 2. Laravel: Premium Middleware
`php artisan make:middleware CheckPremium`

```php
public function handle(Request $request, Closure $next)
{
    $store = Auth::user()->store;
    
    // [TEFA] Cek apakah plan aktif dan belum expired
    if (($store->plan == 'pro' || $store->plan == 'trial') && now()->lt($store->expired_at)) {
        return $next($request);
    }

    return response()->json([
        'message' => 'Fitur ini hanya tersedia untuk pengguna PRO. Silakan upgrade.',
        'upgrade_url' => '/upgrade'
    ], 403);
}
```

## 3. React Native: Paywall UI Concept
```javascript
// src/components/PremiumFeature.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const PremiumFeature = ({ isPro, children, navigation }) => {
  if (isPro) return children; // [TEFA] Tampilkan fitur asli jika PRO

  return (
    <View style={styles.lockedContainer}>
       <Text>🔒 Fitur Premium</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Upgrade')}>
          <Text style={{color: 'blue'}}>Upgrade ke PRO untuk Akses</Text>
       </TouchableOpacity>
    </View>
  );
};
```
