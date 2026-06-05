# [TEFA] Panduan Setup Laravel & Migrations

Jalankan perintah ini di terminal untuk menginisialisasi project:
```bash
composer create-project laravel/laravel backend-laravel
cd backend-laravel
```

## 1. Migrations
Buat file migration untuk kebutuhan WARUNGku PRO:
```bash
php artisan make:migration create_stores_table
php artisan make:migration create_products_table
```

### [TEFA] Contoh Isi `create_stores_table.php`
```php
public function up()
{
    Schema::create('stores', function (Blueprint $table) {
        $table->id();
        // [TEFA] Relasi ke tabel users (Satu user memiliki satu toko)
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->text('address')->nullable();
        $table->string('phone')->nullable();
        $table->decimal('tax_rate', 5, 2)->default(0); // [TEFA] Dukung desimal untuk pajak
        $table->timestamps();
    });
}
```

### [TEFA] Contoh Isi `create_products_table.php`
```php
public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        // [TEFA] Multi-tenancy: Produk ini milik toko yang mana?
        $table->foreignId('store_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->decimal('price', 12, 2); // [TEFA] Skala harga besar (12 digit)
        $table->integer('stock')->default(0);
        $table->string('image')->nullable();
        $table->timestamps();
    });
}
```

## 2. Seeder
Buat Seeder untuk mempopulasi data awal:
```bash
php artisan make:seeder DatabaseSeeder
```

### [TEFA] Contoh Isi `DatabaseSeeder.php`
```php
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Store;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // [TEFA] Buat User Owner
        $user = User::create([
            'name' => 'Budi Pemilik',
            'email' => 'admin@warungku.com',
            'password' => Hash::make('password123'),
        ]);

        // [TEFA] Buat Toko untuk User tersebut
        $store = Store::create([
            'user_id' => $user->id,
            'name' => 'Warung Budi',
            'address' => 'Jl. Merdeka No. 1',
        ]);

        // [TEFA] Masukkan produk dummy ke toko Budi
        Product::create(['store_id' => $store->id, 'name' => 'Beras 5kg', 'price' => 60000, 'stock' => 10]);
        Product::create(['store_id' => $store->id, 'name' => 'Minyak 2L', 'price' => 35000, 'stock' => 20]);
    }
}
```

Akhiri dengan perintah:
```bash
php artisan migrate:fresh --seed
```
