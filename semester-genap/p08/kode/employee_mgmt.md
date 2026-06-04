# [TEFA] Kode Manajemen Karyawan & PIN

## 1. Migration: Employees & Shifts
```php
// create_employees_table.php
Schema::create('employees', function (Blueprint $table) {
    $table->id();
    $table->foreignId('store_id')->constrained();
    $table->string('name');
    $table->string('pin', 4); // [TEFA] Simpan PIN 4 digit
    $table->enum('role', ['admin', 'kasir'])->default('kasir');
    $table->timestamps();
});

// create_shifts_table.php
Schema::create('shifts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('employee_id')->constrained();
    $table->dateTime('start_time');
    $table->dateTime('end_time')->nullable();
    $table->decimal('starting_cash', 12, 2)->default(0);
    $table->decimal('total_sales', 12, 2)->default(0);
    $table->timestamps();
});
```

## 2. Laravel: EmployeeController (Auth Kasir)
```php
public function loginWithPin(Request $request) {
    $request->validate(['pin' => 'required|digits:4']);
    
    $employee = Employee::where('store_id', Auth::user()->store->id)
                        ->where('pin', $request->pin)
                        ->first();

    if (!$employee) {
        return response()->json(['message' => 'PIN Salah!'], 401);
    }

    // [TEFA] Mulai Shift Baru
    $shift = Shift::create([
        'employee_id' => $employee->id,
        'start_time' => now(),
        'starting_cash' => $request->starting_cash ?? 0
    ]);

    return response()->json([
        'employee' => $employee,
        'shift_id' => $shift->id
    ]);
}
```

## 3. React Native: PIN Input UI Concept
```javascript
// Gunakan TextInput dengan properti khusus
<TextInput
  keyboardType="numeric"
  maxLength={4}
  secureTextEntry={true}
  style={styles.pinInput}
  onChangeText={(text) => {
    if(text.length === 4) handleAutoSubmit(text);
  }}
/>
```
