// tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.


let lastName;
lastName = "Skywalker";

console.log(lastName);

// penamaan variabel yang perlu Anda ketahui:

// Harus dimulai dengan huruf atau underscore (_).
// Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
// Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
// Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)

const z = 100;
console.log(z);
z = 200; /* TypeError: Assignment to constant variable. */
console.log(z)

