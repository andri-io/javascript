// Undefined
let x;
console.log(typeof x);

// Numbers 
let y = 100;
console.log(typeof y);

/*

Operator	Fungsi	Contoh
+	Penjumlahan	10 + 10 = 20
-	Pengurangan	15 - 7 = 8
/	Pembagian	21 / 7 = 3
*	Perkalian	9 * 9 = 81
%	Sisa hasil bagi	5 % 2 = 1
**	Perpangkatan	3 ** 3 = 27


*/

let a = 20;
let b = 45;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// BigInt;
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

// String 
let greet = "Hello World";
console.log(typeof(greet))

/* output: string */

// Contoh 1
const question = '"What do you think of JavaScript?" I asked';

console.log(question)

// contoh 2
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

// Boolean
let t = true;
let f = false;

console.log(typeof t);
console.log(typeof f);

// Syimbol
const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
