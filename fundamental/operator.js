// Aritmatika 
let a = 10;
let b = 5;

let addition = a + b; // Penjumlahan
let subtraction = a - b; // Pengurangan
let multiplication = a * b; // Perkalian
let division = a / b; // Pembagian
let modulus = a % b; // Modulus (Sisa pembagian)

// penugasan 
let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// perbandingan
let p = 10;
let q = 15;

let isEqual = p == q; // Sama dengan
let isNotEqual = p != q; // Tidak sama dengan
let isGreater = p > q; // Lebih besar dari
let isLess = p < q; // Lebih kecil dari
let isGreaterOrEqual = p >= q; // Lebih besar atau sama dengan
let isLessOrEqual = p <= q; // Lebih kecil atau sama dengan

// operator logika
let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse; // Operator AND (&&)
let orResult = isTrue || isFalse; // Operator OR (||)
let notResult = !isTrue; // Operator NOT (!)

// operator ternary (Conditional)
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Not Adult";

// Operator String Concatenation:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Menggabungkan string

// operator increment dan decrement
let count = 5;

count++; // Increment (count akan menjadi 6)
count--; // Decrement (count akan menjadi 5 lagi)

// operator type of
let variable = 10;
let variableType = typeof variable; // Mendapatkan tipe data dari variabel

// operator in  (Untuk menguji apakah properti ada dalam objek):
let person = { name: "Alice", age: 25 };
let hasName = "name" in person; // Menguji apakah properti "name" ada dalam objek person
