// Loop for - Mencetak Angka 1 hingga 10:
for (let i=0; i <=10; i++){
    console.log(i);
}

// loop while mencetak angka 1 sampai 10
let k = 1;
while (k <= 10) {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++;
}


// Loop for...of - Melooping Elemen Array:
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Loop for...in - Melooping Properti dalam Objek:
let person = { name: "Alice", age: 25, job: "engineer" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Loop forEach - Menggunakan Array Method forEach():
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});


// Loop map - Menggunakan Array Method map():

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(squaredNumbers);

