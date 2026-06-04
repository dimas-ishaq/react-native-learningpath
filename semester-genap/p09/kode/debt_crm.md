# [TEFA] Kode CRM & Manajemen Hutang

## 1. Migration: Customers & Debts
```php
// create_customers_table.php
Schema::create('customers', function (Blueprint $table) {
    $table->id();
    $table->foreignId('store_id')->constrained();
    $table->string('name');
    $table->string('phone')->nullable();
    $table->decimal('total_debt', 12, 2)->default(0); // [TEFA] Cache saldo hutang
    $table->timestamps();
});

// create_debts_table.php
Schema::create('debts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('customer_id')->constrained();
    $table->foreignId('transaction_id')->constrained();
    $table->decimal('amount', 12, 2);
    $table->enum('status', ['unpaid', 'partial', 'paid'])->default('unpaid');
    $table->timestamps();
});
```

## 2. Laravel: Logic Update Hutang di TransactionController
```php
// Di dalam store() method
if ($request->payment_method == 'debt') {
    // 1. Pastikan customer_id ada
    $customerId = $request->customer_id;
    
    // 2. Simpan record hutang
    Debt::create([
        'customer_id' => $customerId,
        'transaction_id' => $transaction->id,
        'amount' => $request->total_price,
        'status' => 'unpaid'
    ]);

    // 3. Update saldo hutang pelanggan (Increment)
    $customer = Customer::find($customerId);
    $customer->increment('total_debt', $request->total_price);
}
```

## 3. React Native: WhatsApp Debt Reminder
```javascript
export const sendDebtReminder = (customerName, phone, amount) => {
  const message = `Halo ${customerName}, kami dari WARUNGku menginformasikan catatan hutang sebesar *Rp ${amount.toLocaleString()}*. Mohon segera dilakukan pelunasan. Terima kasih!`;
  const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;
  Linking.openURL(url);
};
```
